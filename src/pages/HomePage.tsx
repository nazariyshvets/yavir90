import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import BeatLoader from "react-spinners/BeatLoader";

import Hero from "../components/Hero";
import ProjectsList from "../components/ProjectsList";
import Contacts from "../components/Contacts";
import { db } from "../firebase";
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

        setProjects(querySnapshot.docs.map((doc) => doc.data() as Project));
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

        setContacts(querySnapshot.docs.map((doc) => doc.data() as Contact));
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
