import { useState, useEffect } from "react";

import { getContacts, type Contact } from "./api";
import { ContactCard } from "./components/contact-card";
import { Spinner } from "./icons/spinner";

export default function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchContacts = async () => {
    setIsLoading(true);
    try {
      const contacts = await getContacts();
      setContacts(contacts);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div
      className="flex h-full w-full flex-col items-center bg-very-light-gray
    text-very-dark-blue"
    >
      <div className="flex h-full w-full max-w-[1100px] flex-col items-center justify-stretch gap-8 px-6 py-10 desktop:gap-10 ">
        <header className="flex max-w-[480px] flex-col items-center">
          <h2 className=" pb-1 text-2xl font-extralight desktop:text-3xl">
            CSS, Javascript, API
          </h2>
          <h1 className=" pb-4 text-2xl font-semibold desktop:text-3xl">
            Contacts Application
          </h1>
          <p className="text-center text-sm text-grayish-blue">
            View basic info of contracts in a 3x2 layout. Click on the magnifier
            icon to open a modal and vire detailed contact info contact
          </p>
        </header>
        {isLoading && (
          <main className="flex min-h-[400px] items-center justify-center">
            <Spinner />
          </main>
        )}
        {hasError && (
          <main className="flex min-h-[400px] items-center justify-center">
            <p className="text-2xl font-semibold text-grayish-blue">
              Something went wrong
            </p>
          </main>
        )}
        {contacts.length > 1 && (
          <main className="grid w-full grid-cols-1 grid-rows-6 gap-6 sm:grid-cols-2  sm:grid-rows-3 desktop:grid-cols-3 desktop:grid-rows-2">
            {contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </main>
        )}
        <footer className="text-[10px]">
          Challenge by{" "}
          <a
            href="https://www.speedcast.com/"
            target="_blank"
            className="text-cyan-400 underline"
          >
            Speedcast.
          </a>
        </footer>
      </div>
    </div>
  );
}
