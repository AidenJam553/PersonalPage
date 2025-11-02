# 免费部署方案对比

## 方案一：阿里云 OSS（推荐 - 免费额度内免费）

### 免费额度
- ✅ **5GB 存储空间/月** - 免费
- ✅ **5GB 外网下行流量/月** - 免费
- ✅ **200,000 PUT/POST 请求/月** - 免费
- ✅ **2,000,000 GET/HEAD 请求/月** - 免费

### 你的网站估算
- 项目大小：约 1-2MB（包含图片）
- 每月访问量：1000 次访问约消耗 1-2GB 流量
- **结论：对于个人简历网站，完全够用，免费！** ✅

### 部署步骤（与 OSS 部署相同）

1. 登录 [阿里云 OSS 控制台](https://oss.console.aliyun.com/)
2. 创建 Bucket（选择"公共读"）
3. 开启静态网站托管
4. 上传 `dist` 目录内容
5. 访问网站

**注意事项：**
- 确保每月流量不超过 5GB
- 如果超出，按 ¥0.5/GB 收费（也很便宜）
- 可以设置流量预警

---

## 方案二：GitHub Pages（完全免费）

### 优势
- ✅ 完全免费，无流量限制
- ✅ 支持自定义域名
- ✅ 自动 HTTPS
- ✅ 与 GitHub 集成

### 部署步骤

#### 1. 创建 GitHub 仓库

```bash
# 在项目根目录
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/portfolio.git
git push -u origin main
```

#### 2. 配置 GitHub Pages

1. 在 GitHub 仓库页面，点击 **Settings**
2. 左侧菜单找到 **Pages**
3. **Source** 选择 **GitHub Actions**
4. 在项目中创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: actions/configure-pages@v2
      - uses: actions/upload-pages-artifact@v1
        with:
          path: './dist'
      - uses: actions/deploy-pages@v1
```

#### 3. 访问网站

部署完成后，访问：`https://your-username.github.io/portfolio`

---

## 方案三：Vercel（完全免费）

### 优势
- ✅ 完全免费
- ✅ 自动部署
- ✅ 全球 CDN
- ✅ 支持自定义域名

### 部署步骤

#### 方法 A：通过网站部署

1. 访问 [Vercel](https://vercel.com/)
2. 使用 GitHub 账号登录
3. 点击 **Add New Project**
4. 导入你的 GitHub 仓库
5. 配置：
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. 点击 **Deploy**

#### 方法 B：通过命令行

```bash
npm install -g vercel
cd PersonalPage
vercel
```

---

## 方案四：Netlify（完全免费）

### 优势
- ✅ 完全免费
- ✅ 拖拽部署
- ✅ 自动 HTTPS

### 部署步骤

#### 方法 A：拖拽部署

1. 访问 [Netlify](https://www.netlify.com/)
2. 注册账号
3. 在 Dashboard 找到 **Sites**
4. 将 `dist` 文件夹拖拽到上传区域
5. 完成！

#### 方法 B：Git 集成

1. 连接 GitHub 仓库
2. 配置：
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. 点击 **Deploy site**

---

## 方案对比

| 方案 | 费用 | 流量限制 | 部署难度 | 自定义域名 | 推荐度 |
|------|------|----------|----------|------------|--------|
| **阿里云 OSS** | 免费（5GB内） | 5GB/月 | ⭐⭐ | ✅ | ⭐⭐⭐⭐⭐ |
| **GitHub Pages** | 完全免费 | 无限制 | ⭐⭐⭐ | ✅ | ⭐⭐⭐⭐ |
| **Vercel** | 完全免费 | 100GB/月 | ⭐⭐ | ✅ | ⭐⭐⭐⭐⭐ |
| **Netlify** | 完全免费 | 100GB/月 | ⭐⭐ | ✅ | ⭐⭐⭐⭐⭐ |

## 推荐顺序

1. **阿里云 OSS**（如果你主要使用阿里云生态）
   - 免费额度够用
   - 国内访问速度快
   - 有中文支持

2. **Vercel**（如果想快速部署）
   - 部署最简单
   - 自动 CI/CD
   - 全球 CDN

3. **GitHub Pages**（如果你想用 Git 管理）
   - 与代码仓库集成
   - 完全免费
   - 稳定可靠

4. **Netlify**（如果喜欢拖拽方式）
   - 最简单的拖拽部署
   - 功能丰富

## 结论

对于个人简历网站：
- **流量不大**：阿里云 OSS 免费额度完全够用 ✅
- **想完全免费**：推荐 Vercel 或 Netlify
- **想用 Git 管理**：推荐 GitHub Pages

所有方案都是免费或接近免费的，选择最适合你的即可！

