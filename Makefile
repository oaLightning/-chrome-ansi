
dist/content.js:
	@browserify -r ./content.js > dist/content.js

clean:
	@rm dist/content.js