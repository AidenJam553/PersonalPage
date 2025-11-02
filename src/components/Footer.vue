<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p class="footer-text">
          © 2025 {{ (t.common && t.common.name) || (currentLanguage === 'zh' ? '张博涵' : 'Bohan Zhang') }}. {{ currentLanguage === 'zh' ? '保留所有权利.' : 'All rights reserved.' }}
        </p>
        <p class="footer-subtext">
          {{ t.footer.built }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import { translations } from '../utils/i18n'

const { currentLanguage } = useLanguage()
const t = computed(() => translations[currentLanguage.value])
</script>

<style scoped>
.footer {
  background: var(--text-primary);
  color: white;
  padding: 2rem 0;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-text {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.footer-subtext {
  font-size: 0.875rem;
  opacity: 0.7;
}
</style>

