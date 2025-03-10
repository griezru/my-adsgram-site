import sqlite3

# ایجاد پایگاه داده و جداول
def create_db():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    cursor.execute('''CREATE TABLE IF NOT EXISTS predictions (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        user_id INTEGER NOT NULL,
                        game1 TEXT NOT NULL,
                        game2 TEXT NOT NULL)''')

    conn.commit()
    conn.close()

create_db()
