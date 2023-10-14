import requests
from bs4 import BeautifulSoup
import json
import re
base_url = 'https://www.a2gov.org'

url = '/departments/Parks-Recreation/parks-places/Pages/default.aspx'  

response = requests.get(base_url+url)
park_list=[]

if response.status_code == 200:

    soup = BeautifulSoup(response.text, 'html.parser')

    links = soup.find_all('a', href=lambda href: href and '/departments/Parks-Recreation/parks-places/Pages'.lower() in href.lower())

    for link in links:
        park_name = link.find('strong').get_text(strip=True)
        park_link = link['href']
        park_address = link.find(class_='wf_tab-address').get_text(strip=True).replace("\u200b","")
        id = re.search(r'/([^/]+)\.aspx', park_link)

        park_info = {
            'parkName': park_name,
            'link': park_link,
            'parkAddress': park_address,
            'id':id.group(1).lower()
        }
        park_list.append(park_info)
  
else:
    print(f"Failed to retrieve the page. Status code: {response.status_code}")


for link in park_list:
    url = base_url+link["link"]
    print(url)
    response = requests.get(url)
    if response.status_code == 200:
         soup=BeautifulSoup(response.text,"html.parser")
         
         link["parkName"] = soup.find("h1",class_="heading1-fira").get_text(strip=True).replace("\u00a0","")
         
         link["amenities"]  = [i.get_text(strip=True).replace("\u200b","") for i in soup.find_all('p',class_="body-text fira")][1:]
    print("done")     

with open('./python-scripts/temp-folder/parks.json','w')  as outfile:
    json.dump(park_list,outfile)

print("finish")