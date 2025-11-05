<script setup lang="ts">
// You can add reactive logic here later if needed
</script>

<template>
  <section class="contact-container">
    <p class="contact-description">
      I’d love to hear from you! Whether it’s a question, collaboration, or opportunity — feel free to reach out.
    </p>

    <div class="contact-info">
      <div class="contact-item">
        <a href="mailto:szy_ben@outlook.com" class="icon-button" aria-label="Email">
          <i class="fas fa-envelope"></i>
        </a>
        <span class="label">Email:</span>
        <a href="mailto:szy_ben@outlook.com" class="link">szy_ben@outlook.com</a>
      </div>

      <div class="contact-item">
        <a href="tel:+393444462310" class="icon-button" aria-label="Phone">
          <i class="fas fa-phone"></i>
        </a>
        <span class="label">Phone:</span>
        <a href="tel:+393444462310" class="link">+39 3444462310</a>
      </div>

      <div class="contact-item">
        <a href="https://www.linkedin.com/in/zhenyunsun" target="_blank" class="icon-button" aria-label="LinkedIn">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <span class="label">LinkedIn:</span>
        <a href="https://www.linkedin.com/in/zhenyunsun" target="_blank" class="link">
          linkedin.com/in/zhenyunsun
        </a>
      </div>

      <div class="contact-item">
        <a class="icon-button" aria-label="Location">
          <i class="fas fa-map-marker-alt"></i>
        </a>
        <span class="label">Current Location:</span>
        <span class="text">Milan, Italy</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-container {
  max-width: 800px;
  margin: 100px auto;
  padding: 40px 24px;
  background-color: #f8f9fb;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Circular clickable icons */
.icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #1f2937;
  color: white;
  font-size: 20px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.icon-button:hover {
  background-color: #b3d6e0;
  color: #1f2937;
  transform: scale(1.1);
}

/* Flex alignment for each contact item */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  font-size: 18px;
  color: #333;
}

.label {
  font-weight: 700;
}

.link {
  color: #1f2937;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s, color 0.3s;
}

.link:hover {
  border-color: #1f2937;
  color: #000;
}

/* Responsive for phone screen */
@media (max-width: 768px) {
  .contact-container {
    margin: 60px 16px;
    padding: 24px;
  }

  .contact-item {
    flex-direction: column;
    gap: 10px;
  }

  .icon-button {
    width: 50px;
    height: 50px;
    font-size: 22px;
  }
}
</style>