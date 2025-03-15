// extra : execution of "onMouseOver function called --myRights()-- in the footer section"
// let myName = document.getElementById("chToMyRights");

// document.getElementById("try").addEventListener("mouseover", () => {
//     myName.innerHTML = "Abid Al Jamee";

//     myName.style.textDecoration = "underline dotted";
//     myName.style.transition = "all 2s";
// });

// document.getElementById("try").addEventListener("mouseout", () => {
//     myName.innerHTML = "ABID-DownloadCenter";
//     myName.style.textDecoration = "none";
// });   [insert a id="try"]

const openTermsBtn = document.querySelectorAll("[data-terms-target]");
const closeTermsBtn = document.querySelectorAll("[data-close-btn]");
const overlay = document.getElementById("overlay__terms");

openTermsBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const terms = document.querySelector(button.dataset.termsTarget);
    openModal(terms);
  });
});

closeTermsBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const terms = button.closest(".terms");
    closeModal(terms);
  });
});

function openModal(terms) {
  if (terms == null) return;
  terms.classList.add("activeTerms");
  overlay__terms.classList.add("activeOverlay");
}

function closeModal(terms) {
  if (terms == null) return;
  terms.classList.remove("activeTerms");
  overlay__terms.classList.remove("activeOverlay");
}

overlay.addEventListener("click", () => {
  //click outside to close it
  const terms = document.querySelectorAll(".terms.activeTerms");
  terms.forEach((terms) => {
    closeModal(terms);
  });
});

///////////////////////
window.onload = function () {
  /////  on load, terms popup
  document.getElementById("terms__btn").click();
};
