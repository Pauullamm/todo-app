import sqlite3

conn = sqlite3.connect("notes.db")

cur = conn.cursor()
