deploying with gh-pages branch.
1. run `npm run build` in main branch 
2. `git checkout gh-pages` 
3. delete everything except for the build folder. move all the contents from inside build out to the main level (basically delete the build/ level)
4. git add, commit, push