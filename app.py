from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)

# اتصال به پایگاه داده SQLite
def get_db():
    conn = sqlite3.connect('database.db')
    return conn

# صفحه اصلی
@app.route('/')
def index():
    return render_template('index.html')

# ثبت نام کاربر
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data['username']
    email = data['email']

    # ذخیره اطلاعات کاربر در پایگاه داده
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('INSERT INTO users (username, email) VALUES (?, ?)', (username, email))
    conn.commit()

    return jsonify({'success': True})

# ثبت پیش‌بینی
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    game1 = data['game1']
    game2 = data['game2']

    # ثبت پیش‌بینی‌ها در پایگاه داده
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('INSERT INTO predictions (game1, game2) VALUES (?, ?)', (game1, game2))
    conn.commit()

    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True)
