# GitHub 自动部署到阿里云 OSS 完整指南

本指南将帮助你设置 GitHub Actions 自动部署到阿里云 OSS，确保中国境内可直接访问。

## 前置条件

1. ✅ 拥有 GitHub 账号
2. ✅ 拥有阿里云账号
3. ✅ 项目已构建完成（`npm run build` 已生成 `dist` 目录）

---

## 步骤 1：创建阿里云 OSS Bucket

### 1.1 登录阿里云控制台

访问：https://oss.console.aliyun.com/

### 1.2 创建 Bucket

1. 点击 **创建 Bucket**
2. 配置信息：
   - **Bucket 名称**：如 `bohan-portfolio`（必须全局唯一）
   - **地域**：选择国内地域（推荐：**华北2（北京）** 或 **华东1（杭州）**）
   - **读写权限**：
     - 如果"公共读"被禁用，先选择"私有"
     - 稍后我们会在权限管理中修改
3. 点击 **确定**

### 1.3 设置 Bucket 权限

1. 进入创建的 Bucket
2. 点击 **权限管理** → **读写权限**
3. 如果"公共读"被禁用：
   - 先关闭 **阻止公共访问**
   - 然后将 **读写权限** 改为 **公共读**
4. 保存

### 1.4 开启静态网站托管

1. 进入 Bucket → **基础设置** → **静态网站托管**
2. 点击 **设置**，开启静态网站托管
3. **默认首页**：`index.html`
4. **默认404页**：`index.html`
5. 保存

### 1.5 获取访问域名

部署完成后，你需要获取 OSS 访问域名。有以下几种方式：

#### 方式 A：在 Bucket 概览页面查看

1. 进入你的 Bucket（如：`bohan-portfolio`）
2. 在左侧菜单找到 **概览** 或 **Overview**
3. 在页面右侧会显示 **访问域名** 或 **Endpoint** 区域
4. 你会看到类似这样的信息：
   - **Bucket 域名**：`bohan-portfolio.oss-cn-beijing.aliyuncs.com`
   - **外网访问地址**：`https://bohan-portfolio.oss-cn-beijing.aliyuncs.com`
5. **复制这个外网访问地址**，这就是你的网站访问域名

#### 方式 B：在域名管理页面查看

1. 进入 Bucket → **Bucket 配置** → **域名管理**
2. 在页面顶部会显示 **Bucket 域名**
3. 格式：`https://your-bucket-name.oss-region.aliyuncs.com`

#### 方式 C：手动拼接（如果找不到）

域名格式为：`https://[Bucket名称].[Endpoint]`

根据你的 Bucket 地域，对应的域名格式：

- **华北2（北京）**：`https://your-bucket-name.oss-cn-beijing.aliyuncs.com`
- **华东1（杭州）**：`https://your-bucket-name.oss-cn-hangzhou.aliyuncs.com`
- **华东2（上海）**：`https://your-bucket-name.oss-cn-shanghai.aliyuncs.com`
- **华南1（深圳）**：`https://your-bucket-name.oss-cn-shenzhen.aliyuncs.com`

**示例**：
- Bucket 名称：`bohan-portfolio`
- 地域：华北2（北京）
- 访问域名：`https://bohan-portfolio.oss-cn-beijing.aliyuncs.com`

**重要**：使用国内地域的 Bucket，中国境内访问速度快！

#### 方式 D：通过静态网站托管页面

根据你提供的截图，你已经开启了静态网站托管，你可以：
1. 在静态网站托管页面查看说明
2. 或者点击左侧导航的 **域名管理** 查看 Bucket 域名

---

## 步骤 2：获取阿里云 AccessKey

### 2.1 创建 AccessKey

