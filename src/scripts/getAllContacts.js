import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const contacts = await readContacts();

  if (contacts.length === 0) {
    return 'Contact list is empty.';
  }

  return contacts;
};

console.log(await getAllContacts());
