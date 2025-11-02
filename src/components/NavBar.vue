<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="nav-content">
        <div class="logo">张博涵</div>
        <ul class="nav-links">
          <li><a href="#home" @click="scrollTo('home')">首页</a></li>
          <li><a href="#about" @click="scrollTo('about')">关于</a></li>
          <li><a href="#education" @click="scrollTo('education')">教育</a></li>
          <li><a href="#experience" @click="scrollTo('experience')">经历</a></li>
          <li><a href="#projects" @click="scrollTo('projects')">项目</a></li>
          <li><a href="#skills" @click="scrollTo('skills')">技能</a></li>
          <li><a href="#contact" @click="scrollTo('contact')">联系</a></li>
        </ul>
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul class="mobile-nav-links" :class="{ 'active': mobileMenuOpen }">
        <li><a href="#home" @click="scrollTo('home')">首页</a></li>
        <li><a href="#about" @click="scrollTo('about')">关于</a></li>
        <li><a href="#education" @click="scrollTo('education')">教育</a></li>
        <li><a href="#experience" @click="scrollTo('experience')">经历</a></li>
        <li><a href="#projects" @click="scrollTo('projects')">项目</a></li>
        <li><a href="#skills" @click="scrollTo('skills')">技能</a></li>
        <li><a href="#contact" @click="scrollTo('contact')">联系</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollTo = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    mobileMenuOpen.value = false
  }
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: var(--primary-color);
}

.nav-links a:hover::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.mobile-nav-links {
  display: none;
  flex-direction: column;
  list-style: none;
  padding: 1rem 0;
  gap: 1rem;
}

.mobile-nav-links.active {
  display: flex;
}

.mobile-nav-links a {
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  padding: 0.5rem 0;
  display: block;
  transition: color 0.3s ease;
}

.mobile-nav-links a:hover {
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .mobile-nav-links {
    display: none;
  }
}
</style>

