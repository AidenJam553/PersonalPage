# 配置 GitHub Secrets 详细步骤

## 前置条件

✅ 已完成：
- 创建了阿里云 OSS Bucket：`bohan-portfolio`
- 获取了阿里云 AccessKey ID 和 Secret
- 知道了 OSS Endpoint：`oss-cn-beijing.aliyuncs.com`

---

## 步骤 1：进入 GitHub 仓库设置

1. 访问你的 GitHub 仓库：https://github.com/AidenJam553/PersonalPage
2. 点击仓库页面右上角的 **Settings**（设置）标签
3. 在左侧菜单中找到 **Secrets and variables** → **Actions**
   - 路径：`Settings` → `Secrets and variables` → `Actions`

---

## 步骤 2：添加第一个 Secret - AccessKey ID

1. 点击 **New repository secret**（新建仓库密钥）按钮
2. 填写信息：
   - **Name（名称）**：`ALIYUN_ACCESS_KEY_ID`
   - **Secret（值）**：粘贴你的阿里云 AccessKey ID
3. 点击 **Add secret**（添加密钥）

---

## 步骤 3：添加第二个 Secret - AccessKey Secret

1. 再次点击 **New repository secret**
2. 填写信息：
   - **Name（名称）**：`ALIYUN_ACCESS_KEY_SECRET`
   - **Secret（值）**：粘贴你的阿里云 AccessKey Secret
3. 点击 **Add secret**

⚠️ **注意**：Secret 值一旦保存就无法再次查看，请确保正确复制！

---

## 步骤 4：添加第三个 Secret - OSS Endpoint

1. 点击 **New repository secret**
2. 填写信息：
   - **Name（名称）**：`ALIYUN_OSS_ENDPOINT`
   - **Secret（值）**：`oss-cn-beijing.aliyuncs.com`
     - ⚠️ **不要包含** `https://` 前缀
     - ⚠️ **不要包含** 末尾斜杠 `/`
     - 只填写域名部分：`oss-cn-beijing.aliyuncs.com`
3. 点击 **Add secret**

**根据你的 Bucket 地域选择对应的 Endpoint**：
- 华北2（北京）：`oss-cn-beijing.aliyuncs.com`
- 华东1（杭州）：`oss-cn-hangzhou.aliyuncs.com`
- 华东2（上海）：`oss-cn-shanghai.aliyuncs.com`
- 华南1（深圳）：`oss-cn-shenzhen.aliyuncs.com`

---

## 步骤 5：添加第四个 Secret - Bucket 名称

1. 点击 **New repository secret**
2. 填写信息：
   - **Name（名称）**：`ALIYUN_OSS_BUCKET`
   - **Secret（值）**：`bohan-portfolio`
     - 这是你的 Bucket 名称，不带任何前缀或后缀
3. 点击 **Add secret**

---

## 验证 Secrets 配置

配置完成后，你应该在 Secrets 列表中看到 4 个 Secret：

✅ `ALIYUN_ACCESS_KEY_ID`  
✅ `ALIYUN_ACCESS_KEY_SECRET`  
✅ `ALIYUN_OSS_ENDPOINT`  
✅ `ALIYUN_OSS_BUCKET`

---

## 完成！

现在你的 GitHub Actions 已经配置好了，可以自动部署到阿里云 OSS 了！

### 下一步

推送代码到 GitHub，会自动触发部署：

```bash
git push
```

或者手动触发：
1. 进入 GitHub 仓库 → **Actions**
2. 选择 **Deploy to Aliyun OSS**
3. 点击 **Run workflow**

---

## 常见错误

### 错误 1：Secret 名称拼写错误

确保 Secret 名称完全匹配（区分大小写）：
- ✅ `ALIYUN_ACCESS_KEY_ID` （正确）
- ❌ `ALIYUN_ACCESS_KEY` （错误，缺少 `_ID`）
- ❌ `aliyun_access_key_id` （错误，应该是大写）

### 错误 2：Endpoint 格式错误

- ❌ `https://oss-cn-beijing.aliyuncs.com` （错误，包含协议）
- ❌ `oss-cn-beijing.aliyuncs.com/` （错误，包含斜杠）
- ✅ `oss-cn-beijing.aliyuncs.com` （正确）

### 错误 3：Bucket 名称包含路径

- ❌ `oss://bohan-portfolio` （错误，包含协议前缀）
- ❌ `bohan-portfolio/` （错误，包含斜杠）
- ✅ `bohan-portfolio` （正确）

---

完成配置后，记得推送代码触发自动部署！


