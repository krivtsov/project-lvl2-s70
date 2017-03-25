install:
	npm install

start:
	npm run babel-node -- 'src/bin/gendiff.js' 1 2

publish:
	npm publish

build:
	npm run build

lint:
	npm run eslint -- src __tests__

test:
	npm t
