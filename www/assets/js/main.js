document.addEventListener('DOMContentLoaded', () => {
  // ハンバーガーメニュー
  const hamburgerButton = document.querySelector('#js-buttonHamburger');
  const drawerMenu = document.getElementById('drawerMenu');
  const header = document.querySelector('.header');

  hamburgerButton.addEventListener('click', () => {
    const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
    hamburgerButton.setAttribute('aria-expanded', !isExpanded);
    drawerMenu.classList.toggle('open');
    header.classList.toggle('open');
  });

  // スケジュールタブ切り替え
  // const tabs = document.querySelectorAll('.tab');
  // const columns = document.querySelectorAll('.day-column');
  // const observerOptions = {root: null, rootMargin: '0px', threshold: 0.5};

  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       const index = Array.from(columns).indexOf(entry.target);
  //       tabs.forEach((tab) => tab.classList.remove('active'));
  //       tabs[index].classList.add('active');
  //     }
  //   });
  // }, observerOptions);

  // columns.forEach((column) => observer.observe(column));
  const tabs = document.querySelectorAll('.tab');
  const columns = document.querySelectorAll('.day-column');
  const scrollContainer = document.querySelector('.schedule-scroll');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // タブの active クラスを切り替え
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      // 対応するコンテンツの位置までスクロール
      const targetColumn = columns[index];
      if (targetColumn) {
        const scrollAmount =
          targetColumn.offsetLeft - // ターゲット要素の左端
          scrollContainer.offsetLeft + // スクロールエリアの左端を引く
          targetColumn.offsetWidth / 2 - // ターゲット要素の幅の半分
          scrollContainer.offsetWidth / 2; // スクロールエリアの幅の半分

        scrollContainer.scrollTo({
          left: scrollAmount,
          behavior: 'smooth', // スムーズなスクロール
        });
      }
    });
  });

  // IntersectionObserverを使った自動タブ切り替え
  const observerOptions = {root: null, rootMargin: '0px', threshold: 0.5};
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(columns).indexOf(entry.target);
        tabs.forEach((tab) => tab.classList.remove('active'));
        tabs[index].classList.add('active');
      }
    });
  }, observerOptions);

  columns.forEach((column) => observer.observe(column));

  // TOPに戻る
  const pageTopBtn = document.querySelector('.page-top');
  pageTopBtn.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
  });

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 700) {
      pageTopBtn.classList.add('is-visible');
    } else {
      pageTopBtn.classList.remove('is-visible');
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
