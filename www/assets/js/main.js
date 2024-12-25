document.addEventListener('DOMContentLoaded', () => {
  // ハンバーガーメニュー
  const hamburgerButton = document.querySelector('#js-buttonHamburger');

  hamburgerButton.addEventListener('click', (e) => {
    const isExpanded = e.currentTarget.getAttribute('aria-expanded') !== 'false';
    e.currentTarget.setAttribute('aria-expanded', !isExpanded);

    document.documentElement.classList.toggle('is-drawerActive');
  });

  document.getElementById('js-buttonHamburger').addEventListener('click', function () {
    const drawer = document.getElementById('drawerMenu');
    if (drawer.classList.contains('open')) {
      drawer.classList.remove('open');
    } else {
      drawer.classList.add('open');
    }
  });

  // CSSファイルにタイムスタンプを付加
  const timestamp = new Date().getTime();
  const stylesheets = ['./assets/css/reset.css', './assets/css/common.css', './assets/css/page.css'];
  stylesheets.forEach((href) => {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = `${href}?${timestamp}`;
    document.head.appendChild(linkElement);
  });
});
