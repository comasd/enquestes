#!/bin/sh

# Start web server

echo "starting local web server and app on port 8000"

forever stopall
forever start app.js

protractor test/conf.js