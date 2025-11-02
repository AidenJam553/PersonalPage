<template>
  <section id="education" class="section education-section">
    <div class="container">
      <h2 class="section-title">{{ t.education.title }}</h2>
      <div class="education-timeline">
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <h3 class="school-name">{{ t.education.masters.school }}</h3>
              <span class="timeline-date">{{ t.education.masters.period }}</span>
            </div>
            <p class="major">{{ t.education.masters.major }}</p>
            <div class="education-details">
              <div class="detail-item">
                <span class="detail-label">{{ t.education.ranking }}:</span>
                <span class="detail-value">{{ t.education.masters.ranking }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">{{ t.education.gpa }}:</span>
                <span class="detail-value">3.5</span>
              </div>
            </div>
            <div class="courses">
              <h4 class="courses-title">{{ t.education.courses }}:</h4>
              <div class="course-tags">
                <span 
                  v-for="(course, index) in (mastersCourses || [])" 
                  :key="index" 
                  class="course-tag"
                >
                  {{ course }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <h3 class="school-name">{{ t.education.bachelors.school }}</h3>
              <span class="timeline-date">{{ t.education.bachelors.period }}</span>
            </div>
            <p class="major">{{ t.education.bachelors.major }}</p>
            <div class="education-details">
              <div class="detail-item">
                <span class="detail-label">{{ t.education.ranking }}:</span>
                <span class="detail-value">{{ t.education.bachelors.ranking }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">{{ t.education.gpa }}:</span>
                <span class="detail-value">3.0</span>
              </div>
            </div>
            <div class="courses">
              <h4 class="courses-title">{{ t.education.courses }}:</h4>
              <div class="course-tags">
                <span 
                  v-for="(course, index) in (bachelorsCourses || [])" 
                  :key="index" 
                  class="course-tag"
                >
                  {{ course }}
                </span>
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
import { courseTranslations } from '../utils/courseTranslations'

const { currentLanguage } = useLanguage()
const t = computed(() => translations[currentLanguage.value])
const mastersCourses = computed(() => courseTranslations.masters[currentLanguage.value])
const bachelorsCourses = computed(() => courseTranslations.bachelors[currentLanguage.value])
</script>

<style scoped>
.education-section {
  background: var(--bg-primary);
}

.education-timeline {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  padding-left: 2rem;
}

.education-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--primary-color);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-marker {
  position: absolute;
  left: -2.5rem;
  top: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--primary-color);
  border: 3px solid white;
  box-shadow: 0 0 0 3px var(--primary-color);
}

.timeline-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.timeline-content:hover {
  transform: translateX(10px);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.school-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.timeline-date {
  font-size: 0.875rem;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
}

.major {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.education-details {
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.detail-item {
  display: flex;
  gap: 0.5rem;
}

.detail-label {
  color: var(--text-secondary);
}

.detail-value {
  font-weight: 600;
  color: var(--primary-color);
}

.courses {
  margin-top: 1.5rem;
}

.courses-title {
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.course-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.course-tag {
  padding: 0.5rem 1rem;
  background: var(--bg-secondary);
  color: var(--text-primary);
  border-radius: 20px;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.course-tag:hover {
  background: var(--primary-color);
  color: white;
}

@media (max-width: 768px) {
  .education-timeline {
    padding-left: 1.5rem;
  }
  
  .timeline-marker {
    left: -1.75rem;
  }
}
</style>

