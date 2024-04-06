import { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import BeatLoader from "react-spinners/BeatLoader";

import Hero from "../components/Hero";
import ProjectsList from "../components/ProjectsList";
import Contacts from "../components/Contacts";
import { db } from "../firebase";
import type { Project } from "../types/Project";
import type { Contact } from "../types/Contact";

const HomePage = () => {
  const [projects, setProjects] = useState<Project[]>();
  const [areProjectsLoading, setAreProjectsLoading] = useState(true);
  const [contacts, setContacts] = useState<Contact[]>();
  const [areContactsLoading, setAreContactsLoading] = useState(true);

  useEffect(() => {
    const projectsData = sessionStorage.getItem("projects");

    if (projectsData) {
      setProjects(JSON.parse(projectsData));
      setAreProjectsLoading(false);
      return;
    }

    const getProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectsData = querySnapshot.docs.map(
          (doc) => doc.data() as Project,
        );

        setProjects(projectsData);
        sessionStorage.setItem("projects", JSON.stringify(projectsData));
      } catch (err) {
        console.log(err);
      } finally {
        setAreProjectsLoading(false);
      }
    };

    getProjects();
  }, []);

  useEffect(() => {
    const contactsData = sessionStorage.getItem("contacts");

    if (contactsData) {
      setContacts(JSON.parse(contactsData));
      setAreContactsLoading(false);
      return;
    }

    const getContacts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "contacts"));
        const contactsData = querySnapshot.docs.map(
          (doc) => doc.data() as Contact,
        );

        setContacts(contactsData);
        sessionStorage.setItem("contacts", JSON.stringify(contactsData));
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
