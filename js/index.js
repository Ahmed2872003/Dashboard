/*START OF yearly target*/
let spanBoxes = document.querySelectorAll(".percent div");
setTimeout(() => {
  spanBoxes.forEach((e) => {
    e.style.width = e.getAttribute("data-width");
  });
}, 100);
setTimeout(() => {
  spanBoxes.forEach((e) => {
    e.parentNode.classList.add("appear");
  });
}, 400);
/*END OFyearly target*/
