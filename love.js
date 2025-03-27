document.addEventListener("DOMContentLoaded", () => {
  const heartsContainer = document.getElementById("hearts-container");
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

  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";

    // Rastgele başlangıç pozisyonu (alt kısımdan)
    const startX = Math.random() * window.innerWidth;
    heart.style.left = startX + "px";
    heart.style.top = window.innerHeight + "px";

    // Animasyon süresi ve gecikmesi
    const duration = 2 + Math.random() * 2;
    const delay = Math.random() * 0.5;

    heart.style.animation = `float ${duration}s ease-in-out ${delay}s`;
    heartsContainer.appendChild(heart);

    // Animasyon bittiğinde kalbi kaldır
    setTimeout(() => {
      heart.remove();
    }, (duration + delay) * 1000);
  }

  // Her 200ms'de bir yeni kalp oluştur
  setInterval(createHeart, 200);

  // Başlangıçta 10 kalp oluştur
  for (let i = 0; i < 10; i++) {
    setTimeout(createHeart, i * 100);
  }
});
