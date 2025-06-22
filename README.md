# Travel Guides Collection

这是一个旅行攻略集合网站，目前包含以下目的地的详细旅游指南：

- 冰岛 🇮🇸
- 日本 🇯🇵 (即将推出)
- 挪威 🇳🇴 (即将推出)

## 部署到 GitHub Pages

1. 在 GitHub 上创建一个新的仓库
2. 将仓库克隆到本地：
   ```bash
   git clone https://github.com/你的用户名/仓库名.git
   ```

3. 将所有文件复制到仓库目录中

4. 提交更改：
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

5. 在 GitHub 仓库设置中启用 GitHub Pages：
   - 进入仓库设置
   - 找到 "Pages" 选项
   - 在 "Source" 下选择 "main" 分支
   - 点击 "Save"

6. 等待几分钟后，你的网站将在以下地址可用：
   ```
   https://你的用户名.github.io/仓库名
   ```

## 添加新的旅行攻略

1. 在 `guides` 目录下创建新的目的地文件夹
2. 复制 `guides/iceland` 目录下的文件结构作为模板
3. 修改内容以适应新的目的地
4. 在主页 `index.html` 中添加新的目的地卡片

## 目录结构

```
├── index.html          # 主页
├── images/            # 图片资源
│   ├── iceland.jpg
│   ├── japan.jpg
│   └── norway.jpg
└── guides/            # 旅行攻略
    └── iceland/       # 冰岛攻略
        ├── index.html
        ├── style.css
        └── script.js
```

## 贡献

欢迎提交 Pull Request 来添加新的目的地或改进现有内容！ 