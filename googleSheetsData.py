
import gspread
from oauth2client.service_account import ServiceAccountCredentials
import pprint
import json


def get_google_data():
    pp = pprint.PrettyPrinter()

    scope = ['https://spreadsheets.google.com/feeds',
             'https://www.googleapis.com/auth/drive']
    creds = ServiceAccountCredentials.from_json_keyfile_name(
        'credentials.json', scope)
    client = gspread.authorize(creds)

    sheet = client.open('Software_Engineer_Applications').sheet1

    # get_records_company_name = sheet.col_values(1)
    # get_records_date = sheet.col_values(2)
    # get_records_location = sheet.col_values(3)
    # get_records_interview = sheet.col_values(4)
    # get_records_notes = sheet.col_values(5)
    # # get_rows = sheet.row_values()
    get_all_values = sheet.get_all_values()

    return get_all_values