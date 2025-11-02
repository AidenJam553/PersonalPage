# 🔧 修复：OSS 网站下载HTML文件问题

## 问题描述

访问 `bohan-portfolio.oss-cn-beijing.aliyuncs.com` 时，浏览器下载HTML文件而不是显示网站。

## 🎯 根本原因

**OSS 有两种访问方式：**
1. **对象存储访问**（会下载文件）- 使用 `https://` 或直接访问文件路径
2. **静态网站托管访问**（显示网页）- 使用 `http://` 且不包含文件路径

## ✅ 解决方案

### 方法1：使用正确的HTTP地址（立即解决）

**❌ 错误的访问方式：**
```
https://bohan-portfolio.oss-cn-beijing.aliyuncs.com
https://bohan-portfolio.oss-cn-beijing.aliyuncs.com/index.html
http://bohan-portfolio.oss-cn-beijing.aliyuncs.com/index.html
```

**✅ 正确的访问方式：**
```
http://bohan-portfolio.oss-cn-beijing.aliyuncs.com
```

**关键点：**
- ✅ 使用 `http://`（不是 `https://`）
- ✅ 不要加 `/index.html`
- ✅ 直接访问根域名

### 方法2：在OSS控制台查找静态网站地址

1. 登录阿里云OSS控制台：https://oss.console.aliyun.com/
2. 进入Bucket：`bohan-portfolio`
3. 点击左侧菜单：**数据管理** → **静态页面**
4. 在页面中查找显示的**静态网站访问地址**或**Website Endpoint**
5. 直接使用显示的地址访问

### 方法3：检查配置（如果方法1不行）

#### 检查清单：

1. **Bucket权限必须是"公共读"**
   - 位置：OSS控制台 → Bucket → **权限管理** → **读写权限**
   - 必须显示：**公共读**
   - 如果显示"私有"，需要先关闭"阻止公共访问"，然后改为"公共读"

2. **静态网站托管必须开启**
   - 位置：OSS控制台 → Bucket → **基础设置** → **静态网站托管**
   - 必须显示：**已开启**或**已启用**
   - 默认首页：`index.html`
   - 默认404页：`index.html`

3. **index.html文件必须存在**
   - 位置：OSS控制台 → Bucket → **文件管理**
   - 确认根目录下有 `index.html` 文件

## 🚀 快速操作步骤

1. **立即尝试访问：**
   ```
   http://bohan-portfolio.oss-cn-beijing.aliyuncs.com
   ```
   （注意是 `http://` 不是 `https://`）

2. **如果浏览器提示不安全：**
   - 点击"高级"或"详细信息"
   - 选择"继续访问"或"访问此站点"

3. **清除浏览器缓存（可选）：**
   - 按 `Ctrl + Shift + Delete` 清除缓存
   - 或使用隐私/无痕模式访问
   - 或按 `Ctrl + F5` 强制刷新

## 💡 为什么会出现这个问题？

- OSS的静态网站托管功能**默认只支持HTTP**，不支持HTTPS
- 使用HTTPS访问时，OSS会将其视为对象存储访问，触发文件下载
- 直接访问 `/index.html` 也会触发文件下载

## 🔐 如果需要HTTPS访问

如果需要使用HTTPS，有两个选择：

1. **绑定自定义域名并配置SSL证书**
   - 在OSS控制台 → **传输管理** → **域名管理** → **绑定域名**
   - 配置DNS解析到OSS
   - 上传SSL证书

2. **使用阿里云CDN**
   - CDN会自动支持HTTPS
   - 配置CDN指向OSS作为源站

## ✅ 验证成功

如果配置正确，你应该看到：
- ✅ 浏览器显示你的网站内容（不是下载文件）
- ✅ 网站样式和交互都正常
- ✅ 可以正常浏览所有页面

---

**提示：99%的情况下，问题都是访问地址错误。确保使用 `http://bohan-portfolio.oss-cn-beijing.aliyuncs.com`（HTTP，不加/index.html）即可解决问题！**

