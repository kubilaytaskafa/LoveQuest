document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const musicToggle = document.getElementById("musicToggle");
  const bgMusic = document.getElementById("bgMusic");

  // Müzik kontrolü
  musicToggle.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicToggle.classList.remove("paused");
    } else {
      bgMusic.pause();
      musicToggle.classList.add("paused");
    }
  });

  // Sayfa yüklendiğinde müziği başlat
  bgMusic.play().catch(() => {
    musicToggle.classList.add("paused");
  });

  noBtn.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  });

  // No butonunun href özelliğini engellemek için
  noBtn.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
