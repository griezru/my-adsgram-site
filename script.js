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
    } else {
        alert("مشکلی در ثبت پیش‌بینی به وجود آمد!");
    }
})
.catch(error => {
    console.error('Error:', error);
    alert("خطا در ارسال پیش‌بینی.");
});
