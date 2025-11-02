<template>
  <section id="skills" class="section skills-section">
    <div class="container">
      <h2 class="section-title">{{ t.skills.title }}</h2>
      <div class="skills-content">
        <div class="skills-grid">
          <div class="skill-category">
            <h3 class="category-title">{{ t.skills.programming }}</h3>
            <div class="skill-items">
              <div class="skill-item">
                <span class="skill-name">Python</span>
                <span class="skill-level">{{ t.skills.level }}</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">JavaScript</span>
                <span class="skill-level">{{ t.skills.level }}</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">SQL</span>
                <span class="skill-level">{{ t.skills.level }}</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Kotlin</span>
                <span class="skill-level">{{ t.skills.level }}</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Swift</span>
                <span class="skill-level">{{ t.skills.level }}</span>
              </div>
            </div>
          </div>
          
          <div class="skill-category">
            <h3 class="category-title">{{ t.skills.frontend }}</h3>
            <div class="skill-items">
              <div class="skill-item">
                <span class="skill-name">React</span>
                <span class="skill-level">{{ t.skills.level }}</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Vue 3</span>
                <span class="skill-level">{{ t.skills.level }}</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Next.js</span>
                <span class="skill-level">{{ t.skills.level }}</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">TypeScript</span>
                <span class="skill-level">{{ t.skills.level }}</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">HTML/CSS</span>
                <span class="skill-level">{{ t.skills.level }}</span>
              </div>
            </div>
          </div>
          
          <div class="skill-category">
            <h3 class="category-title">{{ t.skills.backend }}</h3>
            <div class="skill-items">
              <div class="skill-item">
                <span class="skill-name">Node.js</span>
                <span class="skill-level">{{ t.skills.level }}</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">FastAPI</span>
                <span class="skill-level">{{ t.skills.level }}</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Flask</span>
                <span class="skill-level">{{ t.skills.level }}</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">PostgreSQL</span>
                <span class="skill-level">{{ t.skills.level }}</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">MySQL</span>
                <span class="skill-level">{{ t.skills.level }}</span>
              </div>
            </div>
          </div>
          
          <div class="skill-category">
            <h3 class="category-title">{{ t.skills.other }}</h3>
            <div class="skill-items">
              <div class="skill-item">
                <span class="skill-name">UI/UX设计</span>
                <span class="skill-level">{{ t.skills.level }}</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Docker</span>
                <span class="skill-level">{{ t.skills.level }}</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Git</span>
                <span class="skill-level">{{ t.skills.level }}</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Firebase</span>
                <span class="skill-level">{{ t.skills.level }}</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">IELTS</span>
                <span class="skill-level">6.5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import { translations } from '../utils/i18n'

const { currentLanguage } = useLanguage()
const t = computed(() => translations[currentLanguage.value])
</script>

<style scoped>
.skills-section {
  background: var(--bg-secondary);
}

.skills-content {
  max-width: 1200px;
  margin: 0 auto;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
}

.category-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--bg-secondary);
}

.skill-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
}

.skill-name {
  font-size: 1rem;
  color: var(--text-primary);
  font-weight: 500;
}

.skill-level {
  font-size: 0.875rem;
  color: var(--primary-color);
  background: var(--bg-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>

