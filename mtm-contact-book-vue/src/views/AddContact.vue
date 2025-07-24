<template>
    <form @submit.prevent="addContactAndRedirect" class="contact-form">
      <h2>Add new Contact</h2>
      <input v-model="newContact.firstName" placeholder="First Name (required)" required />
      <input v-model="newContact.lastName" placeholder="Last Name (required)" required />
      <input v-model="newContact.email" type="email" placeholder="Email" />
      <input v-model="newContact.phone" placeholder="phone" />
      <input v-model="newContact.address" placeholder="ADdress" />
      <button type="submit">Add contact</button>
    </form>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import { addContact } from '../services/contactService';
  
  const router = useRouter();
  const newContact = reactive({ firstName: '', lastName: '', email: '' });
  
  function addContactAndRedirect() {
    const addedContact = addContact(newContact);
    // Redirect new contact's detail page.
    router.push({ name: 'ContactDetail', params: { id: addedContact.id } });
  }
  </script>