<template>
  <section id="experience" class="section experience-section">
    <div class="container">
      <h2 class="section-title">工作经历</h2>
      <div class="experience-list">
        <div class="experience-card">
          <div class="experience-header">
            <div class="experience-title-group">
              <h3 class="experience-title">软件开发实习生</h3>
              <p class="company-name">博思数采科技股份有限公司内蒙古分公司</p>
            </div>
            <span class="experience-date">2022.07–2022.09</span>
          </div>
          <p class="company-industry">公司行业: 互联网/游戏/软件</p>
          <div class="experience-description">
            <p>在公司担任软件开发实习生期间，主要负责员工考勤签到系统的开发与优化工作，涵盖系统设计、编码实现、数据库管理、测试与上线等环节。</p>
            <p>在开发阶段，我主要使用 Python + Flask 搭建后端服务，提供 RESTful API 支持前端调用；在数据库层面设计并实现了 MySQL 表结构与索引优化，保证数据的完整性与高效检索。前端部分我参与了 HTML/CSS/JavaScript 界面实现，确保签到数据可视化与交互体验良好。同时，我实现了自动化签到功能，通过调用第三方接口采集位置信息，并在后端进行身份与地理位置校验，显著提升系统的智能化与防作弊能力。</p>
            <p>在测试与优化阶段，我使用 unittest 与 Postman 进行单元测试和接口测试，及时发现并修复 Bug。同时对高频访问的签到查询模块进行了 SQL 调优，将查询性能提升约 30%。我还参与实现了日志记录与错误捕获机制，方便后期维护与问题追踪。</p>
          </div>
        </div>
        
        <div class="experience-card">
          <div class="experience-header">
            <div class="experience-title-group">
              <h3 class="experience-title">副团长</h3>
              <p class="company-name">西交利物浦大学键乐团</p>
            </div>
            <span class="experience-date">2018.09–2020.06</span>
          </div>
          <div class="experience-description">
            <p>担任西交利物浦大学键乐团副团长期间，主要负责乐团的日常管理、活动策划及团队协调工作。成功组织了红歌会、迎新晚会、春季音乐会、与戏剧乐团合作的音乐会以及秋季海浪舞台音乐会等多场活动，确保演出高质量完成并广受好评。在活动中制定详细排练计划、协调成员分工，并与其他校内团队和部门积极合作，提升了乐团的知名度与影响力。</p>
            <p>在迎新晚会等活动中，设计新人参与环节并组织培训，帮助新成员快速融入团队；同时优化排练流程，提高团队演奏水平和效率。特别是在与戏剧乐团的合作中，推动了乐器演奏与戏剧叙事的创新结合，为观众带来全新的艺术体验。此外，通过社交媒体宣传和资源争取，为乐团开拓更多演出机会和支持。</p>
            <p>在秋季海浪舞台音乐会中，带领乐团获得"最佳表演团队"荣誉，有效提升了团队的校内地位。这些经历不仅培养了我的活动策划与团队管理能力，也增强了我的沟通协调及解决问题能力，为今后的工作奠定了扎实基础。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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

