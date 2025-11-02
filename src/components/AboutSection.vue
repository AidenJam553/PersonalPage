<template>
  <section id="about" class="section about-section">
    <div class="container">
      <h2 class="section-title">{{ t.about.title }}</h2>
      <div class="about-content">
        <div class="about-text">
          <p class="about-paragraph">
            {{ t.about.p1 }}
          </p>
          <p class="about-paragraph">
            {{ t.about.p2 }}
          </p>
          <p class="about-paragraph">
            {{ t.about.p3 }}
          </p>
          <p class="about-paragraph">
            {{ t.about.p4 }}
          </p>
        </div>
        <div class="interests">
          <h3 class="interests-title">{{ t.about.interests }}</h3>
          <div class="interest-tags">
            <span class="interest-tag">{{ currentLanguage === 'zh' ? '健身' : 'Fitness' }}</span>
            <span class="interest-tag">{{ currentLanguage === 'zh' ? '唱歌' : 'Singing' }}</span>
            <span class="interest-tag">{{ currentLanguage === 'zh' ? '钢琴' : 'Piano' }}</span>
            <span class="interest-tag">{{ currentLanguage === 'zh' ? '编曲' : 'Composing' }}</span>
            <span class="interest-tag">{{ currentLanguage === 'zh' ? '摄影' : 'Photography' }}</span>
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
.about-section {
  background: var(--bg-secondary);
}

.about-content {
  max-width: 900px;
  margin: 0 auto;
}

.about-text {
  margin-bottom: 3rem;
}

.about-paragraph {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.interests {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.interests-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.interest-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.interest-tag {
  padding: 0.625rem 1.5rem;
  background: var(--primary-color);
  color: white;
  border-radius: 50px;
  font-weight: 500;
  transition: transform 0.3s ease;
}

.interest-tag:hover {
  transform: translateY(-3px);
}
</style>

