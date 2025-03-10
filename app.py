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

# ثبت پیش‌بینی
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        user_id = data['userId']
        game1 = data['game1']
        game2 = data['game2']

        # ذخیره پیش‌بینی‌ها در پایگاه داده
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute('INSERT INTO predictions (user_id, game1, game2) VALUES (?, ?, ?)', (user_id, game1, game2))
        conn.commit()
        conn.close()

        return jsonify({'success': True})

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'success': False, 'message': 'خطا در ثبت پیش‌بینی'})

if __name__ == '__main__':
    app.run(debug=True)
