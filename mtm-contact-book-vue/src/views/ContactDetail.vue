<template>
    <div v-if="contact" class="contact-details">
      <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
      <p><strong>Email:</strong> {{ contact.email }}</p>
      <p v-if="contact.phone"><strong>Phone:</strong> {{ contact.phone }}</p>
      <p v-if="contact.address"><strong>Adddress:</strong> {{ contact.address }}</p>
  
      <div class="actions">
        <router-link :to="{ name: 'EditContact', params: { id: contact.id } }" class="button-like">Edit</router-link>
        <button @click="deleteContactAndRedirect" class="button-like danger">Delete</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { getContactById, deleteContact } from '../services/contactService';
  
  const props = defineProps({ id: String });
  const router = useRouter();
  const contact = ref(null);
  
  onMounted(() => {
    contact.value = getContactById(props.id);
  });
  
  function deleteContactAndRedirect() {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      deleteContact(props.id);
      router.push('/'); // Redirect home page after deletion.
    }
  }
  </script>