<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="nav-content">
        <div class="logo">{{ (t.common && t.common.name) || (currentLanguage === 'zh' ? '张博涵' : 'Bohan Zhang') }}</div>
        <ul class="nav-links">
          <li><a href="#home" @click="scrollTo('home')">{{ t.nav.home }}</a></li>
          <li><a href="#about" @click="scrollTo('about')">{{ t.nav.about }}</a></li>
          <li><a href="#education" @click="scrollTo('education')">{{ t.nav.education }}</a></li>
          <li><a href="#experience" @click="scrollTo('experience')">{{ t.nav.experience }}</a></li>
          <li><a href="#projects" @click="scrollTo('projects')">{{ t.nav.projects }}</a></li>
          <li><a href="#skills" @click="scrollTo('skills')">{{ t.nav.skills }}</a></li>
          <li><a href="#contact" @click="scrollTo('contact')">{{ t.nav.contact }}</a></li>
        </ul>
        <div class="nav-actions">
          <div class="language-switch" @click="toggleLanguage">
            <span class="switch-label" :class="{ active: currentLanguage === 'zh' }">中文</span>
            <div class="switch-slider" :class="{ 'switch-active': currentLanguage === 'en' }">
              <span class="switch-button"></span>
            </div>
            <span class="switch-label" :class="{ active: currentLanguage === 'en' }">EN</span>
          </div>
          <button class="mobile-menu-btn" @click="toggleMobileMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <ul class="mobile-nav-links" :class="{ 'active': mobileMenuOpen }">
        <li><a href="#home" @click="scrollTo('home')">{{ t.nav.home }}</a></li>
        <li><a href="#about" @click="scrollTo('about')">{{ t.nav.about }}</a></li>
        <li><a href="#education" @click="scrollTo('education')">{{ t.nav.education }}</a></li>
        <li><a href="#experience" @click="scrollTo('experience')">{{ t.nav.experience }}</a></li>
        <li><a href="#projects" @click="scrollTo('projects')">{{ t.nav.projects }}</a></li>
        <li><a href="#skills" @click="scrollTo('skills')">{{ t.nav.skills }}</a></li>
        <li><a href="#contact" @click="scrollTo('contact')">{{ t.nav.contact }}</a></li>
        <li>
          <div class="language-switch mobile" @click="toggleLanguage">
            <span class="switch-label" :class="{ active: currentLanguage === 'zh' }">中文</span>
            <div class="switch-slider" :class="{ 'switch-active': currentLanguage === 'en' }">
              <span class="switch-button"></span>
            </div>
            <span class="switch-label" :class="{ active: currentLanguage === 'en' }">EN</span>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import { translations } from '../utils/i18n'

const { currentLanguage, setLanguage } = useLanguage()
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const t = computed(() => translations[currentLanguage.value])

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

const toggleLanguage = () => {
  setLanguage(currentLanguage.value === 'zh' ? 'en' : 'zh')
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
  color: var(--primary-color);
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

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.language-switch {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
}

.switch-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  min-width: 30px;
  text-align: center;
}

.switch-label.active {
  color: var(--primary-color);
}

.switch-slider {
  position: relative;
  width: 50px;
  height: 26px;
  background: #e2e8f0;
  border-radius: 13px;
  transition: background 0.3s ease;
  padding: 2px;
}

.switch-slider.switch-active {
  background: var(--primary-color);
}

.switch-button {
  position: absolute;
  width: 22px;
  height: 22px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  left: 2px;
  top: 2px;
}

.switch-slider.switch-active .switch-button {
  transform: translateX(24px);
}

.language-switch.mobile {
  width: 100%;
  justify-content: center;
  margin-top: 0.5rem;
  padding: 0.5rem 0;
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

