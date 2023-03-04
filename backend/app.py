import numpy as np
import pandas as pd
from flask import Flask, request, jsonify, render_template
import pickle
from flask_cors import CORS
import random
import difflib
import json
app = Flask(__name__)
CORS(app)

model = pickle.load(open('backend/model/similar.pkl', 'rb'))
df = pd.read_csv('backend/travel_data_final.csv')


@app.route("/")
def home():
    return "<h1>Server is live</h1>"

@app.route('/predict',methods=['POST'])
# @crossdomain(origin='*')
def predict():
    print('hello')
    try:
        request_data = request.get_json()
        print(request_data)
    except Exception as er:
        print("error")
        print(er)
    print("data: ", request_data)
    close_match =  difflib.get_close_matches(request_data['quote'], df['travel_city'].tolist())
    # print(close_match)
    close = close_match[0]
    id_of_quote = df[df['travel_city'] == close]['user_id'].values[0]
    similarity_score = list(enumerate(model[id_of_quote]))
    # print(similarity_score)
    sorted_sim_quote = sorted(similarity_score, key=lambda x: x[1], reverse=True)
    return_list = []
    i = 1
    for k in sorted_sim_quote:
        if(i == 0):
            i +=1
            continue
        id = k[0]
        try:
            quote_from_id = df[df['user_id'] == int(id)]['name'].values[0]
            print(quote_from_id)
            if(i == 6):
                break
            i += 1
            return_list.append(quote_from_id)
        except:
            pass
        # except:
        #     pass
    #print(return_list)
    print("jsonify")
    #print(jsonify(return_list))

    # return jsonify(return_list)
    return json.dumps(return_list)

if __name__ == "__main__":
    app.run(debug = True)