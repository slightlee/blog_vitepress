#! /bin/sh

git add .
read -r -p "input commit message: " msg
git commit -m "$msg"
read -r -p "input push branch: " branch
git push origin "$branch"
