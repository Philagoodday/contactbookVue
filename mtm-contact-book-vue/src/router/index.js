// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ContactList from '../views/ContactList.vue';
import ContactDetail from '../views/ContactDetail.vue';
import AddContact from '../views/AddContact.vue';
import EditContact from '../views/EditContact.vue';

const routes = [
  // Route for the main contact list view
  { path: '/', name: 'ContactList', component: ContactList },
  // Route for a single contact's details view
  { path: '/contact/:id', name: 'ContactDetail', component: ContactDetail, props: true },
  // Route for the "add new contact" form
  { path: '/add', name: 'AddContact', component: AddContact },
  // Route for the "edit contact" form
  { path: '/edit/:id', name: 'EditContact', component: EditContact, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;