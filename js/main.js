/* ============================================
   🎯 主要交互逻辑
   ============================================
   功能：
   - 汉堡菜单切换
   - 语言切换
   - 可展开区域
   - 平滑滚动
   ============================================ */

// 全局语言变量
let currentLang = 'zh';

// 汉堡菜单切换
function toggleMenu() {
    const nav = document.getElementById('headerNav');
    const toggle = document.querySelector('.menu-toggle');
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
}

// 语言切换
function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    
    if (currentLang === 'zh') {
        document.querySelectorAll('.lang-zh').forEach(el => el.classList.remove('lang-hidden'));
        document.querySelectorAll('.lang-en').forEach(el => el.classList.add('lang-hidden'));
    } else {
        document.querySelectorAll('.lang-zh').forEach(el => el.classList.add('lang-hidden'));
        document.querySelectorAll('.lang-en').forEach(el => el.classList.remove('lang-hidden'));
    }
}

// 可展开区域切换
function toggleSection(contentId) {
    const content = document.getElementById(contentId);
    const icon = document.getElementById(contentId.replace('-content', '-icon'));
    
    content.classList.toggle('open');
    icon.classList.toggle('open');
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 点击导航链接后关闭菜单
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            const nav = document.getElementById('headerNav');
            const toggle = document.querySelector('.menu-toggle');
            nav.classList.remove('active');
            toggle.classList.remove('active');
        });
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});