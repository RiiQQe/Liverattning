from lxml import html
import requests


page = 	requests.get('http://www.svt.se/svttext/tvu/pages/551.html')

tree = html.fromstring(page.content)

print(tree)


games = tree.xpath('//span[@class="C"]/text()');

print(games);

aList = [];

#removing all whitespaces
for game in games :
	if game == ' ':
		print("removing");
	
	else : 	
		game = game.strip()
		aList.append(game) 
	


for index in range(len(aList)):
   print(aList[index])



#print(aList)
#print(games);
	
