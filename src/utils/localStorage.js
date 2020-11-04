const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const readContactsFromLocalStorage = () => {
    const contactsString = localStorage.getItem("contacts");
    const contactsArr = JSON.parse(contactsString);
    return contactsArr.length > 0 ? contactsArr : initialContacts;
};
const setContactsToLocalStorage = (contacts) => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
};

export { readContactsFromLocalStorage, setContactsToLocalStorage };
