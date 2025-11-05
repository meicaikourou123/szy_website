<template>
  <nav class="navbar">
    <a href="/" class="navbar-logo">Bensun</a>
    <ul class="navbar-menu">
      <li><a href="/projects" class="navbar-link">Selected Work</a></li>
      <li><a href="/about" class="navbar-link">Resume</a></li>
      <li><a href="/contact" class="navbar-button">Get In Touch</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 60px;        /* horizontal padding only */
  background-color: #b3d6e0;
  font-style: italic;
  color: #1f2937;
  flex-wrap: nowrap;
  overflow-x: auto;
  column-gap: 10px;
}

.navbar-logo {
  font-size: 28px;
  font-weight: 800;
  font-family: 'Georgia', serif;
  text-decoration: none;
  color: #1f2937;
  white-space: nowrap;
  margin-right: 30px;
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: nowrap;
  list-style: none;
  font-family: sans-serif;
  padding: 0;
  margin: 0;
}

.navbar-link {
  text-decoration: none;
  color: #000;
  font-weight: 600;
  font-size: 16px;
  transition: color 0.3s;
  white-space: nowrap;
}

.navbar-button {
  text-decoration: none;
  color: #fff;
  background-color: #1f2937;
  border: 2px solid #1f2937;
  padding: 8px 16px;
  font-weight: 700;

  transition: background-color 0.3s, color 0.3s;
  white-space: nowrap;
}

/* For smaller screens: keep layout horizontal with scroll if needed */
@media (max-width: 768px) {
  .navbar {
    justify-content: flex-start;
    padding: 12px 20px;
    overflow-x: auto;
  }

  .navbar-menu {
    gap: 16px;
  }

  .navbar-link, .navbar-button, .navbar-logo {
    font-size: 14px;
  }
}
</style>