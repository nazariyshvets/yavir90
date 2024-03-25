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

        for (const doc of querySnapshot.docs) {
          const project = doc.data() as Project;
          let videoUrl;

          const photoUrlsWithUrls = await Promise.all(
            project.photoUrls.map(async (photoUrl) => {
              try {
                return await getDownloadURL(ref(storage, `images/${photoUrl}`));
              } catch (err) {
                console.log(err);
              }
            }),
          );

          const apartmentsWithUrls = await Promise.all(
            project.apartments.map(async (apartment) => {
              try {
                const imgUrl = await getDownloadURL(
                  ref(storage, `images/${apartment.imgUrl}`),
                );
                return { ...apartment, imgUrl };
              } catch (err) {
                console.log(err);
                return apartment;
              }
            }),
          );

          try {
            videoUrl = await getDownloadURL(
              ref(storage, `videos/${project.videoUrl}`),
            );
          } catch (err) {
            console.log(err);
          }

          projectsData.push({
            ...project,
            apartments: apartmentsWithUrls,
            photoUrls: photoUrlsWithUrls.filter(Boolean) as string[],
            videoUrl,
          });
        }

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
