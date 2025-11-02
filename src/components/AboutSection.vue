<template>
  <section id="about" class="section about-section">
    <div class="container">
      <h2 class="section-title">关于我</h2>
      <div class="about-content">
        <div class="about-text">
          <p class="about-paragraph">
            莫纳什大学信息技术专业研究生在读，拥有丰富的后端/前端以及用户界面设计经验。
          </p>
          <p class="about-paragraph">
            具有良好的编程能力和习惯，致力于代码的整体结构规范及优化。
          </p>
          <p class="about-paragraph">
            具有良好的审美和设计能力，致力于用户界面的美观和易用性。
          </p>
          <p class="about-paragraph">
            人际沟通能力强，踏实肯干，习惯不断学习新技术，对知识有强烈的求知欲。
          </p>
        </div>
        <div class="interests">
          <h3 class="interests-title">兴趣 / 特长</h3>
          <div class="interest-tags">
            <span class="interest-tag">健身</span>
            <span class="interest-tag">唱歌</span>
            <span class="interest-tag">钢琴</span>
            <span class="interest-tag">编曲</span>
            <span class="interest-tag">摄影</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  color: white;
  border-radius: 50px;
  font-weight: 500;
  transition: transform 0.3s ease;
}

.interest-tag:hover {
  transform: translateY(-3px);
}
</style>

