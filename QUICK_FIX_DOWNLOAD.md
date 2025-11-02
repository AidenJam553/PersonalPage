# 🔥 快速修复：网站下载HTML文件问题

## ⚡ 立即检查这3件事

### 1️⃣ **你使用的访问地址是什么？**

**❌ 错误的地址（会下载文件）：**
```
https://bohan-portfolio.oss-cn-beijing.aliyuncs.com
https://bohan-portfolio.oss-cn-beijing.aliyuncs.com/index.html
http://bohan-portfolio.oss-cn-beijing.aliyuncs.com/index.html
```

**✅ 正确的地址（显示网页）：**
```
http://bohan-portfolio.oss-cn-beijing.aliyuncs.com
```

**关键点：**
- 必须用 **HTTP**（不是 HTTPS）
- 不要加 `/index.html`
- 直接访问根域名

---

### 2️⃣ **Bucket 权限必须是"公共读"**

1. 进入 OSS 控制台：https://oss.console.aliyun.com/
2. 进入你的 Bucket：`bohan-portfolio`
3. 点击左侧：**权限控制** → **读写权限**
4. **必须设置为：公共读**
5. 如果显示"私有"或"公共读写"，改为"公共读"并保存

**⚠️ 重要：** 如果"公共读"选项被禁用，需要先：
- 进入 **权限控制** → **阻止公共访问**
- **关闭** "阻止公共访问"
- 然后再去设置"公共读"

---

### 3️⃣ **静态网站托管必须真正开启**

1. 进入 Bucket：`bohan-portfolio`
2. 点击左侧：**数据管理** → **静态页面**
3. 查看页面是否有：
   - **"开启"按钮**（如果没有开启，点击它）
   - **"已开启"状态显示**（绿色或蓝色）
   - **主开关处于开启状态**

4. 如果看到"设置"或"编辑"按钮：
   - 点击进入
   - 找到页面顶部的**主开关**
   - 确保它是**开启**状态
   - 设置：
     - 默认首页：`index.html`
     - 默认404页：`index.html`
   - 点击**保存**

---

## 🎯 完整检查清单（按顺序执行）

请逐一检查并打勾：

- [ ] **步骤1：检查Bucket权限**
  - [ ] 进入：权限控制 → 读写权限
  - [ ] 确认显示：**公共读**
  - [ ] 如果不是，改为"公共读"并保存
  - [ ] 如果"公共读"被禁用，先关闭"阻止公共访问"

- [ ] **步骤2：确认静态网站托管已开启**
  - [ ] 进入：数据管理 → 静态页面
  - [ ] 确认页面显示：**"已开启"** 或开关是开启状态
  - [ ] 如果不是，点击"开启"或"设置"并开启它
  - [ ] 确认默认首页是：`index.html`

- [ ] **步骤3：使用正确的访问地址**
  - [ ] 访问：`http://bohan-portfolio.oss-cn-beijing.aliyuncs.com`
  - [ ] 注意：是 `http://` 不是 `https://`
  - [ ] 注意：不要加 `/index.html`

- [ ] **步骤4：清除浏览器缓存**
  - [ ] 按 `Ctrl + Shift + Delete` 清除缓存
  - [ ] 或使用隐私/无痕模式访问
  - [ ] 或按 `Ctrl + F5` 强制刷新

---

## 🚨 如果还是不行，试试这个

### 方法A：在OSS控制台直接查看静态网站地址

1. 进入 Bucket → **数据管理** → **静态页面**
2. 查看页面是否显示：
   - **"静态网站访问地址"**
   - **"网站端点"**
   - **"Website Endpoint"**
3. 如果有显示，**直接点击或复制这个地址访问**
4. 通常格式类似：`http://bohan-portfolio.oss-cn-beijing.aliyuncs.com`

### 方法B：检查index.html文件

1. 进入 Bucket → **文件管理**
2. 确认根目录下有 `index.html` 文件
3. 点击 `index.html` 文件名进入详情
4. 查看：
   - **Content-Type** 应该是：`text/html` 或 `text/html; charset=utf-8`
   - **Content-Disposition** 应该是：`inline`（不是 `attachment`）
5. 如果不是 `inline`，需要修改：
   - 点击文件右侧的**详情**或**更多** → **修改HTTP头**
   - 设置 **Content-Disposition** 为：`inline`
   - 保存

### 方法C：重新上传index.html

如果文件头设置不对，可以：

1. 进入 Bucket → **文件管理**
2. 找到 `index.html`
3. 删除它
4. 重新上传（记得设置Content-Type为 `text/html`）

或者等待下次GitHub Actions自动部署（我刚才已经更新了脚本，会自动设置正确的Content-Disposition）

---

## 🚨 **重要发现！问题在第4项**

根据你的截图，**问题找到了！**

### ❌ **你访问的是错误的URL：**

从截图看，你访问的地址是：
```
https://bohan-portfolio.oss-cn-beijing.aliyuncs.com/index.html
```

**这是文件对象URL，不是静态网站托管URL！**

截图中的黄色警告框明确说明了：
> "访问使用 OSS 默认域名生成的文件 URL 会触发浏览器默认强制下载"

### ✅ **正确的访问方式：**

**不要访问文件URL！** 应该访问：

```
http://bohan-portfolio.oss-cn-beijing.aliyuncs.com
```

**关键区别：**
- ❌ `https://.../index.html` - 文件对象URL（会下载）
- ✅ `http://...` - 静态网站托管URL（会显示网页）
- ✅ 注意是 `http://` **不是** `https://`
- ✅ 不要加 `/index.html`

### 📋 **如何找到正确的静态网站托管地址？**

1. 进入 OSS 控制台
2. 进入 Bucket：`bohan-portfolio`
3. 点击：**数据管理** → **静态页面**
4. 在页面中查找：
   - **"静态网站访问地址"**
   - **"网站端点"**
   - **"Website Endpoint"**
5. 如果页面没有显示，地址格式是：
   ```
   http://bohan-portfolio.oss-cn-beijing.aliyuncs.com
   ```
   （注意：HTTP，不是HTTPS，不要加/index.html）

---

## 📞 如果还是不行，告诉我这些信息

如果使用正确的静态网站托管地址（`http://bohan-portfolio.oss-cn-beijing.aliyuncs.com`）还是下载文件，请告诉我：

1. **你访问的具体地址是什么？**
   - （必须是 `http://bohan-portfolio.oss-cn-beijing.aliyuncs.com`，不要加 `/index.html`）

2. **Bucket权限是什么？**
   - （在 权限控制 → 读写权限 看到的）

3. **静态页面页面显示什么？**
   - （是否显示"已开启"？是否有"开启"按钮？）

4. **index.html文件的Content-Type和Content-Disposition是什么？**
   - （在 文件管理 → 点击index.html → 查看详情）

---

## 💡 重要提示

**OSS静态网站托管只支持HTTP，不支持HTTPS！**

如果浏览器自动跳转到HTTPS，或者你输入的是HTTPS地址，就会下载文件。

**解决方案：**
- 必须使用 `http://` 开头
- 如果浏览器提示不安全，选择"继续访问"或"高级" → "继续前往"
- 或者绑定自定义域名并配置SSL证书

---

加油！按照上面的步骤逐一检查，应该能解决问题！💪

