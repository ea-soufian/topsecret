onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

document.getElementById('no-btn').addEventListener('mouseover', function(e) {
  const noBtn = e.target;
  const noBtnRect = noBtn.getBoundingClientRect();
  const newX = Math.random() * (window.innerWidth - noBtnRect.width);
  const newY = Math.random() * (window.innerHeight - noBtnRect.height);
  noBtn.style.transform = `translate(${newX}px, ${newY}px)`;
});

document.getElementById('yes-btn').addEventListener('click', function() {
  document.querySelector('.valentine-question').style.display = 'none';
});
