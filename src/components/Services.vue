<template>
  <section id="services" class="section">
    <div class="container">
      <h2 class="section-title">Наши услуги</h2>
      <div class="services-grid">
        <div class="service-card" v-for="(service, index) in services" :key="index">
          <div class="service-icon">
            <i :class="service.icon"></i>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services-site',
  data() {
    return {
      services: [
        {
          title: 'Автоматизированное тестирование',
          description: 'Разработка и поддержка автотестов для UI и API'
        },
        {
          title: 'Мобильное тестирование',
          description: 'Тестирование мобильных приложений на iOS и Android'
        },
        {
          title: 'Тестирование веб-приложений',
          description: 'Комплексное тестирование веб-приложений'
        },
        {
          title: 'Нагрузочное тестирование',
          description: 'Проверка производительности под нагрузкой'
        },
        {
          title: 'Тестирование безопасности',
          description: 'Выявление уязвимостей в вашем приложении'
        },
        {
          title: 'Ручное тестирование',
          description: 'Детальная проверка функционала тестировщиками'
        }
      ]
    }
  }
}
</script>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.service-card {
  cursor:default;
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.service-icon {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
}

.service-card h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--dark);
}

.service-card p {
  color: var(--gray);
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>