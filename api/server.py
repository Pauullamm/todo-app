from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mongoengine import MongoEngine
import mongoengine as me
import datetime
from dotenv import load_dotenv
import os
import json

load_dotenv()
memo_retrieve_url = os.getenv("MEMO_RETRIEVE_URL")
memo_store_url = os.getenv("MEMO_STORE_URL")

x = datetime.datetime.now()

app = Flask(__name__)
CORS(app)

#DB configuration:
# app.config('MONGODB_SETTINGS')  = {
#     "db": "server"
# }

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

if __name__ == '__main__':
    app.run(debug=True)