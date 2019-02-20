
dist/popup.js:
	@browserify -r ./popup.js > dist/popup.js

clean:
	@rm dist/popup.js