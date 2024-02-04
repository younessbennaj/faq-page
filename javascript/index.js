const triggers = document.querySelectorAll(".accordion-trigger");

triggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    const accordionItem = event.currentTarget.parentNode.parentNode;
    accordionItem.classList.toggle("active");
  });
});
