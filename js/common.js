document.getElementById("yesBtn").addEventListener("click", function () {
  window.location.href = "main.html";
});

document.getElementById("noBtn").addEventListener("click", function () {
  alert("18歳未満の方は閲覧できません。");
});

  const cursor = document.getElementById('fake-cursor');
  document.body.style.cursor = "none"; // デフォルトカーソル非表示

  document.addEventListener('mousemove', function (e) {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
  });