from lxml import html
import requests
import re
import json

class Game:
	'common base class for all games'
	gamecount = 0

	def __init__ (self, gamenr, hometeam, awayteam, winner, score):
		self.gamenr = gamenr
		self.hometeam = hometeam
		self.awayteam = awayteam
		self.winner = winner
		self.score = score
		Game.gamecount += 1		
		

#Change page to 553 like below
page = requests.get('http://www.svt.se/svttext/tv/pages/551.html')

#page = requests.get('http://www.svt.se/svttext/tv/pages/553.html')

tree = html.fromstring(page.content)

#TODO: change to from "C" to "G" for Europa
games = tree.xpath('//span[@class="C"]/text()');

print(games);

aList = [];

#removing all whitespaces
for game in games :
	if game != ' ':
		game = game.strip()
		aList.append(game) 
		#print(game)
	

counter = 0
newList = []

index = 0
test = True
while index < len(aList) and test :

	#this should be done in another way probably
	temp = ""
	gamenr = ''
	hometeam = ''
	awayteam = ''
	winner = ''
	score = ''
	tester = ''

	if index + 10 > len(aList): 
		print("")
	elif aList[index].rfind('.') != -1:
		temp = aList[index]
		gamenr = temp
		tester = temp.replace('.', '')
	

		index = index + 1
		if aList[index].rfind('-') == -1 : 
			hometeam = aList[index]
			index = index + 1
			awayteam = aList[index]
			awayteam = awayteam[1:]
		
		else :
			twoTeams = aList[index].split('-')
			hometeam = twoTeams[0]
			awayteam = twoTeams[1]

		index = index + 1
		#TODO: this should be split up
		score = aList[index]
		index = index + 1
		winner = aList[index]
				
		game = Game(gamenr, hometeam, awayteam, winner, score)

		newList.append(game)

		if int(float(tester)) == int(13) : 
			test = False

	index = index + 1

#TODO: must add utf-8!!
with open("stryk.json", "w") as outfile:
	jsonF = json.dump([ob.__dict__ for ob in newList], outfile)










