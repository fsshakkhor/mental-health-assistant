## Initialize Dataset
import json
f = open('intents2.json')
dataset = json.load(f)
mylist = []

## Add Some Depression Data
import yaml

with open("depression.yml", 'r') as stream:
    try:
        ret = yaml.safe_load(stream)

        for lines in ret['conversations']:
            set = {}
            set['tag'] = lines[0].lower()
            set['patterns'] = [lines[0].lower()]
            string = ""
            for i in range(1,len(lines)):
                string = string + lines[i]
            set['responses'] = [string.lower()]

            mylist.append(set)

    except yaml.YAMLError as exc:
        print(exc)

def get_request_response(line):
    array = line.split('->')
    req , res = array[0] , array[1]
    set = {}
    set['tag'] = req.lower()
    set['patterns'] = req.lower()
    set['responses'] = [res.lower()]

    mylist.append(set);

# with open("replika.txt") as stream:
#     lines = stream.readlines()
#     for line in lines:
#         get_request_response(line)

final_json = {}
final_json['intents'] = mylist

json_object = json.dumps(final_json,indent=4)
with open("intents.json", "w") as outfile:
    outfile.write(json_object)