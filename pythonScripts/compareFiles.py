import os
import pymysql
# --- Database connection ---
db = pymysql.connect(
    host="localhost",      # your DB host
    user="sympnp_sympadmin",  # your DB user
    password="sympadmin@123",
    database="sympnp_sympnp2025"
)

cursor = db.cursor()

# --- Fetch filenames from your table ---
cursor.execute("SELECT Filename FROM contributions where status='submitted'")  # assuming you have id, filename columns
rows = cursor.fetchall()

# --- Directory where files are stored ---
directory = "Uploads"

# --- Check existence ---
#for row in rows:
existCounter=0;
notExistCounter=0;
total=0
notExistedFiles=[]
for (filename,) in rows:
    total += 1
    #filename = row
    file_path = os.path.join(directory, filename)

    if os.path.exists(file_path):
        print(f"{filename} ✅ exists")
        existCounter += 1
        # (Optional) Update DB status
        # cursor.execute("UPDATE your_table SET file_status='Exists' WHERE id=%s", (file_id,))
    else:
        print(f"{filename} ❌ missing")
        notExistCounter +=1
        notExistedFiles.append(filename)
        # (Optional) Update DB status
        # cursor.execute("UPDATE your_table SET file_status='Missing' WHERE id=%s", (file_id,))

# Commit updates if you enabled them
# db.commit()
print("===============================")
print("Total files : ", total)
print("Existed files : ",existCounter)
print("Non Existed files : ",notExistCounter)
print("==============================")
for filename in notExistedFiles:
    print(filename)
cursor.close()
db.close()

