<template>
  <div id="grid-container">
    <!-- Header Section -->
    <header>
      <h1> Matias Robles Huber </h1>
      <nav>
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#career">Career</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <!-- Main Content Section -->
    <main>
      <!-- Projects Section -->
      <section id="projects">
        <h2>Projects</h2>
        <div class="projects">
          <div v-for="project in projects" :key="project.id" class="project-card">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <a :href="project.link" target="_blank">View Project</a>
          </div>
        </div>
      </section>

      <!-- Career Events Section -->
      <section id="career">
        <h2>Recent Career Events</h2>
        <ul>
          <li v-for="event in careerEvents" :key="event.id">
            {{ event.date }} - {{ event.description }}
          </li>
        </ul>
      </section>
    </main>

    <!-- Footer Section -->
    <footer>
      <p>&copy; 2024 {{ name }}. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>

</script>

<style scoped>
/* Global Styles */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  color: #333;
}
</style>
