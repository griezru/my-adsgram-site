document.getElementById("predictionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // جلوگیری از ارسال فرم به صورت پیش‌فرض

    const userId = Date.now(); // استفاده از زمان فعلی به عنوان شناسه کاربر (شما می‌توانید این بخش را به دلخواه تغییر دهید)
    const game1 = document.getElementById("game1").value;
    const game2 = document.getElementById("game2").value;

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
            // نمایش پیام موفقیت
            document.getElementById("message").style.display = "block";
        } else {
            alert("مشکلی در ثبت پیش‌بینی به وجود آمد!");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("خطا در ارسال پیش‌بینی.");
    });
});
