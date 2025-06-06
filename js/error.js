document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('sakura-container');

  function createSakura() {
    const sakura = document.createElement('div');
    sakura.classList.add('sakura');

    const size = Math.random() * 16 + 8; // 8px〜24px
    sakura.style.width = `${size}px`;
    sakura.style.height = `${size}px`;
    sakura.style.left = `${Math.random() * 100}vw`;
    sakura.style.animationDuration = `${5 + Math.random() * 5}s`;

    container.appendChild(sakura);

    // 花びらは一定時間後に削除
    setTimeout(() => {
      sakura.remove();
    }, 10000);
  }

  // 一定間隔で花びらを降らせる
  setInterval(createSakura, 300);
});
