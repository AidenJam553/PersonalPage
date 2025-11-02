<template>
  <section id="projects" class="section projects-section">
    <div class="container">
      <h2 class="section-title">{{ t.projects.title }}</h2>
      <div class="projects-grid">
        <div class="project-card">
          <div class="project-header">
            <h3 class="project-title">{{ t.projects.youthHub.title }}</h3>
            <span class="project-period">{{ t.projects.youthHub.period }}</span>
          </div>
          <p class="project-role">{{ t.projects.fullStack }}</p>
          <p class="project-description">
            {{ t.projects.youthHub.description }}
          </p>
          <div class="project-tech">
            <h4 class="tech-title">{{ t.projects.techStack }}</h4>
            <ul class="tech-list">
              <li v-for="(item, index) in (t.projects.youthHub.tech || [])" :key="index">{{ item }}</li>
            </ul>
          </div>
          <div class="project-features">
            <h4 class="features-title">{{ t.projects.coreFeatures }}</h4>
            <ul class="features-list">
              <li v-for="(item, index) in (t.projects.youthHub.features || [])" :key="index">{{ item }}</li>
            </ul>
          </div>
          <div class="project-highlights">
            <h4 class="highlights-title">{{ t.projects.highlights }}</h4>
            <div class="highlight-tags">
              <span v-for="(tag, index) in (t.projects.youthHub.highlightTags || [])" :key="index" class="highlight-tag">{{ tag }}</span>
            </div>
          </div>
          <a href="https://youthtrusthub.app/" target="_blank" class="project-link">
            {{ t.projects.viewProject }}
          </a>
        </div>

        <div class="project-card">
          <div class="project-header">
            <h3 class="project-title">{{ t.projects.fitness.title }}</h3>
            <span class="project-period">{{ t.projects.fitness.period }}</span>
          </div>
          <p class="project-role">{{ t.projects.fullStack }}</p>
          <p class="project-description">
            {{ t.projects.fitness.description }}
          </p>
          <div class="project-tech">
            <h4 class="tech-title">{{ t.projects.techStack }}</h4>
            <ul class="tech-list">
              <li v-for="(item, index) in (t.projects.fitness.tech || [])" :key="index">{{ item }}</li>
            </ul>
          </div>
          <div class="project-features">
            <h4 class="features-title">{{ t.projects.coreFeatures }}</h4>
            <ul class="features-list">
              <li v-for="(item, index) in (t.projects.fitness.features || [])" :key="index">{{ item }}</li>
            </ul>
          </div>
          <div class="project-highlights">
            <h4 class="highlights-title">{{ t.projects.highlights }}</h4>
            <div class="highlight-tags">
              <span v-for="(tag, index) in (t.projects.fitness.highlightTags || [])" :key="index" class="highlight-tag">{{ tag }}</span>
            </div>
          </div>
          <a href="https://fit5032-assignment-healthyandfitnesswebsite.pages.dev/" target="_blank" class="project-link">
            {{ t.projects.viewProject }}
          </a>
        </div>

        <div class="project-card">
          <div class="project-header">
            <h3 class="project-title">{{ t.projects.android.title }}</h3>
            <span class="project-period">{{ t.projects.android.period }}</span>
          </div>
          <p class="project-role">{{ t.projects.fullStack }}</p>
          <p class="project-description">
            {{ t.projects.android.description }}
          </p>
          <div class="project-tech">
            <h4 class="tech-title">{{ t.projects.techStack }}</h4>
            <ul class="tech-list">
              <li v-for="(item, index) in (t.projects.android.tech || [])" :key="index">{{ item }}</li>
            </ul>
          </div>
          <div class="project-features">
            <h4 class="features-title">{{ t.projects.coreFeatures }}</h4>
            <ul class="features-list">
              <li v-for="(item, index) in (t.projects.android.features || [])" :key="index">{{ item }}</li>
            </ul>
          </div>
          <div class="project-highlights">
            <h4 class="highlights-title">{{ t.projects.highlights }}</h4>
            <div class="highlight-tags">
              <span v-for="(tag, index) in (t.projects.android.highlightTags || [])" :key="index" class="highlight-tag">{{ tag }}</span>
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
.projects-section {
  background: var(--bg-primary);
}

.projects-grid {
  display: grid;
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  flex: 1;
}

.project-period {
  font-size: 0.875rem;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  white-space: nowrap;
}

.project-role {
  font-size: 1rem;
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 1rem;
}

.project-description {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.project-tech,
.project-features,
.project-highlights {
  margin-bottom: 1.5rem;
}

.tech-title,
.features-title,
.highlights-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.tech-list,
.features-list {
  list-style: none;
  padding-left: 0;
}

.tech-list li,
.features-list li {
  padding: 0.5rem 0;
  color: var(--text-secondary);
  line-height: 1.6;
  position: relative;
  padding-left: 1.5rem;
}

.tech-list li::before,
.features-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

.highlight-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.highlight-tag {
  padding: 0.5rem 1rem;
  background: var(--bg-secondary);
  color: var(--text-primary);
  border-radius: 20px;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.highlight-tag:hover {
  background: var(--primary-color);
  color: white;
}

.project-link {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(37, 99, 235, 0.3);
}

@media (max-width: 768px) {
  .project-card {
    padding: 1.5rem;
  }
  
  .project-header {
    flex-direction: column;
  }
}
</style>

