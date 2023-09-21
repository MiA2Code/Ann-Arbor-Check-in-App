import requests
from bs4 import BeautifulSoup

base_url = 'https://www.a2gov.org'
# Define the URL to crawl
url = '/departments/Parks-Recreation/parks-places/Pages/default.aspx'  # Replace with your target URL

# Send an HTTP GET request to the URL
response = requests.get(base_url+url)
park_list=[]
# Check if the request was successful
if response.status_code == 200:
    # Parse the HTML content of the page
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find all <a> elements with href attribute containing '/departments/Parks-Recreation/parks-places/Pages/'
    links = soup.find_all('a', href=lambda href: href and '/departments/Parks-Recreation/parks-places/Pages/' in href)

    # Print the found links
    for link in links:
        park_name = link.find('strong').get_text(strip=True)
        park_link = link['href']
        park_address = link.find(class_='wf_tab-address').get_text(strip=True)

        # Create a dictionary for each park and append it to the list
        park_info = {
            'parkName': park_name,
            'link': park_link,
            'parkAddress': park_address
        }
        park_list.append(park_info)
  
else:
    print(f"Failed to retrieve the page. Status code: {response.status_code}")

print(park_list)

# for link in links_list:
#     parks.append()