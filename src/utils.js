export function initCursor() {
  let mouseX = window.innerWidth / 2,
    mouseY = window.innerHeight / 2;

  let cursor = {
    el: document.querySelector(".cursor"),
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    w: 30,
    h: 30,
    update: function () {
      let l = this.x - this.w / 2;
      let t = this.y - this.h / 2;
      this.el.style.transform = "translate3d(" + l + "px," + t + "px, 0)";
    },
  };

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const link = document.querySelectorAll(
    "a, .swiper-pagination, .swiper-button-prev, .swiper-button-next, button, .button, .btn, .lnk"
  );
  link.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor.el.classList.add("cursor-zoom");
    });
    link.addEventListener("mouseleave", () => {
      cursor.el.classList.remove("cursor-zoom");
    });
  });

  setInterval(move, 1000 / 60);
  function move() {
    cursor.x = lerp(cursor.x, mouseX, 0.1);
    cursor.y = lerp(cursor.y, mouseY, 0.1);
    cursor.update();
  }
  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }
}

export const stickyNav = () => {
  let offset = window.scrollY;
  const sticky = document.querySelectorAll(".header");
  sticky.forEach((sticky) => {
    if (sticky) {
      if (offset > 100) {
        sticky.classList.add("animate-in", "sticky");
      } else {
        // sticky.classList.add("animate-out");
        sticky.classList.remove("animate-in", "sticky");
        // setTimeout(() => {
        //   sticky.classList.remove("animate-out");
        // }, 500);
      }
    }
  });
};
