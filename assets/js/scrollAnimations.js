const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-items");
    } else {
      entry.target.classList.remove("show-items");
    }
  });
});

document.querySelectorAll(".scroll-scale, .scroll-bottom, .scroll-top")
  .forEach((el) => observer.observe(el));
