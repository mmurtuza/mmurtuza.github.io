Here’s a clean Bash Cheatsheet in Markdown format:

# 🐚 Bash Cheatsheet

## Basics
```bash
# Run a script
bash script.sh

# Make script executable
chmod +x script.sh

# Run with shebang
./script.sh


---

Variables

# Assign variable
NAME="Murtuza"

# Access variable
echo $NAME

# Read input
read USER_INPUT
echo "You typed: $USER_INPUT"

# Command substitution
DATE=$(date)
echo "Today: $DATE"


---

Conditionals

if [ "$NAME" == "Murtuza" ]; then
  echo "Hello!"
elif [ -z "$NAME" ]; then
  echo "Empty"
else
  echo "Who are you?"
fi


---

Loops

# For loop
for i in {1..5}; do
  echo "Number $i"
done

# While loop
count=1
while [ $count -le 5 ]; do
  echo "Count $count"
  ((count++))
done

# Until loop
n=1
until [ $n -gt 5 ]; do
  echo "n = $n"
  ((n++))
done


---

Functions

my_func() {
  echo "Hello $1"
}

my_func "Murtuza"


---

File Operations

# List files
ls -l

# Copy
cp file1.txt file2.txt

# Move / Rename
mv file.txt newfile.txt

# Delete
rm file.txt


---

Permissions

# Add execute permission
chmod +x script.sh

# Change owner
chown user:user file.txt


---

Text Processing

cat file.txt
grep "pattern" file.txt
sort file.txt
uniq file.txt
wc -l file.txt


---

Useful Shortcuts

# Clear terminal
clear

# Print working directory
pwd

# Change directory
cd /path/to/dir

# Previous directory
cd -

# Home directory
cd ~


---

Special Variables

$0   # Script name
$1   # First argument
$#   # Number of arguments
$@   # All arguments
$?   # Exit status of last command
$$   # Process ID


---

Operators

# Arithmetic
$((a + b))
$((a - b))
$((a * b))
$((a / b))

# Strings
[ "$a" == "$b" ]   # Equal
[ "$a" != "$b" ]   # Not equal
[ -z "$a" ]        # Empty
[ -n "$a" ]        # Not empty


---

File Tests

[ -e file ]   # Exists
[ -f file ]   # Regular file
[ -d dir ]    # Directory
[ -r file ]   # Readable
[ -w file ]   # Writable
[ -x file ]   # Executable


---

Process Management

ps aux
top
kill -9 PID


---

Networking

ping google.com
curl http://example.com
wget http://example.com/file.txt


---

✅ Keep this as a quick reference whenever working with Bash scripts or the Linux terminal.

Do you want me to make a **one-page ultra-condensed version** (only the most common commands) or keep it detailed like this?