1. 登录 [阿里云控制台](https://home.console.aliyun.com/)
2. 鼠标悬停在右上角头像，点击 **AccessKey 管理**
3. 如果提示安全提醒，选择 **继续使用 AccessKey**
4. 点击 **创建 AccessKey**
5. **重要**：立即保存以下信息（只显示一次）：
   - **AccessKey ID**
   - **AccessKey Secret**

⚠️ **安全提示**：不要将 AccessKey 提交到代码仓库！

### 2.2 记录 OSS Endpoint

根据你的 Bucket 地域，记录对应的 Endpoint：

- **华北2（北京）**：`oss-cn-beijing.aliyuncs.com`
- **华东1（杭州）**：`oss-cn-hangzhou.aliyuncs.com`
- **华东2（上海）**：`oss-cn-shanghai.aliyuncs.com`
- **华南1（深圳）**：`oss-cn-shenzhen.aliyuncs.com`

---

## 步骤 3：配置 GitHub Secrets

### 3.1 进入 GitHub 仓库设置

1. 打开你的 GitHub 仓库
2. 点击 **Settings**（设置）
3. 左侧菜单找到 **Secrets and variables** → **Actions**

### 3.2 添加 Secrets

点击 **New repository secret**，依次添加以下 4 个 Secret：

#### Secret 1: `ALIYUN_ACCESS_KEY_ID`
- **Name**: `ALIYUN_ACCESS_KEY_ID`
- **Value**: 你的 AccessKey ID

#### Secret 2: `ALIYUN_ACCESS_KEY_SECRET`
- **Name**: `ALIYUN_ACCESS_KEY_SECRET`
- **Value**: 你的 AccessKey Secret

#### Secret 3: `ALIYUN_OSS_ENDPOINT`
- **Name**: `ALIYUN_OSS_ENDPOINT`
- **Value**: 你的 OSS Endpoint（如：`oss-cn-beijing.aliyuncs.com`）
- **注意**：不要包含 `https://` 前缀

#### Secret 4: `ALIYUN_OSS_BUCKET`
- **Name**: `ALIYUN_OSS_BUCKET`
- **Value**: 你的 Bucket 名称（如：`bohan-portfolio`）

---

## 步骤 4：配置 GitHub Actions

我已经为你创建了工作流文件：`.github/workflows/deploy-aliyun.yml`

检查文件内容，确保路径正确。如果需要修改，编辑该文件。

---

## 步骤 5：推送代码到 GitHub

### 5.1 初始化 Git 仓库（如果还没有）

```bash
cd PersonalPage
git init
git add .
git commit -m "Initial commit"
```

### 5.2 创建 GitHub 仓库并推送

1. 在 GitHub 创建新仓库（建议设为 Private，或 Public）
2. 连接并推送：

```bash
git branch -M main
git remote add origin https://github.com/your-username/portfolio.git
git push -u origin main
```

---

## 步骤 6：触发自动部署

### 方式 A：自动触发

当你推送代码到 `main` 分支时，会自动触发部署：

```bash
git add .
git commit -m "Update website"
git push
```

### 方式 B：手动触发

1. 进入 GitHub 仓库页面
2. 点击 **Actions** 标签
3. 选择 **Deploy to Aliyun OSS** 工作流
4. 点击 **Run workflow**
5. 选择分支，点击 **Run workflow**

---

## 步骤 7：查看部署状态

1. 进入 GitHub 仓库 → **Actions**
2. 点击最新的工作流运行
3. 查看每个步骤的执行状态
4. 如果全部显示 ✅，说明部署成功

---

## 步骤 8：访问网站

部署成功后，访问你的网站：

```
https://your-bucket-name.oss-region.aliyuncs.com
```

**测试国内访问速度**：
- 在中国境内打开网站
- 应该可以直接访问，无需 VPN
- 如果使用国内地域，速度会很快

---

## 后续优化（可选）

### 1. 绑定自定义域名

1. 在 Bucket → **传输管理** → **域名管理**
2. 点击 **绑定域名**
3. 输入你的域名
4. 配置 DNS 解析（CNAME 记录）

### 2. 配置 CDN 加速（可选）

1. 在阿里云控制台创建 CDN 加速域名
2. 源站选择你的 OSS Bucket
3. 这样可以进一步提升访问速度

### 3. 配置 HTTPS

- OSS 默认支持 HTTPS
- 自定义域名需要配置 SSL 证书
- 可以在阿里云申请免费 SSL 证书

---

## 故障排查

### 问题 1：部署失败 - AccessKey 错误

**解决方案**：
- 检查 GitHub Secrets 中的 AccessKey 是否正确
- 确认 AccessKey 没有被禁用

### 问题 2：文件上传失败

**解决方案**：
- 检查 Bucket 名称是否正确
- 确认 Bucket 读写权限设置正确
- 检查 Endpoint 是否与 Bucket 地域匹配

### 问题 3：网站无法访问

**解决方案**：
- 确认已开启"静态网站托管"
- 确认 Bucket 权限为"公共读"
- 检查 `index.html` 是否在 Bucket 根目录
- **确认使用正确的访问域名**：必须是 OSS Bucket 域名，格式为 `https://bucket-name.oss-region.aliyuncs.com`

### 问题 4：找不到访问域名

**解决方案**：
- **最简单方法**：在 Bucket 列表中，你的 Bucket 名称旁边通常会显示访问地址
- 或者：Bucket → **概览** → 查看 **访问域名** 区域
- 或者：Bucket → **Bucket 配置** → **域名管理** → 查看 **Bucket 域名**
- **手动拼接**：`https://[你的Bucket名称].oss-[你的地域].aliyuncs.com`
  - 例如：Bucket 名 `bohan-portfolio`，地域 `华北2（北京）`
  - 域名：`https://bohan-portfolio.oss-cn-beijing.aliyuncs.com`

### 问题 4：国内访问慢

**解决方案**：
- 确认 Bucket 地域选择的是国内地域
- 考虑使用阿里云 CDN 加速
- 检查是否有地域限制

---

## 工作流文件说明

`.github/workflows/deploy-aliyun.yml` 包含以下步骤：

1. ✅ 检出代码
2. ✅ 安装 Node.js 和依赖
3. ✅ 构建项目（生成 `dist` 目录）
4. ✅ 安装阿里云 OSS 命令行工具
5. ✅ 配置 OSS 连接
6. ✅ 上传文件到 OSS

---

## 总结

完成以上步骤后：
- ✅ 每次推送代码到 GitHub，自动部署到阿里云 OSS
- ✅ 中国境内可直接访问，无需 VPN
- ✅ 使用国内地域，访问速度快
- ✅ 完全自动化，无需手动操作

**费用**：在免费额度内（5GB 存储 + 5GB 流量/月）完全免费！

如有问题，查看 GitHub Actions 的日志输出进行排查。

