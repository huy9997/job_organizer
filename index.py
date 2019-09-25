from flask import Flask, jsonify
import gspread
from oauth2client.service_account import ServiceAccountCredentials
import pprint

app = Flask(__name__)
@app.route('/')
def hello_world():
    return jsonify("get_row")

@app.route('/googleData')
def googleSheetsData():
    scope = ['https://spreadsheets.google.com/feeds',
             'https://www.googleapis.com/auth/drive']
    creds = ServiceAccountCredentials.from_json_keyfile_name(
        'credentials.json', scope)
    client = gspread.authorize(creds)

    sheet = client.open('Software_Engineer_Applications').sheet1
    # get_all_values = sheet.get_all_values()
    get_row = sheet.row_values(2)
    return jsonify(get_row)
if __name__ == '__main__':
    app.run()
