<template>
  <div id="app-container">
    <header>
      <h1>
        <router-link to="/">Vue Contact Book</router-link>
      </h1>
      <nav>
        <router-link to="/add" class="button-like">Add New Contact</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
#app-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #333;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

header h1 a {
  color: #42b983; /* Vue green */
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
}
</style>