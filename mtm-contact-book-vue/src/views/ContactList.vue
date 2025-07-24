<template>
    <div class="contact-list">
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Search by first or last name..."
        class="search-box"
      />
      <ul>
        <li v-for="contact in filteredAndSortedContacts" :key="contact.id">
          <router-link :to="{ name: 'ContactDetail', params: { id: contact.id } }">
            {{ contact.lastName }}, {{ contact.firstName }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { getContacts } from '../services/contactService';
  
  const contacts = ref([]);
  const searchTerm = ref('');
  
  onMounted(() => {
    contacts.value = getContacts();
  });
  
  const filteredAndSortedContacts = computed(() => {
    return contacts.value
      .filter(contact =>
        contact.firstName.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(searchTerm.value.toLowerCase())
      )
      .sort((a, b) => a.lastName.localeCompare(b.lastName)); // Sort by last name.
  });
  </script>