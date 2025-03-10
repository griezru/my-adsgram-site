// انتخاب عناصر
const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spinButton');
const resultDiv = document.getElementById('result');

// این تابع گردونه را می‌چرخاند
function spinWheel() {
    // تولید یک عدد تصادفی از 1 تا 10
    const randomDegree = Math.floor(Math.random() * 10) * 36; // هر بخش 36 درجه است
    const randomRotation = randomDegree + 3600; // چرخش بیشتر برای اثر بیشتر

    // چرخاندن گردونه
    wheel.style.transform = `rotate(${randomRotation}deg)`;

    // نمایش نتیجه
    setTimeout(() => {
        const winningNumber = (randomDegree / 36) + 1;
        resultDiv.innerHTML = `عدد برنده: ${winningNumber}`;
    }, 3500); // بعد از 3.5 ثانیه نتیجه نمایش داده می‌شود
}

// اضافه کردن event listener به دکمه
spinButton.addEventListener('click', spinWheel);
