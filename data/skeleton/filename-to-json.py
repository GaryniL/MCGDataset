#!/usr/bin/env python
# coding=UTF-8

import os,sys,json

jsondict = {'Files':[1]}
filelist = []

for path, subdirs, files in os.walk(os.getcwd()):
    for name in files:
        # print os.path.join(path, name)
        # print name
		if name.endswith('.txt'):
			filelist.append(name)
print filelist
jsondict['Files'] = filelist
with open("test.json", "w") as outfile:
    json.dump(jsondict, outfile, indent=4)