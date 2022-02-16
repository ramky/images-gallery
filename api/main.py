from flask import Flask, request
from dotenv import load_dotenv
import os
import requests

UNSPASH_URL = "https://api.unsplash.com/photos/random"
load_dotenv(dotenv_path="./.env.local")
UNSPLASH_KEY = os.environ.get("REACT_APP_UNSPLASH_ACCESS_KEY", "")

if not UNSPLASH_KEY:
    raise EnvironmentError("Mising UNSPLASH API KEY required for API call")

app = Flask(__name__)


@app.route("/new-image")
def new_image():
    search_term = request.args.get("query")
    headers = {"Authorization": "Client-ID " + UNSPLASH_KEY, "Accept-Version": "v1"}
    params = {"query": search_term}
    response = requests.get(url=UNSPASH_URL, headers=headers, params=params)
    data = response.json()
    return data


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000")
