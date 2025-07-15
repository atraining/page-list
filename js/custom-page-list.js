document.addEventListener("DOMContentLoaded", function () {
  const current = document.querySelector(".page-list .current_page_item");

  if (current) {
    let parent = current.parentElement;
    while (parent && parent.tagName !== "UL") {
      if (parent.tagName === "LI") {
        parent.classList.add("open");
      }
      parent = parent.parentElement;
    }
  }

  // Add toggle to li elements with children
  document.querySelectorAll(".page-list li").forEach(li => {
    if (li.querySelector("ul")) {
      li.classList.add("has-children");
      li.querySelector("a").addEventListener("click", function (e) {
        // Optional: allow toggle only if not current
        if (!li.classList.contains("current_page_item")) {
          li.classList.toggle("open");
          e.preventDefault(); // prevent navigation on click if desired
        }
      });
    }
  });
});
