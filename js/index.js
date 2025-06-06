document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const serif = document.querySelector(".serif");
  const buttonContainer = document.querySelector(".button-container");
  const body = document.body;

  noBtn.addEventListener("click", () => {
    // セリフ変更
    serif.textContent = "きみはこどもなんだね、じゃあ僕を捕まえてみて！";

    // ボタン非表示
    buttonContainer.style.display = "none";

    // フェードアウト → game.htmlへ遷移
    setTimeout(() => {
      body.classList.add("fadeout");
    }, 1500);

    setTimeout(() => {
      window.location.href = "game.html";
    }, 2500); // 遷移はアニメ後
  });

  yesBtn.addEventListener("click", () => {
    window.location.href = "main.html"; // 18歳以上なら本編へ
  });
});
