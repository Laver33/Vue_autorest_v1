<template>
  <section id="cases" class="section bg-light">
    <div class="container">
      <h2 class="section-title">Наши кейсы</h2>
      <div class="cases-container">
        <div class="case-card" v-for="(caseItem, index) in cases" :key="index">
          <div class="case-image">
            <!-- <img :src="caseItem.image" :alt="caseItem.title"> для добавления фото -->
          </div>
          <div class="case-content">
            <h3>{{ caseItem.title }}</h3>
            <p>{{ caseItem.description }}</p>
            <div class="case-stats">
              <div class="stat">
                <span class="stat-value">{{ caseItem.tests }}</span>
                <span class="stat-label">тестов</span>
              </div>
              <div class="stat">
                <span class="stat-value">{{ caseItem.coverage }}</span>
                <span class="stat-label">покрытие</span>
              </div>
              <div class="stat">
                <span class="stat-value">{{ caseItem.bugs }}</span>
                <span class="stat-label">багов найдено</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Cases-site',
  data() {
    return {
      cases: [
        {
          title: 'Финтех приложение (пример)',
          description: 'Комплексное тестирование мобильного банкинга для крупного финансового учреждения',
          tests: '1200+',
          coverage: '95%',
          bugs: '87'
        },
        {
          title: 'Маркетплейс (пример)',
          description: 'Автоматизация тестирования e-commerce платформы с 5000+ товаров',
          tests: '2500+',
          coverage: '92%',
          bugs: '124'
        },
        {
          title: 'Медицинский портал (пример)',
          description: 'Тестирование безопасности и нагрузки системы электронных медицинских карт',
          tests: '1800+',
          coverage: '98%',
          bugs: '42'
        }
      ]
    }
  }
}
</script>

<style scoped>
.bg-light {
  background: #f8fafc;
}

.cases-container {
  margin-top: 3rem;
}

.case-card {
  display: flex;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

.case-image {
  flex: 1;
}

.case-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.case-content {
  flex: 1;
  padding: 2rem;
}

.case-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--dark);
}

.case-content p {
  color: var(--gray);
  margin-bottom: 2rem;
}

.case-stats {
  display: flex;
  gap: 2rem;
}

.stat {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--gray);
}

@media (max-width: 1024px) {
  .case-card {
    flex-direction: column;
  }
  
  .case-image {
    height: 250px;
  }
}

@media (max-width: 768px) {
  .case-stats {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>