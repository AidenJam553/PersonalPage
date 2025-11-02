# 阿里云部署指南

本指南将帮助你将 Vue 3 个人网站部署到阿里云。

## 方式一：使用阿里云 OSS 静态网站托管（推荐）

这是最简单和经济的部署方式，适合纯静态网站。

### 步骤 1：构建项目

在项目根目录运行：

```bash
npm run build
```

构建完成后，会在 `dist` 目录生成所有静态文件。

### 步骤 2：创建 OSS Bucket

1. 登录 [阿里云控制台](https://oss.console.aliyun.com/)
2. 进入 **对象存储 OSS** 服务
3. **重要：先关闭阻止公共访问（如果已开启）**
   - 如果创建时看到"已开启阻止公共访问"，需要先关闭：
   - 在 OSS 控制台右上角，点击 **安全设置** 或进入 **Bucket 列表**
   - 找到 **阻止公共访问** 设置
   - 将其关闭（设置为"否"）
   - 或者先创建 Bucket 为"私有"，创建后再修改
4. 点击 **创建 Bucket**
5. 配置信息：
   - **Bucket 名称**：选择一个唯一的名称（如：`bohan-zhang-portfolio`）
   - **地域**：选择离你最近的地域
   - **读写权限**：选择 **公共读**（用于网站访问）
   - 如果"公共读"被禁用，先创建为"私有"，稍后修改
   - 点击 **确定**

**⚠️ 如果创建时"公共读"选项被禁用：**
1. 先选择"私有"创建 Bucket
2. 创建后，进入 Bucket → **权限管理** → **读写权限**
3. 关闭 **阻止公共访问** 设置
4. 然后将读写权限改为 **公共读**

### 步骤 3：设置 Bucket 权限（如果创建时为"私有"）

如果创建时选择的是"私有"，现在需要改为"公共读"：

1. 进入你创建的 Bucket
2. 点击左侧菜单 **权限管理** → **读写权限**
3. 找到 **阻止公共访问** 部分
4. 点击 **修改**，将 **阻止公共访问** 设置为 **关闭**
5. 保存后，**读写权限** 选项会变为可编辑
6. 将 **读写权限** 改为 **公共读**
7. 点击 **保存**

### 步骤 4：开启静态网站托管

1. 在 Bucket 列表中，点击你创建的 Bucket
2. 在左侧菜单找到 **基础设置** > **静态网站托管**
3. 点击 **设置**，开启静态网站托管
4. **默认首页**：设置为 `index.html`
5. **默认404页**：可以设置为 `index.html`（用于 Vue Router）
6. 点击 **保存**

### 步骤 5：上传文件

#### 方法 A：使用控制台上传

1. 在 Bucket 的 **文件管理** 页面
2. 点击 **上传**
3. 选择 `dist` 目录中的所有文件
4. 点击 **开始上传**

#### 方法 B：使用命令行工具（推荐）

安装阿里云 OSS 命令行工具：

```bash
npm install -g @alicloud/ossutil64
```

配置 OSS：

```bash
ossutil config
# 输入 Endpoint、AccessKey ID、AccessKey Secret
```

上传文件：

```bash
cd dist
ossutil cp -r . oss://your-bucket-name/
```

### 步骤 6：绑定自定义域名（可选）

1. 在 Bucket 的 **传输管理** > **域名管理**
2. 点击 **绑定域名**
3. 输入你的域名（需要先在域名服务商处将域名解析到 OSS）
4. 开启 **自动添加 CNAME 记录**

### 步骤 7：访问网站

部署完成后，你可以通过以下方式访问：

- **OSS 默认域名**：`https://your-bucket-name.oss-region.aliyuncs.com`
- **自定义域名**：`https://your-domain.com`

---

## 方式二：使用阿里云 ECS 云服务器

如果你需要更多控制，可以使用 ECS 服务器。

### 步骤 1：构建项目

```bash
npm run build
```

### 步骤 2：安装 Nginx

连接到你的 ECS 服务器，安装 Nginx：

```bash
# CentOS/RHEL
sudo yum install nginx -y

# Ubuntu/Debian
sudo apt-get update
sudo apt-get install nginx -y
```

### 步骤 3：配置 Nginx

编辑 Nginx 配置文件：

```bash
sudo vi /etc/nginx/nginx.conf
```

添加以下配置：

```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    root /var/www/personal-page/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 步骤 4：上传文件到服务器

使用 `scp` 或其他工具将 `dist` 目录上传到服务器：

```bash
scp -r dist/* root@your-server-ip:/var/www/personal-page/dist/
```

### 步骤 5：启动 Nginx

```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```

---

## 方式三：使用阿里云容器服务（适合高级用户）

如果使用 Docker 容器部署。

### 创建 Dockerfile

在项目根目录创建 `Dockerfile`：

```dockerfile
FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 创建 nginx.conf

```nginx
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 构建和推送镜像

```bash
docker build -t your-registry.cn-hangzhou.aliyuncs.com/your-namespace/personal-page:latest .
docker push your-registry.cn-hangzhou.aliyuncs.com/your-namespace/personal-page:latest
```

---

## 注意事项

1. **CORS 配置**：如果使用 OSS，确保 CORS 设置允许跨域请求
2. **HTTPS**：建议启用 HTTPS，可以使用阿里云 SSL 证书
3. **CDN 加速**：可以配合阿里云 CDN 加速访问
4. **缓存策略**：合理设置静态资源缓存时间

## 免费/低成本选项

### 阿里云免费选项

#### 1. OSS 静态网站托管（免费额度）

阿里云 OSS 提供免费额度，对于个人网站通常足够使用：

**免费额度：**
- **存储容量**：每月 5GB 免费存储空间
- **下行流量**：每月 5GB 免费外网下行流量
- **PUT/POST 请求**：每月 200,000 次免费请求
- **GET/HEAD 请求**：每月 2,000,000 次免费请求

**适合场景：**
- 个人简历网站通常 < 10MB
- 访问量不大的个人网站
- **结论：完全免费！**

#### 2. 学生优惠

如果你是学生，可以申请：
- **学生机**：ECS 云服务器 ¥9.5/月（约 $1.5/月）
- **免费体验**：部分产品有免费试用期

#### 3. 阿里云免费试用

- **OSS 存储包**：免费试用 1 个月
- **CDN 流量包**：免费试用包
- **SSL 证书**：DV 证书通常有免费选项

### 完全免费的替代方案

如果阿里云免费额度不够，还有这些完全免费的选择：

#### 1. GitHub Pages（推荐）
- 完全免费
- 支持自定义域名
- 部署简单

#### 2. Vercel / Netlify
- 完全免费
- 自动部署
- CDN 加速

#### 3. Cloudflare Pages
- 完全免费
- 全球 CDN
- 无限流量

## 成本估算

**阿里云 OSS（使用免费额度）：**
- 个人网站（<5GB存储，<5GB流量/月）：**完全免费** ✅
- 超过免费额度：约 ¥0.1-1/月

**其他方案：**
- **OSS 静态网站托管（付费）**：约 ¥0.1-1/月（根据流量）
- **ECS 云服务器**：约 ¥20-100/月（根据配置）
- **容器服务**：约 ¥50+/月

**推荐：** 如果你的网站流量不大，使用阿里云 OSS 静态网站托管可以在免费额度内，完全免费！

