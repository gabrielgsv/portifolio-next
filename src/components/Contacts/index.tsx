import React from "react";
import ContactsAnimation from "./ContactsAnimation";
import Link from "next/link";
import ContactsList from "./ContactsList";

const Contacts = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        <ContactsAnimation />
        <ContactsList />
      </div>
    </>
  );
};

export default Contacts;
