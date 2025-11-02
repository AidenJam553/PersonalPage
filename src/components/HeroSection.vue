<template>
  <section id="home" class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-image-wrapper">
          <img src="/Photo.jpg" alt="Bohan Zhang" class="hero-image" />
        </div>
        <div class="hero-text">
          <h1 class="hero-title">
            {{ t.hero.greeting }} <span class="highlight">{{ (t.common && t.common.name) || (currentLanguage === 'zh' ? '张博涵' : 'Bohan Zhang') }}</span>
          </h1>
          <p class="hero-subtitle">{{ t.hero.subtitle }}</p>
          <p class="hero-description">
            {{ t.hero.description }}
          </p>
          <div class="hero-buttons">
            <a href="#contact" class="btn btn-primary" @click="scrollTo('contact')">
              {{ t.hero.contactMe }}
            </a>
            <a href="#projects" class="btn btn-secondary" @click="scrollTo('projects')">
              {{ t.hero.viewProjects }}
            </a>
          </div>
          <div class="hero-info">
            <div class="info-item">
              <span class="info-label">{{ t.hero.age }}</span>
              <span class="info-value">25{{ currentLanguage === 'zh' ? '岁' : ' years old' }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">{{ t.hero.location }}</span>
              <span class="info-value">{{ currentLanguage === 'zh' ? '内蒙古呼和浩特' : 'Hohhot, Inner Mongolia' }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">{{ t.hero.phone }}</span>
              <span class="info-value">+86 13804740529</span>
            </div>
            <div class="info-item">
              <span class="info-label">{{ t.hero.email }}</span>
              <span class="info-value">aidenjam533@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-background">
      <div class="gradient-circle"></div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import { translations } from '../utils/i18n'

const { currentLanguage } = useLanguage()
const t = computed(() => translations[currentLanguage.value])

const scrollTo = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 80px;
  overflow: hidden;
  background: #f5f7fa;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.hero-image-wrapper {
  position: relative;
  margin-bottom: 1rem;
}

.hero-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.hero-image:hover {
  transform: scale(1.05);
}

.hero-text {
  text-align: center;
  width: 100%;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
  line-height: 1.2;
}

.highlight {
  color: var(--primary-color);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.875rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;
  border: 2px solid transparent;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
}

.btn-secondary {
  background: white;
  color: var(--primary-color);
  border-color: var(--primary-color);
}

.btn-secondary:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

.hero-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.info-item {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.info-item:hover {
  transform: translateY(-5px);
}

.info-label {
  display: block;
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  text-align: center;
  width: 100%;
}

.info-value {
  display: block;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  word-break: break-word;
  width: 100%;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
}

.gradient-circle {
  position: absolute;
  width: 500px;
  height: 500px;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 50%;
  top: -250px;
  right: -250px;
  animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(-50px, -50px) rotate(180deg);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-info {
    grid-template-columns: 1fr;
  }
  
  .hero-image {
    width: 150px;
    height: 150px;
  }
  
  .hero-content {
    gap: 1.5rem;
  }
}
</style>

