// 当页面加载完成时执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有章节
    const sections = document.querySelectorAll('h2, h3, h4');
    // 获取所有目录链接
    const navLinks = document.querySelectorAll('#toc a');
    // 获取目录和内容元素
    const toc = document.getElementById('toc');
    const content = document.getElementById('content');
    const toggleButton = document.getElementById('toggle-toc');
    
    // 添加目录切换功能
    toggleButton.addEventListener('click', function() {
        toc.classList.toggle('hidden');
        content.classList.toggle('expanded');
        toggleButton.classList.toggle('hidden');
    });

    // 创建 Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // 当章节进入视图
            if (entry.isIntersecting) {
                // 移除所有链接的active类
                navLinks.forEach(link => link.classList.remove('active'));
                
                // 找到对应的目录链接并添加active类
                const id = entry.target.getAttribute('id');
                const correspondingLink = document.querySelector(`#toc a[href="#${id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }, {
        // 设置根边距，提前触发交叉
        rootMargin: '-20% 0px -60% 0px'
    });

    // 观察所有章节
    sections.forEach(section => {
        if (section.id) {
            observer.observe(section);
        }
    });

    // 平滑滚动效果
    document.querySelectorAll('#toc a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // 更新URL，但不跳转
                history.pushState(null, null, targetId);
            }
        });
    });
}); 