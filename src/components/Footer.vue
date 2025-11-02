<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p class="footer-text">
          © 2025 张博涵. 保留所有权利.
        </p>
        <p class="footer-subtext">
          用 Vue 3 构建
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
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

