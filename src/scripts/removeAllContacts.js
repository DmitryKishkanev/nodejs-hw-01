import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const contacts = await readContacts();
  const deletedCount = contacts.length;

  await writeContacts([]);

  console.log(`Removed ${deletedCount} contacts
Contact list is empty`);
};

removeAllContacts();
