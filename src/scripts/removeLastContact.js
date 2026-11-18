import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();

  if (contacts.length === 0) {
    console.log('Contact list is already empty.');
    return;
  }

  contacts.pop();
  await writeContacts(contacts);

  console.log(`Number of deleted contacts: 1
Total number of contacts: ${contacts.length}`);
};

removeLastContact();
