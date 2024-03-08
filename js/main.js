// FAQ Accordian

document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");
  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");
    if (!groupHeader) {
      return;
    }
    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");

    //toggle icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    //toggle visiblity of body
    groupBody.classList.toggle("open");

    // close all other FAQ bodies

    const otherGroups = faqContainer.querySelectorAll(".faq-group");
    console.log(otherGroups);
    otherGroups.forEach((otherGroup) => {
      if (otherGroup != group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherIcon = otherGroup.querySelector(".faq-group-header i");

        otherGroupBody.classList.remove("open");
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
  });
});

// Mobile Menu

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const hamburgerButton = document.querySelector(".hamburger-button");

  hamburgerButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
});
