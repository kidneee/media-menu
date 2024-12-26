document.addEventListener('DOMContentLoaded', () => {
  // ハンバーガーメニュー
  const hamburgerButton = document.querySelector('#js-buttonHamburger');

  hamburgerButton.addEventListener('click', (e) => {
    const isExpanded = e.currentTarget.getAttribute('aria-expanded') !== 'false';
    e.currentTarget.setAttribute('aria-expanded', !isExpanded);

    document.documentElement.classList.toggle('is-drawerActive');
  });

  // Slickの初期化
  $(document).ready(function () {
    $('.slider').slick({
      settingName: 'settingValue', // 実際の設定に置き換えてください
    });
  });
});
