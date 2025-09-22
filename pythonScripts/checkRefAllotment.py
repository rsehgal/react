import pymysql
from pymysql.cursors import DictCursor
import re
# Connect to MySQL
db = pymysql.connect(
    host="localhost",      # your DB host
    user="sympnp_sympadmin",  # your DB user
    password="sympadmin@123",
    database="sympnp_sympnp2025",
    cursorclass=DictCursor
)
cursor = db.cursor()

# Step 1: Fetch referees
#cursor.execute("SELECT * FROM refereeList where uname='RRRR'")
cursor.execute("SELECT * FROM refereeList")
referees = cursor.fetchall()
#for ref in referees:
#    print(ref['refereeName'])

# Step 2: Fetch papers
#cursor.execute("SELECT * FROM contributions WHERE status <> 'Deleted' and uname='rrsahu'")
#cursor.execute("SELECT * FROM contributions WHERE status <> 'Deleted'")
#papers = cursor.fetchall()

#print(papers)

# Step 3: Check substrings
counter=0
for referee in referees:
    referee_name  = referee["refereeName"]
    referee_email = referee["refereeEmail"]
    referee_uname = referee["uname"]

    # normalize referee name: remove punctuation (like "Dr."), collapse to lowercase
    ref_name_clean = re.sub(r'[^\w\s]', '', referee_name).lower()
    ref_email_clean = re.sub(r'[^\w\s]', '', referee_email).lower()

    query=f"SELECT * FROM contributions WHERE status <> 'Deleted' and refereeList like '%{referee_uname}%'"
    #print(query)
    #cursor.execute("SELECT * FROM contributions WHERE status <> 'Deleted' and refereeList like '%HK%'")
    cursor.execute(query)
    papers = cursor.fetchall()
    
    
    for paper in papers:
        # Split and strip values, ignore empty strings
        #first_names = [f.strip() for f in paper["AuthorFirstNamesList"].split(";") if f.strip()]
        first_names = [n.strip() for n in re.split(r'[;,]', paper["AuthorFirstNamesList"]) if n.strip()]
        #last_names  = [l.strip() for l in paper["AuthorLastNamesList"].split(";") if l.strip()]
        last_names = [n.strip() for n in re.split(r'[;,]', paper["AuthorLastNamesList"]) if n.strip()]
        #emails      = [e.strip() for e in paper["AuthorEmailsList"].split(";") if e.strip()]
        emails = [n.strip() for n in re.split(r'[;,]', paper["AuthorEmailsList"]) if n.strip()]
    
        #print(first_names)
        #print(last_names)
        #print(emails)
    
        filename = paper['Filename']
    
        #print(ref_name_clean,ref_email_clean)
            
        match_fname = any(len(ln) > 3 and re.sub(r'[^\w\s]', '', ln).lower() in ref_name_clean for ln in first_names)
        match_lname = any(len(ln) > 3 and re.sub(r'[^\w\s]', '', ln).lower() in ref_name_clean for ln in last_names)
        match_email = any(len(ln) > 3 and re.sub(r'[^\w\s]', '', ln).lower() in ref_email_clean for ln in emails)
        #print(match_lname)
    
        '''
        if match_fname:
            counter += 1
            print(f"→ ({counter})  Filename: {filename} : Matches Referee First Name {referee['uname']} ({referee_name})")
    
        if match_lname:
            counter += 1
            print(f"→({counter})  Filename: {filename} : Matches Referee Last Name {referee['uname']} ({referee_name})")
        '''
        if match_email :
            counter += 1
            print(f"→ ({counter}) Filename: {filename} : Matches Referee Email {referee['uname']} ({referee_name})")
    
