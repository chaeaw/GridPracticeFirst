(function () {
  const get = (target) => document.querySelector(target);
  const getAll = (target) => document.querySelectorAll(target);

  function getClock() {
    const $time = get(".top-bar__time");
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    $time.innerText = `${hour}:${minute}`;
  }

  const $menuList = get(".menu__list");
  const $menuItems = getAll(".menu__list-item");

  const $headerList = get(".header__list");
  const $headerItems = getAll(".header__list-item");

  window.addEventListener("DOMContentLoaded", () => {
    getClock();
    setInterval(getClock, 3000);

    $menuItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        const $activeItem = $menuList.querySelector(".active");
        if ($activeItem) $activeItem.classList.remove("active");
        let target;

        switch (e.target.nodeName) {
          case "LI":
            target = e.target;
            break;
          case "A":
            target = e.target.parentNode;
            break;
          case "I":
            target = e.target.parentNode.parentNode;
            break;
        }

        target.classList.add("active");
      });
    });

    $headerItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        const $activeItem = $headerList.querySelector(
          ".header__list-item--inverted"
        );
        if ($activeItem)
          $activeItem.classList.remove("header__list-item--inverted");

        e.target.classList.add("header__list-item--inverted");
      });
    });
  });
})();
