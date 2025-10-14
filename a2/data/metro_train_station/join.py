import pandas as pd
import glob

# grab all CSV files in folder
files = glob.glob("*.csv")

# read and concatenate
df = pd.concat([pd.read_csv(f) for f in files], ignore_index=True)

# write back
df.to_csv("combined.csv", index=False)
