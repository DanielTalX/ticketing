npm version  --no-git-tag-version patch
npm config set registry http:/registryURL/repository/npm-packgeName/
npm-cli-login -u username  -p password -e email -r registry http:/registryURL/repository/npm-packgeName/
npm publish
npm config set registry registry http:/registryURL/repository/npm-usualPackgeName/
git commit -m "publish via auto script" --all
git push