from flask import Flask, jsonify, request,abort
from generator.generator import generator
from checker.checker import check_is_password_leaked
from flask_cors import CORS


app = Flask(__name__,static_folder="./static",)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/test',methods=['GET'])
def test():
  selection = ["lower","upper","special","number"]
  password = generator(selection,20)
  return "This is a Random Password with length {} and with {} characters.<br>Password: <h1>{}</h1></br>".format(20,selection,password)

@app.route('/api/gen', methods=['POST'])
def genPass():
  try:
      req = request.get_json()
      selection = req.get('selection')
      length = req.get('length')
      data = {
          "password" : generator(selection,length)
      }
      return jsonify(data)

  except ValueError:
      abort(400)

@app.route('/api/filtered', methods=['POST'])
def checkFiltered():
  try:
      req = request.get_json()
      password = req.get('password')
      data = {
          "filtered" : check_is_password_leaked(password)
      }
      return jsonify(data)

  except ValueError:
      abort(400)


if __name__ == "__main__":
  app.run(port=8080,debug=False)
