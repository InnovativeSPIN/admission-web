import os
import subprocess

project_path = "C:/Users/91877/Desktop/admission-web"
os.chdir(project_path)

# Install dependencies if node_modules not found
if not os.path.exists("node_modules"):
    subprocess.run(["npm", "install"], shell=True)

# Run the Vite development server
subprocess.run(["npm", "run", "dev"], shell=True)
