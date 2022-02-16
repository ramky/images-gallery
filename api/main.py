from flask import Flask, request
import os
import requests

UNSPASH_URL = "https://api.unsplash.com/photos/random"
UNSPLASH_KEY = os.getenv("REACT_APP_UNSPLASH_ACCESS_KEY")

app = Flask(__name__)


@app.route("/new-image")
def new_image():
    search_term = request.args.get("query")
    headers = {"Authorization": "Client-ID " + UNSPLASH_KEY, "Accept-Version": "v1"}
    print(headers)
    params = {"query": search_term}
    response = requests.get(url=UNSPASH_URL, headers=headers, params=params)
    data = response.json()
    return data


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000")
