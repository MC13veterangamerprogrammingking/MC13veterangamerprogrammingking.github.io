document.addEventListener("DOMContentLoaded", function() {
  // 获取所有需要淡入淡出的文章
  const articles = document.querySelectorAll('.fade-in');

  // 定义一个函数来使文章可见
  function showArticles() {
    articles.forEach(article => {
      article.classList.add('visible');
    });
  }

  // 在页面加载后延迟一段时间显示文章
  setTimeout(showArticles, 500);
});
