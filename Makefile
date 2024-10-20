install:
	npm ci

link-games:
	chmod +x bin/brain-games.js
	chmod +x bin/brain-calc.js
	chmod +x bin/brain-even.js
	chmod +x bin/brain-gcd.js
	chmod +x bin/brain-prime.js
	chmod +x bin/brain-progression.js
	npm link

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run
	
lint:
	npx eslint .
