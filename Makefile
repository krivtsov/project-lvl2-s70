install:
	npm install

start:
	npm run babel-node -- src/bin/gendiff.js

publish:
	npm publish

build:
	npm run build

make lint:
	npm run eslint -- src
