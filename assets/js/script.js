// swiper 1 mv
const swiper01 = new Swiper(".swiper01", {
  // Optional parameters
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

// swiper 2 product
const swiper02 = new Swiper(".swiper02", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination02",
    clickable: true,
  },
});

// drawer
$(".drawer-openbtn").click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass("panelactive"); //ナビゲーションにpanelactiveクラスを付与
  $(".drawer-circle-bg").toggleClass("circleactive"); //丸背景にcircleactiveクラスを付与
});

$("#g-nav a,#g-nav-list").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".drawer-openbtn").removeClass("active"); //ボタンの activeクラスを除去し
  $("#g-nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスを除去
  $(".drawer-circle-bg").removeClass("circleactive"); //丸背景のcircleactiveクラスを除去
});

// modal
MicroModal.init({
  disableScroll: true,
});

// wow.js
new WOW().init();

// アコーディオン実装
$(".accordion-head").click(function () {
  $(this).next().slideToggle();
  $(this).children(".accordion-icon").toggleClass("is-accordion-open");
  $(this).toggleClass("is-accordion-open");
});

// スムーススクロール header navigation

$('a[href^="#"]').click(function () {
  // .headerクラスがついた要素の高さを取得
  const header = $(".header-logo-sp").innerHeight();

  // 移動速度を指定（ミリ秒）
  const speed = 300;

  // hrefで指定されたidを取得
  const id = $(this).attr("href");

  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  const target = $("#" == id ? "html" : id);

  // ページのトップを基準にターゲットの位置を取得からトップからの距離からヘッダー分の高さを引く
  const position = $(target).offset().top - header;

  // ターゲットの位置までspeedの速度で移動

  $("html, body").animate(
    {
      scrollTop: position,
    },
    speed
  );
  return false;
});

// スムーススクロール 2 Topへ戻る

$(function () {
  var pagetop = $(".floating");
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500);
    return false;
  });
});

// チェックボックスがONになっていない時、送信ボタン無効処理 01
document.addEventListener(
  "DOMContentLoaded",
  () => {
    const targetButton = document.getElementById("submitButton01");
    const triggerCheckbox = document.querySelector('input[name="agree"]');

    targetButton.disabled = true;
    targetButton.classList.add("is-inactive");

    triggerCheckbox.addEventListener(
      "change",
      function () {
        if (this.checked) {
          targetButton.disabled = false;
          targetButton.classList.remove("is-inactive");
          targetButton.classList.add("is-active");
        } else {
          targetButton.disabled = true;
          targetButton.classList.remove("is-active");
          targetButton.classList.add("is-inactive");
        }
      },
      false
    );
  },
  false
);
// チェックボックスがONになっていない時、送信ボタン無効処理 02
document.addEventListener(
  "DOMContentLoaded",
  () => {
    const targetButton = document.getElementById("submitButton02");
    const triggerCheckbox = document.querySelector('input[name="agree2"]');

    targetButton.disabled = true;
    targetButton.classList.add("is-inactive");

    triggerCheckbox.addEventListener(
      "change",
      function () {
        if (this.checked) {
          targetButton.disabled = false;
          targetButton.classList.remove("is-inactive");
          targetButton.classList.add("is-active");
        } else {
          targetButton.disabled = true;
          targetButton.classList.remove("is-active");
          targetButton.classList.add("is-inactive");
        }
      },
      false
    );
  },
  false
);

// ヘッダーにクラスを付ける処理

if ($(window).width() > 950) {
  const readHeight = $(".read").innerHeight();
  $(window).scroll(function () {
    if ($(window).scrollTop() > readHeight) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });
}

// ふわっとアニメーション
const item01 = document.querySelectorAll(".service-card-item, .profile-item");

item01.forEach((el) => {
  gsap.from(el, 0.5, {
    opacity: 0,
    y: 20,
    scale: 0.8,
    scrollTrigger: {
      trigger: el,
      ease: "back",
      start: "top center",
      // markers: true,
    },
  });
});



// テキストぶつ切り用
// document.addEventListener("DOMContentLoaded", function () {
//   const els = document.querySelectorAll(".animate-title");
//   const cb = function (entries, observer) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const ta = new TextAnimation(entry.target);
//         ta.animate();
//         observer.unobserve(entry.target);
//       } else {
//       }
//     });
//   };
//   const options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0,
//   };
//   const io = new IntersectionObserver(cb, options);
//   els.forEach((el) => io.observe(el));
// });

// TextAnimation();

// class TextAnimation {
//   constructor(el) {
//     this.DOM = {};
//     this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
//     this.chars = this.DOM.el.innerHTML.trim().split("");
//     this.DOM.el.innerHTML = this._splitText();
//   }
//   _splitText() {
//     return this.chars.reduce((acc, curr) => {
//       curr = curr.replace(/\s+/, "&nbsp;");
//       return `${acc}<span class="char">${curr}</span>`;
//     }, "");
//   }
//   animate() {
//     this.DOM.el.classList.toggle("inview");
//   }
// }
