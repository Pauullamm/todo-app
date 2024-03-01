from flask import Flask, request, jsonify
from flask_cors import CORS
import datetime

x = datetime.datetime.now()

app = Flask(__name__)
CORS(app)

memo_list = []
@app.route('/memo-data', methods=['POST'])
def store_memo():
    try:
        new_data = request.get_json()
        memo_list.append(new_data)
        print(memo_list)
        return jsonify(new_data)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    


if __name__ == '__main__':
    app.run(debug=True)