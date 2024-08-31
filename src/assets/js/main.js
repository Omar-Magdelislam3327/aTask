document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll('.box');
  const radioButtons = document.querySelectorAll('.radio-input');
  const center = document.querySelector(".cntr");

  boxes.forEach(box => {
    box.addEventListener('click', () => {
      boxes.forEach(border => border.classList.remove('active'));
      radioButtons.forEach(rb => rb.checked = false);
      box.classList.add('active');
      const radioId = box.getAttribute('data-radio');
      document.getElementById(radioId).checked = true;
      center.classList.add('activ');
    });
  });
});
