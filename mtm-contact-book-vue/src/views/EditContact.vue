<template>
    <form v-if="contact" @submit.prevent="updateContactAndRedirect" class="contact-form">
      <h2>Edit Contact</h2>
      <input v-model="contact.firstName" placeholder="First Name (required)" required />
      <input v-model="contact.lastName" placeholder="Last Name (required)" required />
      <input v-model="contact.email" type="email" placeholder="Email (required)" required />
      <input v-model="contact.phone" placeholder="Phone" />
      <input v-model="contact.address" placeholder="Address" />
      <button type="submit">Updatecontact</button>
    </form>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { getContactById, updateContact } from '../services/contactService';
  
  const props = defineProps({ id: String });
  const router = useRouter();
  const contact = ref(null);
  
  onMounted(() => {
    // Create a copy of the contact's data.
    contact.value = { ...getContactById(props.id) };
  });
  
  function updateContactAndRedirect() {
    updateContact(contact.value);
    // Redirect back to the contact's detail page.
    router.push({ name: 'ContactDetail', params: { id: props.id } });
  }
  </script>