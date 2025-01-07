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

  //Slick
  $('.slider').slick({
    centerMode: true,
    centerPadding: '6%', // 見切れる幅を%で指定
    slidesToShow: 3, // 一度に表示するスライド数
    slidesToScroll: 1, // 一度にスクロールするスライド数
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // ブレークポイント以下で表示スライド数を変更
          centerPadding: '6.5%',
        },
      },
      {
        breakpoint: 657,
        settings: {
          slidesToShow: 1,
          centerPadding: '7.5%',
        },
      },
    ],
  });
});
