// Polyfun Games — small progressive enhancements. The site works without this file.
document.documentElement.classList.remove("no-js");

// Fade sections in as they scroll into view.
(function () {
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      // stagger cards that enter together
      var siblings = entry.target.parentElement.querySelectorAll(".reveal");
      var i = Array.prototype.indexOf.call(siblings, entry.target);
      entry.target.style.transitionDelay = Math.min(i, 6) * 60 + "ms";
      entry.target.classList.add("is-in");
      io.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  items.forEach(function (el) { io.observe(el); });
})();

// Swap the YouTube thumbnail for the real player on click.
document.querySelectorAll("[data-yt]").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + link.dataset.yt + "?autoplay=1&rel=0";
    iframe.title = link.getAttribute("aria-label") || "YouTube video";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    link.replaceWith(iframe);
  });
});
