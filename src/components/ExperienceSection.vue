<template>
  <section id="experience" class="section experience-section">
    <div class="container">
      <h2 class="section-title">{{ t.experience.title }}</h2>
      <div class="experience-list">
        <div class="experience-card">
          <div class="experience-header">
            <div class="experience-title-group">
              <h3 class="experience-title">{{ t.experience.intern.title }}</h3>
              <p class="company-name">{{ t.experience.intern.company }}</p>
            </div>
            <span class="experience-date">{{ t.experience.intern.period }}</span>
          </div>
          <p class="company-industry">{{ t.experience.industry }}: {{ currentLanguage === 'zh' ? '互联网/游戏/软件' : 'Internet/Gaming/Software' }}</p>
          <div class="experience-description">
            <p v-for="(desc, index) in (t.experience.intern.description || [])" :key="index">{{ desc }}</p>
          </div>
        </div>
        
        <div class="experience-card">
          <div class="experience-header">
            <div class="experience-title-group">
              <h3 class="experience-title">{{ t.experience.leader.title }}</h3>
              <p class="company-name">{{ t.experience.leader.company }}</p>
            </div>
            <span class="experience-date">{{ t.experience.leader.period }}</span>
          </div>
          <div class="experience-description">
            <p v-for="(desc, index) in (t.experience.leader.description || [])" :key="index">{{ desc }}</p>
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
.experience-section {
  background: var(--bg-secondary);
}

.experience-list {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.experience-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.experience-title-group {
  flex: 1;
}

.experience-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.company-name {
  font-size: 1.125rem;
  color: var(--primary-color);
  font-weight: 600;
}

.experience-date {
  font-size: 0.875rem;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  white-space: nowrap;
}

.company-industry {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-style: italic;
}

.experience-description {
  line-height: 1.8;
}

.experience-description p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.experience-description p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .experience-card {
    padding: 1.5rem;
  }
  
  .experience-header {
    flex-direction: column;
  }
}
</style>

