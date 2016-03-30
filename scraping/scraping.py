from lxml import html
import requests
import re
import csv

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
		

page = 	requests.get('http://www.svt.se/svttext/tvu/pages/551.html')

tree = html.fromstring(page.content)

#print(tree)


games = tree.xpath('//span[@class="C"]/text()');

#print(games);

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
	temp = "";
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
			temp = temp + aList[index]
			hometeam = aList[index]
			index = index + 1
			temp = temp + aList[index]
			awayteam = aList[index]
		
		else :
			temp = temp + aList[index]
			kalle = aList[index].split('-')
			hometeam = kalle[0]
			awayteam = kalle[1]

		index = index + 1
		temp = temp + aList[index]
		score = aList[index]
		index = index + 1
		temp = temp + aList[index]
		winner = aList[index]
				
		game = Game(gamenr, hometeam, awayteam, winner, score)

		newList.append(game)

		if int(float(tester)) == int(13) : 
			test = False

	index = index + 1

index = 0

f = open('stryk.csv', 'wt')
try:
    writer = csv.writer(f)
    writer.writerow( ('gamenr', 'hometeam', 'awayteam', 'score', 'winner') )
    for i in range(13):
        writer.writerow( (newList[i].gamenr, newList[i].hometeam,  newList[i].awayteam,  newList[i].score,  newList[i].winner) )
finally:
    f.close()






