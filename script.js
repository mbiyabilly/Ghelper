// ===============================
// SEARCH FUNCTION
// ===============================

const input = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
const noResults = document.getElementById("noResults");
const searchTerm = document.getElementById("searchTerm");

function filterCards() {

  const query = input.value.toLowerCase().trim();
  const activeTab = document.querySelector(".tab.active").dataset.cat;

  let visibleCards = 0;

  cards.forEach(card => {

    const name = card.dataset.name || "";
    const category = card.dataset.cat || "";

    const matchSearch =
      !query ||
      name.includes(query) ||
      card.innerText.toLowerCase().includes(query);

    const matchCategory =
      activeTab === "all" ||
      category === activeTab;

    if (matchSearch && matchCategory) {
      card.style.display = "";
      visibleCards++;
    } else {
      card.style.display = "none";
    }

  });

  if (visibleCards === 0) {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }

  searchTerm.textContent = input.value;
}

input.addEventListener("input", filterCards);


// ===============================
// KEYBOARD SHORTCUT (CTRL + K)
// ===============================

document.addEventListener("keydown", function(e) {

  if ((e.ctrlKey || e.metaKey) && e.key === "k") {

    e.preventDefault();

    input.focus();

  }

});


// ===============================
// CATEGORY FILTER TABS
// ===============================

const tabsContainer = document.getElementById("filterTabs");

tabsContainer.addEventListener("click", function(e) {

  if (!e.target.classList.contains("tab")) return;

  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });

  e.target.classList.add("active");

  filterCards();

});


// ===============================
// FAQ ACCORDION
// ===============================

const faqQuestions = document.querySelectorAll(".faq-q");

faqQuestions.forEach(question => {

  question.addEventListener("click", () => {

    const item = question.parentElement;
    const answer = item.querySelector(".faq-a");

    const alreadyOpen = item.classList.contains("open");

    document.querySelectorAll(".faq-item").forEach(i => {
      i.classList.remove("open");
      i.querySelector(".faq-a").classList.remove("open");
    });

    if (!alreadyOpen) {

      item.classList.add("open");
      answer.classList.add("open");

    }

  });

});