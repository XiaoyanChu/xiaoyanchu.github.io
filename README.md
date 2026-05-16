# 学术主页使用说明

## 📁 文件结构

```
xiaoyanchu.github.io/
├── index.html          ← 主页面（包含所有内容）
├── css/
│   └── style.css      ← 样式文件（颜色、布局、字体）
├── js/
│   ├── main.js        ← 交互逻辑（菜单、语言切换）
│   └── map.js         ← 地图配置（合作机构数据）
├── images/
│   └── android-chrome-512x512.jpg  ← 你的照片
├── files/
│   └── CV_XiaoyanChu.pdf           ← 简历文件
└── README.md          ← 本说明文件
```

## 🎯 快速修改指南

### 1️⃣ 修改个人信息
📍 **文件**: `index.html`  
🔍 **搜索**: `[EDIT-PROFILE]`

修改内容：
- 姓名、职位
- 个人简介
- 社交链接（邮箱、Google Scholar等）

### 2️⃣ 更新数据统计
📍 **文件**: `index.html`  
🔍 **搜索**: `[EDIT-STATS]`

修改数字：
- 引用次数
- H-Index
- 论文数量

### 3️⃣ 添加新论文
📍 **文件**: `index.html`  
🔍 **搜索**: `[EDIT-PUBLICATIONS]`

复制这个模板：
```html
<div class="content-item">
    <a href="你的论文链接" target="_blank">
        <strong>Chu, X. (2025).</strong> 论文标题. <em>期刊名</em>. SSCI Q1
    </a>
</div>
```

### 4️⃣ 添加新荣誉
📍 **文件**: `index.html`  
🔍 **搜索**: `[EDIT-HONORS]`

复制这个模板：
```html
<div class="content-item">
    <strong>2025.XX</strong> - <span class="lang-zh">中文名称</span><span class="lang-en lang-hidden">English Name</span>
</div>
```

### 5️⃣ 添加最新动态
📍 **文件**: `index.html`  
🔍 **搜索**: `[EDIT-NEWS]`

复制这个模板：
```html
<div class="news-item">
    <div class="news-date">2025.XX</div>
    <div class="news-content lang-zh">🎉 中文内容</div>
    <div class="news-content lang-en lang-hidden">🎉 English Content</div>
</div>
```

### 6️⃣ 添加合作机构
📍 **文件**: `js/map.js`  
🔍 **搜索**: `[EDIT-INSTITUTIONS]`

复制这个模板：
```javascript
{ 
    name: 'Institution Name', 
    nameZh: '机构中文名', 
    lat: 纬度数字,    // 例如: 30.2636
    lng: 经度数字,    // 例如: 120.1219
    type: 'partner'   // 保持这个值
},
```

**获取坐标方法**：
1. 打开 Google Maps
2. 搜索机构名称
3. 右键点击位置
4. 选择"复制坐标"

### 7️⃣ 修改主题颜色
📍 **文件**: `css/style.css`  
🔍 **搜索**: `[COLORS]`

修改颜色变量：
```css
--primary: #1a365d;    /* 主色：深蓝 */
--accent: #c53030;     /* 强调色：红色 */
```

## 🚀 部署到GitHub Pages

### 方法一：直接上传（推荐新手）
1. 登录 GitHub
2. 进入你的仓库 `xiaoyanchu.github.io`
3. 点击 **Add file** → **Upload files**
4. 拖拽所有文件到页面（保持文件夹结构）
5. 点击 **Commit changes**
6. 等待1-2分钟，访问 `https://xiaoyanchu.github.io`

### 方法二：Git命令行
```bash
git add .
git commit -m "更新学术主页"
git push
```

## ⚡ 常见问题

### Q1: 修改后网站没有更新？
**A**: 清除浏览器缓存，或按 `Ctrl+F5` 强制刷新

### Q2: 地图加载不出来？
**A**: 检查网络，确保能访问高德地图服务

### Q3: 手机端看起来怎么样？
**A**: 已经完全优化了移动端，包括汉堡菜单

### Q4: 如何改照片？
**A**: 替换 `images/android-chrome-512x512.jpg`，保持文件名不变

### Q5: 如何更新简历？
**A**: 替换 `files/CV_XiaoyanChu.pdf`，保持文件名不变

## 📝 注意事项

1. **双语内容**：每次添加内容都要写中英文两个版本
2. **文件路径**：不要改变文件夹结构，否则可能链接失效
3. **特殊字符**：中文标点在HTML里要用英文标点
4. **备份**：修改前先下载一份备份

## 🎨 自定义建议

如果你想要：
- **改变字体**：修改 `css/style.css` 中的 `[FONTS]` 部分
- **调整间距**：修改 `padding` 和 `margin` 值
- **换背景图**：在 `.bg-animation` 部分添加 background-image

## 💡 维护建议

**每次更新流程**：
1. 在本地用记事本/VS Code打开文件
2. 找到对应标记（如 `[EDIT-NEWS]`）
3. 复制模板，修改内容
4. 保存后上传到GitHub
5. 等待1-2分钟查看效果

**更新频率**：
- 发表新论文 → 更新 Publications
- 获得荣誉 → 更新 Honors
- 新合作 → 更新 js/map.js
- 重要动态 → 更新 News（保留最新5-6条）

---

有问题随时联系我！🚀