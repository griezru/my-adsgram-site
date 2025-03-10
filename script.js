// ثبت نام کاربر و ذخیره اطلاعات
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    // ارسال درخواست به سرور برای ثبت‌نام
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById("register").style.display = "none";
            document.getElementById("prediction").style.display = "block";
        }
    });
});

// ارسال پیش‌بینی‌ها
document.getElementById("predictionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const game1 = document.getElementById("game1").value;
    const game2 = document.getElementById("game2").value;

    // ارسال پیش‌بینی‌ها به سرور
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ game1, game2 })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("پیش‌بینی شما ثبت شد!");
        }
    });
});
