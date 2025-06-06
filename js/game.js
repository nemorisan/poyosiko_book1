const cursor = document.getElementById("game-cursor");
const container = document.getElementById("taya-container");
const message = document.getElementById("message");
const result = document.getElementById("result");
const timerDisplay = document.getElementById("timer");

let caught = 0;
let timeLeft = 10;
let gameInterval, timerInterval;

// カーソル追従
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// ランダム位置へ動かす
function randomPosition(img) {
    img.style.left = Math.random() * (window.innerWidth - 100) + "px";
    img.style.top = Math.random() * (window.innerHeight - 100) + "px";
}

// たや生成
function createTaya() {
    const img = document.createElement("img");
    img.src = "images/r18check.png";
    img.className = "taya";
    randomPosition(img);
    container.appendChild(img);

    const moveInterval = setInterval(() => randomPosition(img), 800);

    img.addEventListener("click", (e) => {
        container.removeChild(img);
        clearInterval(moveInterval);
        caught++;

        // 吹き出しをクリック位置に表示
        showMessage("ぷゅ！", e.clientX, e.clientY);

        if (caught >= 3) {
            endGame(true);
        }
    });

}

// 吹き出し表示（位置付き）
function showMessage(text, x, y) {
    message.textContent = text;
    message.style.left = x + "px";
    message.style.top = y + "px";
    message.classList.remove("hidden");

    setTimeout(() => {
        message.classList.add("hidden");
    }, 700);
}


// タイマー開始
function startTimer() {
    let timeLeft = 10;

    const countdown = setInterval(() => {
        timeLeft--;
        timer.textContent = `残り時間：${timeLeft}秒`;
        if (timeLeft <= 0) {
            clearInterval(countdown);
            endGame();
        }
    }, 1000);

}

// 結果処理
function endGame(success) {
    clearInterval(timerInterval);
    clearInterval(gameInterval);
    result.textContent = success ? "ゲームクリア！大人になったらまたきてね" : "あそんでくれてありがとうございます";
    result.classList.remove("hidden");
}

// スタート
window.onload = () => {
    for (let i = 0; i < 5; i++) {
        createTaya();
    }
    gameInterval = setInterval(createTaya, 2000);
    startTimer();
};
