const menuBtn = document.querySelector(".menu-btn");
const overlay = document.querySelector(".screen-overlay");

function toggleSidebar() {
  document.body.classList.toggle("sidebar-hidden");
}
menuBtn.addEventListener("click", function (e) {
  e.preventDefault();
  toggleSidebar();
});
overlay.addEventListener("click", function () {
  toggleSidebar();
});

const chipsContainer = document.querySelector(".filter-chips-row");

chipsContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("filter-chip")) {
    return;
  }
  const allChips = document.querySelectorAll(".filter-chip");
  for (let i = 0; i < allChips.length; i++) {
    allChips[i].classList.remove("active");
  }
  e.target.classList.add("active");
  const category = e.target.textContent.trim().toLowerCase();
  const allCards = document.querySelectorAll(".video-card");
  for (let i = 0; i < allCards.length; i++) {
    const card = allCards[i];
    const cardCategory = card.getAttribute("data-category");
    if (category === "all") {
      card.style.display = "block";
    } else if (cardCategory === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
});

const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("input", function (e) {
  const term = e.target.value.trim().toLowerCase();
  const allCards = document.querySelectorAll(".video-card");
  for (let i = 0; i < allCards.length; i++) {
    const card = allCards[i];
    const title = card.querySelector(".video-title").textContent.toLowerCase();
    const channel = card.querySelector(".channel-name").textContent.toLowerCase();
    if (title.includes(term) || channel.includes(term)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
});
