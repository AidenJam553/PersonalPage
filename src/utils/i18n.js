export const translations = {
  zh: {
    nav: {
      home: '首页',
      about: '关于',
      education: '教育',
      experience: '经历',
      projects: '项目',
      skills: '技能',
      contact: '联系'
    },
    hero: {
      greeting: '你好，我是',
      subtitle: '全栈开发工程师 & UI/UX 设计师',
      description: '莫纳什大学信息技术专业研究生在读，拥有丰富的后端/前端以及用户界面设计经验',
      contactMe: '联系我',
      viewProjects: '查看项目',
      age: '年龄',
      location: '所在地',
      phone: '电话',
      email: '邮箱'
    },
    about: {
      title: '关于我',
      p1: '莫纳什大学信息技术专业研究生在读，拥有丰富的后端/前端以及用户界面设计经验。',
      p2: '具有良好的编程能力和习惯，致力于代码的整体结构规范及优化。',
      p3: '具有良好的审美和设计能力，致力于用户界面的美观和易用性。',
      p4: '人际沟通能力强，踏实肯干，习惯不断学习新技术，对知识有强烈的求知欲。',
      interests: '兴趣 / 特长'
    },
    education: {
      title: '教育经历',
      gpa: 'GPA',
      ranking: '成绩排名',
      courses: '主修课程',
      masters: {
        school: '莫纳什大学（硕士）',
        major: '信息技术',
        period: '2024.02–2026.01',
        ranking: '前30%'
      },
      bachelors: {
        school: '西交利物浦大学（本科）',
        major: '数字媒体技术',
        period: '2018.09–2023.07',
        ranking: '中等'
      }
    },
    experience: {
      title: '工作经历',
      industry: '公司行业',
      intern: {
        title: '软件开发实习生',
        company: '博思数采科技股份有限公司内蒙古分公司',
        period: '2022.07–2022.09',
        description: [
          '在公司担任软件开发实习生期间，主要负责员工考勤签到系统的开发与优化工作，涵盖系统设计、编码实现、数据库管理、测试与上线等环节。',
          '在开发阶段，我主要使用 Python + Flask 搭建后端服务，提供 RESTful API 支持前端调用；在数据库层面设计并实现了 MySQL 表结构与索引优化，保证数据的完整性与高效检索。前端部分我参与了 HTML/CSS/JavaScript 界面实现，确保签到数据可视化与交互体验良好。同时，我实现了自动化签到功能，通过调用第三方接口采集位置信息，并在后端进行身份与地理位置校验，显著提升系统的智能化与防作弊能力。',
          '在测试与优化阶段，我使用 unittest 与 Postman 进行单元测试和接口测试，及时发现并修复 Bug。同时对高频访问的签到查询模块进行了 SQL 调优，将查询性能提升约 30%。我还参与实现了日志记录与错误捕获机制，方便后期维护与问题追踪。'
        ]
      },
      leader: {
        title: '副团长',
        company: '西交利物浦大学键乐团',
        period: '2018.09–2020.06',
        description: [
          '担任西交利物浦大学键乐团副团长期间，主要负责乐团的日常管理、活动策划及团队协调工作。成功组织了红歌会、迎新晚会、春季音乐会、与戏剧乐团合作的音乐会以及秋季海浪舞台音乐会等多场活动，确保演出高质量完成并广受好评。在活动中制定详细排练计划、协调成员分工，并与其他校内团队和部门积极合作，提升了乐团的知名度与影响力。',
          '在迎新晚会等活动中，设计新人参与环节并组织培训，帮助新成员快速融入团队；同时优化排练流程，提高团队演奏水平和效率。特别是在与戏剧乐团的合作中，推动了乐器演奏与戏剧叙事的创新结合，为观众带来全新的艺术体验。此外，通过社交媒体宣传和资源争取，为乐团开拓更多演出机会和支持。',
          '在秋季海浪舞台音乐会中，带领乐团获得"最佳表演团队"荣誉，有效提升了团队的校内地位。这些经历不仅培养了我的活动策划与团队管理能力，也增强了我的沟通协调及解决问题能力，为今后的工作奠定了扎实基础。'
        ]
      }
    },
    projects: {
      title: '项目作品',
      fullStack: '全栈开发',
      techStack: '技术架构：',
      coreFeatures: '核心功能：',
      highlights: '技术亮点：',
      viewProject: '查看项目 →',
      youthHub: {
        title: '青少年数字安全教育平台（Youth Trust Hub）',
        period: '2025.07–2025.10',
        description: '本项目开发了青年网络安全教育Web平台，采用前后端分离架构，为澳大利亚10–17岁青少年提供诈骗识别训练、隐私保护实践、风险评估分析等一站式服务。',
        tech: [
          '前端：Next.js 15、React 19、TypeScript、D3.js数据可视化',
          '后端：Python FastAPI、PostgreSQL/SQLite、Redis缓存、异步API设计',
          '部署：Docker容器化、Netlify静态部署'
        ],
        features: [
          '集成Google Gemini AI智能隐私分析，支持文本、图像、音频多模态检测',
          '利用Scamwatch真实数据构建诈骗观察台，实现地理分布分析',
          '开发包含诈骗购物网站识别、社媒隐私、钓鱼聊天模拟等4个游戏互动教学模块',
          '设计隐私优先架构，零用户数据收集，通过Hugging Face Whisper实现语音转文本'
        ],
        highlightTags: [
          'FastAPI + Pydantic双重验证',
          'Redis速率限制',
          'CORS安全策略',
          'SQL注入防护',
          'HTTPS加密',
          '代码分割优化',
          'Sherlock跨平台检测'
        ]
      },
      fitness: {
        title: '运动与健康网站 (Healthy&Fitness)',
        period: '2025.08–2025.09',
        description: '本项目开发了一个功能完善的健康健身Web应用平台，采用前后端分离架构，为用户提供健身课程学习、健身房发现、社区交流、健康数据记录等一站式服务。',
        tech: [
          '前端：Vue 3、Vite、Pinia状态管理、响应式设计',
          '后端：Node.js、Express.js、Firebase Authentication、Firestore',
          '部署：Firebase Cloud Functions无服务器架构'
        ],
        features: [
          '集成Google Gemini AI开发智能语音助手，支持15+种自然语言导航指令',
          '利用Google Maps API构建健身房发现系统，实现实时定位和路线规划',
          '开发包含用户管理、课程分析、内容审核等10+个模块的管理后台',
          '设计学习管理系统，支持课程浏览、进度追踪、证书生成'
        ],
        highlightTags: [
          'Firebase + OAuth 2.0',
          'bcrypt密码加密',
          'JWT令牌管理',
          'Helmet.js安全',
          '速率限制',
          'Chart.js可视化'
        ]
      },
      android: {
        title: '智能跑步健身应用 (Android App)',
        period: '2025.04–2025.06',
        description: '本项目开发了一款功能完善的原生 Android 跑步健身应用，为用户提供跑步计划管理、实时定位追踪和运动数据统计等核心功能，打造智能化、个性化的健身体验平台。',
        tech: [
          '前端：Jetpack Compose、Material Design 3、响应式布局',
          '后端：Room 数据库、Repository 模式、Kotlin 协程 + Flow 状态管理',
          '功能支持：Google OAuth 2.0、邮箱注册登录、Google Maps API 定位'
        ],
        features: [
          '用户认证系统，支持 Google 登录与邮箱注册，密码强度验证',
          '资料编辑与头像上传，个性化信息管理',
          '跑步计划自定义与目标设定，支持开始、暂停与结束操作',
          '实时追踪运动数据，自动汇总历史记录',
          '集成地图功能，实现 GPS 定位、轨迹绘制、距离计算与地址解析'
        ],
        highlightTags: [
          'MVVM架构',
          'Repository模式',
          'Kotlin协程',
          'Flow状态管理',
          '动态权限申请',
          '定位精度优化'
        ]
      }
    },
    skills: {
      title: '技能 / 语言',
      programming: '编程语言',
      frontend: '前端技术',
      backend: '后端技术',
      other: '其他技能',
      level: '良好'
    },
    contact: {
      title: '联系方式',
      email: '邮箱',
      phone: '电话',
      projects: '项目作品',
      message: '期待与您合作',
      messageText: '如果您对我的项目或技能感兴趣，欢迎通过以上方式联系我。我随时准备讨论新的机会和挑战！'
    },
    footer: {
      copyright: '© 2025 张博涵. 保留所有权利.',
      built: '用 Vue 3 构建',
      name: '张博涵'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      education: 'Education',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hello, I\'m',
      subtitle: 'Full Stack Developer & UI/UX Designer',
      description: 'Master\'s student in Information Technology at Monash University with rich experience in backend/frontend development and user interface design',
      contactMe: 'Contact Me',
      viewProjects: 'View Projects',
      age: 'Age',
      location: 'Location',
      phone: 'Phone',
      email: 'Email'
    },
    about: {
      title: 'About Me',
      p1: 'Master\'s student in Information Technology at Monash University with rich experience in backend/frontend development and user interface design.',
      p2: 'Good programming skills and habits, committed to code structure standardization and optimization.',
      p3: 'Good aesthetic and design skills, committed to beautiful and user-friendly interfaces.',
      p4: 'Strong interpersonal communication skills, hardworking, used to constantly learning new technologies with strong curiosity for knowledge.',
      interests: 'Interests / Hobbies'
    },
    common: {
      name: '张博涵'
    },
    education: {
      title: 'Education',
      gpa: 'GPA',
      ranking: 'Ranking',
      courses: 'Main Courses',
      masters: {
        school: 'Monash University (Master)',
        major: 'Information Technology',
        period: '2024.02–2026.01',
        ranking: 'Top 30%'
      },
      bachelors: {
        school: 'Xi\'an Jiaotong-Liverpool University (Bachelor)',
        major: 'Digital Media Technology',
        period: '2018.09–2023.07',
        ranking: 'Medium'
      }
    },
    experience: {
      title: 'Work Experience',
      industry: 'Industry',
      intern: {
        title: 'Software Development Intern',
        company: 'Bosi Data Collection Technology Co., Ltd. Inner Mongolia Branch',
        period: '2022.07–2022.09',
        description: [
          'During my internship as a software development intern, I was primarily responsible for the development and optimization of an employee attendance check-in system, covering system design, coding implementation, database management, testing, and deployment.',
          'In the development phase, I mainly used Python + Flask to build backend services, providing RESTful API support for frontend calls. At the database level, I designed and implemented MySQL table structures and index optimization to ensure data integrity and efficient retrieval. For the frontend, I participated in HTML/CSS/JavaScript interface implementation to ensure good visualization and interactive experience for check-in data. I also implemented an automated check-in feature by calling third-party interfaces to collect location information and performing identity and geographic location verification on the backend, significantly improving the system\'s intelligence and anti-fraud capabilities.',
          'In the testing and optimization phase, I used unittest and Postman for unit testing and API testing, promptly discovering and fixing bugs. I also performed SQL optimization on the frequently accessed check-in query module, improving query performance by approximately 30%. I participated in implementing logging and error capture mechanisms to facilitate later maintenance and issue tracking.'
        ]
      },
      leader: {
        title: 'Deputy Leader',
        company: 'XJTLU Keyboard Orchestra',
        period: '2018.09–2020.06',
        description: [
          'During my tenure as Deputy Leader of the XJTLU Keyboard Orchestra, I was primarily responsible for daily management, event planning, and team coordination. I successfully organized multiple events including red song concerts, welcome parties, spring concerts, collaborative concerts with the drama orchestra, and autumn wave stage concerts, ensuring high-quality performances that were well-received.',
          'At events such as welcome parties, I designed newcomer participation sessions and organized training to help new members quickly integrate into the team. I also optimized rehearsal processes to improve team performance levels and efficiency. Particularly in collaboration with the drama orchestra, I promoted innovative integration of instrumental performance and dramatic narrative, bringing audiences a fresh artistic experience. Additionally, through social media promotion and resource acquisition, I opened up more performance opportunities and support for the orchestra.',
          'At the Autumn Wave Stage Concert, I led the orchestra to win the "Best Performance Team" honor, effectively enhancing the team\'s status on campus. These experiences not only developed my event planning and team management abilities but also enhanced my communication, coordination, and problem-solving skills, laying a solid foundation for future work.'
        ]
      }
    },
    projects: {
      title: 'Projects',
      fullStack: 'Full Stack Development',
      techStack: 'Tech Stack:',
      coreFeatures: 'Core Features:',
      highlights: 'Technical Highlights:',
      viewProject: 'View Project →',
      youthHub: {
        title: 'Youth Digital Safety Education Platform (Youth Trust Hub)',
        period: '2025.07–2025.10',
        description: 'This project developed a youth cybersecurity education web platform using a frontend-backend separated architecture, providing comprehensive services including scam recognition training, privacy protection practices, and risk assessment analysis for Australian youth aged 10-17.',
        tech: [
          'Frontend: Next.js 15, React 19, TypeScript, D3.js data visualization',
          'Backend: Python FastAPI, PostgreSQL/SQLite, Redis caching, asynchronous API design',
          'Deployment: Docker containerization, Netlify static deployment'
        ],
        features: [
          'Integrated Google Gemini AI for intelligent privacy analysis, supporting multimodal detection of text, images, and audio',
          'Built scam observation platform using Scamwatch real data, achieving geographic distribution analysis',
          'Developed 4 interactive gamified teaching modules including fake shopping website identification, social media privacy, and phishing chat simulation',
          'Designed privacy-first architecture with zero user data collection, implementing speech-to-text via Hugging Face Whisper'
        ],
        highlightTags: [
          'FastAPI + Pydantic dual validation',
          'Redis rate limiting',
          'CORS security policies',
          'SQL injection protection',
          'HTTPS encryption',
          'Code splitting optimization',
          'Sherlock cross-platform detection'
        ]
      },
      fitness: {
        title: 'Health & Fitness Website (Healthy&Fitness)',
        period: '2025.08–2025.09',
        description: 'This project developed a comprehensive health and fitness web application platform using a frontend-backend separated architecture, providing users with fitness course learning, gym discovery, community interaction, and health data recording services.',
        tech: [
          'Frontend: Vue 3, Vite, Pinia state management, responsive design',
          'Backend: Node.js, Express.js, Firebase Authentication, Firestore',
          'Deployment: Firebase Cloud Functions serverless architecture'
        ],
        features: [
          'Integrated Google Gemini AI to develop intelligent voice assistant supporting 15+ natural language navigation commands',
          'Built gym discovery system using Google Maps API, achieving real-time location and route planning',
          'Developed management backend with 10+ modules including user management, course analysis, and content review',
          'Designed learning management system supporting course browsing, progress tracking, and certificate generation'
        ],
        highlightTags: [
          'Firebase + OAuth 2.0',
          'bcrypt password encryption',
          'JWT token management',
          'Helmet.js security',
          'Rate limiting',
          'Chart.js visualization'
        ]
      },
      android: {
        title: 'Smart Running & Fitness App (Android App)',
        period: '2025.04–2025.06',
        description: 'This project developed a comprehensive native Android running and fitness application, providing users with running plan management, real-time location tracking, and sports data statistics to create an intelligent and personalized fitness experience platform.',
        tech: [
          'Frontend: Jetpack Compose, Material Design 3, responsive layout',
          'Backend: Room database, Repository pattern, Kotlin coroutines + Flow state management',
          'Features: Google OAuth 2.0, email registration/login, Google Maps API positioning'
        ],
        features: [
          'User authentication system supporting Google login and email registration with password strength validation',
          'Profile editing and avatar upload for personalized information management',
          'Running plan customization and goal setting, supporting start, pause, and end operations',
          'Real-time tracking of sports data with automatic historical record aggregation',
          'Integrated map functionality with GPS positioning, trajectory drawing, distance calculation, and address parsing'
        ],
        highlightTags: [
          'MVVM architecture',
          'Repository pattern',
          'Kotlin coroutines',
          'Flow state management',
          'Dynamic permission requests',
          'Location accuracy optimization'
        ]
      }
    },
    skills: {
      title: 'Skills / Languages',
      programming: 'Programming Languages',
      frontend: 'Frontend Technologies',
      backend: 'Backend Technologies',
      other: 'Other Skills',
      level: 'Good'
    },
    contact: {
      title: 'Contact',
      email: 'Email',
      phone: 'Phone',
      projects: 'Projects',
      message: 'Looking Forward to Working With You',
      messageText: 'If you are interested in my projects or skills, please feel free to contact me through the above methods. I am ready to discuss new opportunities and challenges!'
    },
    footer: {
      copyright: '© 2025 Bohan Zhang. All rights reserved.',
      built: 'Built with Vue 3',
      name: 'Bohan Zhang'
    },
    common: {
      name: 'Bohan Zhang'
    }
  }
}

