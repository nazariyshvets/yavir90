import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import BeatLoader from "react-spinners/BeatLoader";

import Hero from "../components/Hero";
import ProjectsList from "../components/ProjectsList";
import Contacts from "../components/Contacts";
import { db, storage } from "../firebase";
import Project from "../types/Project";
import Contact from "../types/Contact";

const HomePage = () => {
  const [projects, setProjects] = useState<Project[]>();
  const [areProjectsLoading, setAreProjectsLoading] = useState(true);
  const [contacts, setContacts] = useState<Contact[]>();
  const [areContactsLoading, setAreContactsLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectsData: Project[] = [];

        await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const project = doc.data() as Project;
            const photoUrlPromises: Promise<string>[] = [];
            const apartmentImgUrlPromises: Promise<string>[] = [];

            project.photoUrls.forEach((photoUrl) => {
              photoUrlPromises.push(
                getDownloadURL(ref(storage, `images/${photoUrl}`)),
              );
            });

            project.apartments.forEach((apartment) => {
              apartmentImgUrlPromises.push(
                getDownloadURL(ref(storage, `images/${apartment.imgUrl}`)),
              );
            });

            const [photoUrlsWithUrls, apartmentImgUrlsWithUrls, videoUrl] =
              await Promise.all([
                Promise.allSettled(photoUrlPromises),
                Promise.allSettled(apartmentImgUrlPromises),
                project.videoUrl
                  ? getDownloadURL(
                      ref(storage, `videos/${project.videoUrl}`),
                    ).catch(() => null)
                  : null,
              ]);

            const photoUrlMap: Record<string, string> = {};
            project.photoUrls.forEach((url, index) => {
              if (photoUrlsWithUrls[index].status === "fulfilled") {
                photoUrlMap[url] = (
                  photoUrlsWithUrls[index] as PromiseFulfilledResult<string>
                ).value;
              }
            });

            const updatedProject: Project = {
              ...project,
              photoUrls: project.photoUrls.map((url) => photoUrlMap[url]),
              apartments: project.apartments.map((apartment, index) => ({
                ...apartment,
                imgUrl:
                  apartmentImgUrlsWithUrls[index].status === "fulfilled"
                    ? (
                        apartmentImgUrlsWithUrls[
                          index
                        ] as PromiseFulfilledResult<string>
                      ).value
                    : null,
              })),
              videoUrl: videoUrl ?? null,
            };

            projectsData.push(updatedProject);
          }),
        );

        setProjects(projectsData);
      } catch (err) {
        console.log(err);
      } finally {
        setAreProjectsLoading(false);
      }
    };

    getProjects();
  }, []);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "contacts"));
        const contactsData = querySnapshot.docs.map(
          (doc) => doc.data() as Contact,
        );
        setContacts(contactsData);
      } catch (err) {
        console.log(err);
      } finally {
        setAreContactsLoading(false);
      }
    };

    getContacts();
  }, []);

  if (areProjectsLoading || areContactsLoading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <BeatLoader color="#fff" />
      </div>
    );

  return (
    <div className="min-h-screen">
      <Hero />
      <ProjectsList projects={projects || []} />
      <Contacts contacts={contacts || []} />
    </div>
  );
};

export default HomePage;
