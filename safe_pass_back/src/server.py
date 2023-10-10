from flask import Flask

app = Flask(__name__)

# Member Api routes
@app.route('/members')
def get_members():
    return {"message": "Get all members"}

@app.route('/')
def index():
    return "<h1>Hello World!</h1>"


if __name__ == '__main__':
    app.run(debug=True)