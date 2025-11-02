<template>
  <section id="projects" class="section projects-section">
    <div class="container">
      <h2 class="section-title">项目作品</h2>
      <div class="projects-grid">
        <div class="project-card">
          <div class="project-header">
            <h3 class="project-title">青少年数字安全教育平台（Youth Trust Hub）</h3>
            <span class="project-period">2025.07–2025.10</span>
          </div>
          <p class="project-role">全栈开发</p>
          <p class="project-description">
            本项目开发了青年网络安全教育Web平台，采用前后端分离架构，为澳大利亚10–17岁青少年提供诈骗识别训练、隐私保护实践、风险评估分析等一站式服务。
          </p>
          <div class="project-tech">
            <h4 class="tech-title">技术架构：</h4>
            <ul class="tech-list">
              <li>前端：Next.js 15、React 19、TypeScript、D3.js数据可视化</li>
              <li>后端：Python FastAPI、PostgreSQL/SQLite、Redis缓存、异步API设计</li>
              <li>部署：Docker容器化、Netlify静态部署</li>
            </ul>
          </div>
          <div class="project-features">
            <h4 class="features-title">核心功能：</h4>
            <ul class="features-list">
              <li>集成Google Gemini AI智能隐私分析，支持文本、图像、音频多模态检测</li>
              <li>利用Scamwatch真实数据构建诈骗观察台，实现地理分布分析</li>
              <li>开发包含诈骗购物网站识别、社媒隐私、钓鱼聊天模拟等4个游戏互动教学模块</li>
              <li>设计隐私优先架构，零用户数据收集，通过Hugging Face Whisper实现语音转文本</li>
            </ul>
          </div>
          <div class="project-highlights">
            <h4 class="highlights-title">技术亮点：</h4>
            <div class="highlight-tags">
              <span class="highlight-tag">FastAPI + Pydantic双重验证</span>
              <span class="highlight-tag">Redis速率限制</span>
              <span class="highlight-tag">CORS安全策略</span>
              <span class="highlight-tag">SQL注入防护</span>
              <span class="highlight-tag">HTTPS加密</span>
              <span class="highlight-tag">代码分割优化</span>
              <span class="highlight-tag">Sherlock跨平台检测</span>
            </div>
          </div>
          <a href="https://youthtrusthub.app/" target="_blank" class="project-link">
            查看项目 →
          </a>
        </div>

        <div class="project-card">
          <div class="project-header">
            <h3 class="project-title">运动与健康网站 (Healthy&Fitness)</h3>
            <span class="project-period">2025.08–2025.09</span>
          </div>
          <p class="project-role">全栈开发</p>
          <p class="project-description">
            本项目开发了一个功能完善的健康健身Web应用平台，采用前后端分离架构，为用户提供健身课程学习、健身房发现、社区交流、健康数据记录等一站式服务。
          </p>
          <div class="project-tech">
            <h4 class="tech-title">技术架构：</h4>
            <ul class="tech-list">
              <li>前端：Vue 3、Vite、Pinia状态管理、响应式设计</li>
              <li>后端：Node.js、Express.js、Firebase Authentication、Firestore</li>
              <li>部署：Firebase Cloud Functions无服务器架构</li>
            </ul>
          </div>
          <div class="project-features">
            <h4 class="features-title">核心功能：</h4>
            <ul class="features-list">
              <li>集成Google Gemini AI开发智能语音助手，支持15+种自然语言导航指令</li>
              <li>利用Google Maps API构建健身房发现系统，实现实时定位和路线规划</li>
              <li>开发包含用户管理、课程分析、内容审核等10+个模块的管理后台</li>
              <li>设计学习管理系统，支持课程浏览、进度追踪、证书生成</li>
            </ul>
          </div>
          <div class="project-highlights">
            <h4 class="highlights-title">技术亮点：</h4>
            <div class="highlight-tags">
              <span class="highlight-tag">Firebase + OAuth 2.0</span>
              <span class="highlight-tag">bcrypt密码加密</span>
              <span class="highlight-tag">JWT令牌管理</span>
              <span class="highlight-tag">Helmet.js安全</span>
              <span class="highlight-tag">速率限制</span>
              <span class="highlight-tag">Chart.js可视化</span>
            </div>
          </div>
          <a href="https://fit5032-assignment-healthyandfitnesswebsite.pages.dev/" target="_blank" class="project-link">
            查看项目 →
          </a>
        </div>

        <div class="project-card">
          <div class="project-header">
            <h3 class="project-title">智能跑步健身应用 (Android App)</h3>
            <span class="project-period">2025.04–2025.06</span>
          </div>
          <p class="project-role">全栈开发</p>
          <p class="project-description">
            本项目开发了一款功能完善的原生 Android 跑步健身应用，为用户提供跑步计划管理、实时定位追踪和运动数据统计等核心功能，打造智能化、个性化的健身体验平台。
          </p>
          <div class="project-tech">
            <h4 class="tech-title">技术架构：</h4>
            <ul class="tech-list">
              <li>前端：Jetpack Compose、Material Design 3、响应式布局</li>
              <li>后端：Room 数据库、Repository 模式、Kotlin 协程 + Flow 状态管理</li>
              <li>功能支持：Google OAuth 2.0、邮箱注册登录、Google Maps API 定位</li>
            </ul>
          </div>
          <div class="project-features">
            <h4 class="features-title">核心功能：</h4>
            <ul class="features-list">
              <li>用户认证系统，支持 Google 登录与邮箱注册，密码强度验证</li>
              <li>资料编辑与头像上传，个性化信息管理</li>
              <li>跑步计划自定义与目标设定，支持开始、暂停与结束操作</li>
              <li>实时追踪运动数据，自动汇总历史记录</li>
              <li>集成地图功能，实现 GPS 定位、轨迹绘制、距离计算与地址解析</li>
            </ul>
          </div>
          <div class="project-highlights">
            <h4 class="highlights-title">技术亮点：</h4>
            <div class="highlight-tags">
              <span class="highlight-tag">MVVM架构</span>
              <span class="highlight-tag">Repository模式</span>
              <span class="highlight-tag">Kotlin协程</span>
              <span class="highlight-tag">Flow状态管理</span>
              <span class="highlight-tag">动态权限申请</span>
              <span class="highlight-tag">定位精度优化</span>
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
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
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

