(function () {
  const get = (target) => document.querySelector(target);

  function getClock() {
    const $time = get(".top-bar__time");
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    $time.innerText = `${hour}:${minute}`;
  }

  window.addEventListener("DOMContentLoaded", () => {
    getClock();
    setInterval(getClock, 3000);
  });
})();
