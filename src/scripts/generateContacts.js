import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();

  const createdСontacts = faker.helpers.multiple(createFakeContact, {
    count: number,
  });

  contacts.push(...createdСontacts);
  await writeContacts(contacts);

  console.log(`Number of contacts created: ${number}
Total number of contacts: ${contacts.length}`);
};

generateContacts(5);
