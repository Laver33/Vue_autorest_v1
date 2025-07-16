<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-about">
          <div class="logo">
            <span>ProTest</span>Laver
          </div>
          <p>Профессиональное автоматизированное тестирование программного обеспечения</p>
        </div>
        <div class="footer-links">
          <h3>Ссылки</h3>
          <ul>
            <li><a href="#services">Услуги</a></li>
            <li><a href="#cases">Кейсы</a></li>
            <li><a href="#tech">Технологии</a></li>
            <li><a href="#contact">Контакты</a></li>
          </ul>
        </div>
        <div class="footer-contact">
          <h3>Контакты</h3>
          <ul>
            <li><i class="fas fa-envelope"></i>(почта)</li>
            <li><i class="fas fa-phone"></i>(номер)</li>
            <li><i class="fas fa-map-marker-alt"></i>(адрес)</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer-site'
}
</script>

<style scoped>
.footer {
  background: var(--dark);
  color: white;
  padding: 60px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}

.logo span {
  color: var(--primary);
}

.footer-about p {
  color: #cbd5e1;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s;
}

.social-links a:hover {
  background: var(--primary);
  transform: translateY(-3px);
}

.footer-links h3,
.footer-contact h3 {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  position: relative;
}

.footer-links h3::after,
.footer-contact h3::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 40px;
  height: 3px;
  background: var(--primary);
}

.footer-links ul,
.footer-contact ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: #cbd5e1;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--primary);
}

.footer-contact li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: #cbd5e1;
}

.footer-contact i {
  color: var(--primary);
  width: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>

