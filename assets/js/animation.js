document.addEventListener("DOMContentLoaded", function() {
  // 获取所有需要动画的文章
  const articles = document.querySelectorAll('.animate');

  // 显示文章
  function showArticles() {
    articles.forEach(article => {
      article.classList.add('visible');
    });
  }

  // 在页面加载后延迟一段时间显示文章
  setTimeout(showArticles, 500);
  });

  // 获取所有导航链接
  const navLinks = document.querySelectorAll('.nav-link');

  // 添加点击事件监听器
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // 阻止默认的链接跳转行为

      // 获取目标页面的URL
      const targetUrl = this.getAttribute('href');

      // 添加过渡效果
      gsap.to(document.body, {
        opacity: 0,
        duration: 1,
        ease: 'power1.out',
        onComplete: function() {
          window.location.href = targetUrl;
        }
      });
    });
  });
});
