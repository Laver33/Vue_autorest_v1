<template>
  <section id="contact" class="section bg-light">
    <div class="container">
      <h2 class="section-title">Свяжитесь с нами</h2>
      <div class="contact-wrapper">
        <div class="contact-info">
          <h3>Готовы обсудить ваш проект?</h3>
          <p>Заполните форму или свяжитесь с нами напрямую</p>
          <div class="contact-details">
            <div class="detail-item">
              <i class="fas fa-envelope"></i>
              <span>(почта)</span>
            </div>
            <div class="detail-item">
              <i class="fas fa-phone"></i>
              <span>(номер)</span>
            </div>
            <div class="detail-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>(адрес)</span>
            </div>
          </div>
        </div>
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Имя</label>
            <input type="text" id="name" v-model="form.name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" required>
          </div>
          <div class="form-group">
            <label for="phone">Телефон</label>
            <input type="tel" id="phone" v-model="form.phone">
          </div>
          <div class="form-group">
            <label for="message">Сообщение</label>
            <textarea id="message" v-model="form.message" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn">Отправить</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactForm-site',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Здесь должна быть логика отправки формы
      console.log('Форма отправлена:', this.form);
      alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
      this.resetForm();
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.contact-wrapper {
  display: flex;
  gap: 3rem;
  margin-top: 3rem;
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.contact-info {
  flex: 1;
}

.contact-info h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--dark);
}

.contact-info p {
  color: var(--gray);
  margin-bottom: 2rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.detail-item i {
  font-size: 1.2rem;
  color: var(--primary);
  width: 30px;
  text-align: center;
}

.detail-item span {
  color: var(--dark);
}

.contact-form {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
  color: var(--dark);
}

.form-group input,
.form-group textarea {
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-family: inherit;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
}

@media (max-width: 1024px) {
  .contact-wrapper {
    flex-direction: column;
  }
}
</style>