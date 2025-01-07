DEPLOY_BRANCH="gh-pages"
git stash
git fetch gh-pages
git checkout gh-pages
git pull origin gh-pages
echo "docs.unifyair.com" >CNAME
git add CNAME
git commit -m "Create CNAME"
git push origin
git branch -D gh-pages
git checkout -
git stash pop
