<template>
  <section id="education" class="section education-section">
    <div class="container">
      <h2 class="section-title">教育经历</h2>
      <div class="education-timeline">
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <h3 class="school-name">莫纳什大学（硕士）</h3>
              <span class="timeline-date">2024.02–2026.01</span>
            </div>
            <p class="major">信息技术</p>
            <div class="education-details">
              <div class="detail-item">
                <span class="detail-label">成绩排名:</span>
                <span class="detail-value">前30%</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">GPA:</span>
                <span class="detail-value">3.5</span>
              </div>
            </div>
            <div class="courses">
              <h4 class="courses-title">主修课程:</h4>
              <div class="course-tags">
                <span class="course-tag">软件工程</span>
                <span class="course-tag">数据库</span>
                <span class="course-tag">Java</span>
                <span class="course-tag">Python</span>
                <span class="course-tag">数据分析</span>
                <span class="course-tag">UX/UI用户界面设计与运用</span>
                <span class="course-tag">计算机与网络结构</span>
                <span class="course-tag">项目管理</span>
                <span class="course-tag">云计算</span>
                <span class="course-tag">安卓项目开发</span>
                <span class="course-tag">web项目设计与开发</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <h3 class="school-name">西交利物浦大学（本科）</h3>
              <span class="timeline-date">2018.09–2023.07</span>
            </div>
            <p class="major">数字媒体技术</p>
            <div class="education-details">
              <div class="detail-item">
                <span class="detail-label">成绩排名:</span>
                <span class="detail-value">中等</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">GPA:</span>
                <span class="detail-value">3.0</span>
              </div>
            </div>
            <div class="courses">
              <h4 class="courses-title">主修课程:</h4>
              <div class="course-tags">
                <span class="course-tag">Java</span>
                <span class="course-tag">数据结构</span>
                <span class="course-tag">交互设计</span>
                <span class="course-tag">网页设计与开发</span>
                <span class="course-tag">Unity</span>
                <span class="course-tag">UI设计</span>
                <span class="course-tag">界面设计</span>
                <span class="course-tag">面向对象程序设计</span>
                <span class="course-tag">数据库原理</span>
                <span class="course-tag">数字图像处理</span>
                <span class="course-tag">嵌入式系统</span>
                <span class="course-tag">OpenGL</span>
                <span class="course-tag">人工智能</span>
                <span class="course-tag">多媒体安全系统</span>
                <span class="course-tag">安卓开发</span>
                <span class="course-tag">摄影</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
  background: linear-gradient(180deg, var(--primary-color), var(--secondary-color));
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

