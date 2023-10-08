from os import system
from flask import Flask, render_template


app = Flask(__name__)

@app.route('/')
def hello_world():
    print('asdj')
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)

system('cls')