<template>
  <section id="tech" class="section">
    <div class="container">
      <h2 class="section-title">Технологии которые мы используем</h2>
      <div class="tech-grid">
        <div class="tech-card" v-for="(tech, index) in technologies" :key="index">
          <div class="tech-logo">
          </div>
          <h3>{{ tech.name }}</h3>
          <p>{{ tech.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Technologies-site',
  data() {
    return {
      technologies: [
        {
          name: 'Selenium',
          description: 'Автоматизация тестирования веб-приложений'
        },
        {
          name: 'JMeter',
          description: 'Нагрузочное тестирование'
        },
        {
          name: 'Postman',
          description: 'Тестирование API'
        },
        {
          name: 'Cypress',
          description: 'Современный фреймворк для e2e тестирования'
        },
        {
          name: 'Jenkins',
          description: 'Непрерывная интеграция и доставка'
        }
      ]
    }
  }
}
</script>

<style scoped>
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.tech-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.tech-card:hover {
  transform: translateY(-5px);
}

.tech-logo {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.tech-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--dark);
}

.tech-card p {
  font-size: 0.875rem;
  color: var(--gray);
}

@media (max-width: 768px) {
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>