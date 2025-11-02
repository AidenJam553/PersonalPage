<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <h2 class="section-title">联系方式</h2>
      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">📧</div>
            <div class="contact-details">
              <h3 class="contact-label">邮箱</h3>
              <a href="mailto:aidenjam533@gmail.com" class="contact-value">
                aidenjam533@gmail.com
              </a>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">📱</div>
            <div class="contact-details">
              <h3 class="contact-label">电话</h3>
              <a href="tel:+8613804740529" class="contact-value">
                +86 13804740529
              </a>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">🌐</div>
            <div class="contact-details">
              <h3 class="contact-label">项目作品</h3>
              <div class="contact-links">
                <a href="https://youthtrusthub.app/" target="_blank" class="contact-link">
                  青少年数字安全教育平台
                </a>
                <a href="https://fit5032-assignment-healthyandfitnesswebsite.pages.dev/" target="_blank" class="contact-link">
                  运动与健康网站
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contact-form-wrapper">
          <div class="contact-message">
            <h3>期待与您合作</h3>
            <p>如果您对我的项目或技能感兴趣，欢迎通过以上方式联系我。我随时准备讨论新的机会和挑战！</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.contact-section {
  background: var(--bg-primary);
}

.contact-content {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-item {
  display: flex;
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-5px);
}

.contact-icon {
  font-size: 2rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 12px;
  flex-shrink: 0;
}

.contact-details {
  flex: 1;
}

.contact-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.contact-value {
  font-size: 1.125rem;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.contact-value:hover {
  color: var(--primary-color);
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-link {
  font-size: 1rem;
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: var(--secondary-color);
  text-decoration: underline;
}

.contact-form-wrapper {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  padding: 3rem;
  border-radius: 12px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-message h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.contact-message p {
  font-size: 1.125rem;
  line-height: 1.8;
  opacity: 0.95;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-form-wrapper {
    padding: 2rem;
  }
}
</style>

