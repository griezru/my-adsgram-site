// ارسال پیش‌بینی‌ها
document.getElementById("predictionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const game1 = document.getElementById("game1").value;
    const game2 = document.getElementById("game2").value;

    // ایجاد شناسه تصادفی برای هر کاربر
    const userId = Math.floor(Math.random() * 1000000);  // شناسه تصادفی

    // ارسال پیش‌بینی‌ها به سرور
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, game1, game2 })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById("prediction").style.display = "none";
            document.getElementById("message").style.display = "block";
        }
    });
});
