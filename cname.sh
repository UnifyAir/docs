git stash
git checkout gh-pages
echo "docs.unifyair.com" >CNAME
git add CNAME
git commit -m "Create CNAME"
git push origin
git checkout -
git unstash
