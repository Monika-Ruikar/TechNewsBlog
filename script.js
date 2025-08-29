const searchInput = document.getElementById('searchInput');
const articles = document.querySelectorAll('.article');

searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();

  articles.forEach(article => {
    const title = article.querySelector('h2').textContent.toLowerCase();
    const content = article.querySelector('p').textContent.toLowerCase();

    if (title.includes(filter) || content.includes(filter)) {
      article.style.display = '';
    } else {
      article.style.display = 'none';
    }
  });
});
