<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="logo">
          <span>ProTest</span>Laver
        </div>
        <ul class="nav-list">
          <li><a href="#services">Услуги</a></li>
          <li><a href="#cases">Кейсы</a></li>
          <li><a href="#tech">Технологии</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
        <button class="mobile-menu-btn" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header-site',
  methods: {
    toggleMenu() {
      const navList = document.querySelector('.nav-list');
      navList.classList.toggle('active');
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 20px 0;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  cursor: default;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dark);
}

.logo span {
  color: var(--primary);
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-list a {
  color: var(--dark);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  position: relative;
}

.nav-list a:hover {
  color: var(--primary);
}

.nav-list a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s;
}

.nav-list a:hover::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
}

.mobile-menu-btn span {
  display: block;
  width: 100%;
  height: 3px;
  background: var(--dark);
  transition: all 0.3s;
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: flex;
  }
  
  .nav-list {
    position: fixed;
    top: 80px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 80px);
    background: white;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    transition: left 0.3s;
  }
  
  .nav-list.active {
    left: 0;
  }
}
</style>