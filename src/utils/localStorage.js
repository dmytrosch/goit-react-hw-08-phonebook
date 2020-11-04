const readContactsFromLocalStorage = () => {
    const contactsString = localStorage.getItem("contacts");
    const contactsObj = JSON.parse(contactsString);
    return contactsObj ? contactsObj : [];
};
const setContactsToLocalStorage = (contacts) => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
};

export { readContactsFromLocalStorage, setContactsToLocalStorage };
