// src/services/contactService.js

// A unique key to store our contacts in local storage.
const STORAGE_KEY = 'vue-contact-book';

// Some sample data to pre-populate the app if local storage is empty.
const seedData = [
  { id: '1', firstName: 'Chuhong', lastName: 'Feng', email: 'feng0088@algonquinlive.com', phone: '041135211' },
  { id: '2', firstName: 'Joe', lastName: 'Biden', email: 'Joeker@WhiteHouse.com', address: '132123132123132' },
  { id: '3', firstName: 'Trump', lastName: 'Musk', email: 'Trump@SpaceX.gov' },
];

// Gets all contacts from local storage.
export function getContacts() {
  const contacts = localStorage.getItem(STORAGE_KEY);
  if (!contacts) {
    // If no data exists, use the seed data and save it.
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData));
    return seedData;
  }
  return JSON.parse(contacts);
}

// Gets a single contact by their ID.
export function getContactById(id) {
  const contacts = getContacts();
  return contacts.find(contact => contact.id === id);
}

// Adds a new contact.
export function addContact(contact) {
  const contacts = getContacts();
  // Create a new contact object with a unique ID (using the current timestamp).
  const newContact = { ...contact, id: Date.now().toString() };
  contacts.push(newContact);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  return newContact; // Return the new contact so we know its ID.
}

// Updates an existing contact.
export function updateContact(updatedContact) {
  let contacts = getContacts();
  // Find the contact with the matching ID and replace it.
  contacts = contacts.map(contact =>
    contact.id === updatedContact.id ? updatedContact : contact
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
}

// Deletes a contact by their ID.
export function deleteContact(id) {
  let contacts = getContacts();
  // Filter out the contact with the matching ID.
  contacts = contacts.filter(contact => contact.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
}