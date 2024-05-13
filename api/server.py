from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mongoengine import MongoEngine
import mongoengine as me
import datetime
from dotenv import load_dotenv
import os
import json
import sqlite3

load_dotenv()
memo_retrieve_url = os.getenv("MEMO_RETRIEVE_URL")
memo_store_url = os.getenv("MEMO_STORE_URL")
memo_remove_url = os.getenv("MEMO_REMOVE_URL")

x = datetime.datetime.now()

app = Flask(__name__)
CORS(app)

#DB configuration:
conn = sqlite3.connect("notes.db")
cur = conn.cursor()
cur.execute('''CREATE TABLE IF NOT EXIST
            notes(title, description, category)''')

memo_list = []
@app.route(memo_store_url, methods=['POST'])
def store_memo():
    try:
        new_data = request.get_json()
        memo_list.append(new_data)
        #temporarily storing data as text files
        adjacent_folder_path = os.path.join(os.path.dirname(__file__), 'memo-storage')
        os.makedirs(adjacent_folder_path, exist_ok=True)


        json_file_path = os.path.join(adjacent_folder_path, 'data.json')
        with open (json_file_path, 'w') as json_file:
            json.dump(memo_list, json_file, indent=2)
        print(f"JSON content written to: {json_file_path}")

        #adding to db
        cur.execute(f'''
                    INSERT INTO notes VALUES
                    ({new_data["title"], new_data["description"], new_data["category"]})''')
        conn.commit()
        #-----------------------------------------------------------------
        return jsonify(new_data)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route(memo_retrieve_url, methods=['GET'])
def get_memo():
    try:
        folder_path = os.path.join(os.path.dirname(__file__), 'memo-storage')
        json_file_path = os.path.join(folder_path, 'data.json')
        if os.path.exists(json_file_path):
            with open(json_file_path, 'r') as json_file:
                json_data = json.load(json_file)
            print("Retrieved JSON data")
            return jsonify(json_data)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route(memo_remove_url, methods=['PATCH'])
def delete_memo(item_id):
    try:
        removing_data = request.get_json()
        print(f"index of todo data to be removed: {removing_data}")
        folder_path = os.path.join(os.path.dirname(__file__), 'memo-storage')
        json_file_path = os.path.join(folder_path, 'data.json')

        if os.path.exists(json_file_path):
            with open(json_file_path, 'r') as f:
                data = json.load(f)
                    
            removed_item = data.pop(item_id)
            with open(json_file_path, 'w') as f:
                json.dump(data, f)
            return jsonify({"message": f"Item with ID {item_id} removed", "removedI-tem": removed_item})
            
            # if removing_data < 0 or removing_data >= len(data):
            #     raise ValueError("To-Do storage index out of range")
            # del data[removing_data]
            # with open(json_file_path, 'w') as f:
            #     json.dump(data, f)
            #     return jsonify(data)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)