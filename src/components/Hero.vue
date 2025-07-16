<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>Профессиональное автотестирование для вашего ПО</h1>
        <p class="subtitle">Обеспечиваем качество и надежность вашего программного обеспечения с помощью современных методов тестирования</p>
        <a href="#contact" class="btn">Заказать тестирование</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero-site'
}
</script>

<style scoped>
.hero {
  padding: 160px 0 80px;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
}

.hero .container {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.hero-content {
  flex: 1;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-content .subtitle {
  font-size: 1.25rem;
  color: var(--gray);
  margin-bottom: 2rem;
  max-width: 600px;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

@media (max-width: 1024px) {
  .hero .container {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-content {
    margin-bottom: 3rem;
  }
  
  .hero-content .subtitle {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 120px 0 60px;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content .subtitle {
    font-size: 1.1rem;
  }
}
</style>