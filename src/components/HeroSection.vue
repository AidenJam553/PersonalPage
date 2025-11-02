<template>
  <section id="home" class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            你好，我是 <span class="highlight">张博涵</span>
          </h1>
          <p class="hero-subtitle">全栈开发工程师 & UI/UX 设计师</p>
          <p class="hero-description">
            莫纳什大学信息技术专业研究生在读，拥有丰富的后端/前端以及用户界面设计经验
          </p>
          <div class="hero-buttons">
            <a href="#contact" class="btn btn-primary" @click="scrollTo('contact')">
              联系我
            </a>
            <a href="#projects" class="btn btn-secondary" @click="scrollTo('projects')">
              查看项目
            </a>
          </div>
          <div class="hero-info">
            <div class="info-item">
              <span class="info-label">年龄</span>
              <span class="info-value">25岁</span>
            </div>
            <div class="info-item">
              <span class="info-label">所在地</span>
              <span class="info-value">海外</span>
            </div>
            <div class="info-item">
              <span class="info-label">电话</span>
              <span class="info-value">+86 13804740529</span>
            </div>
            <div class="info-item">
              <span class="info-label">邮箱</span>
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
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
  line-height: 1.2;
}

.highlight {
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
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
}

.info-item:hover {
  transform: translateY(-5px);
}

.info-label {
  display: block;
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.info-value {
  display: block;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
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
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1));
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
}
</style>

