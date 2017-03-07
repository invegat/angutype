
Minimal changes to https://github.com/AngularClass/angular2-webpack-starter
so that I can more easily keep up with new releases.
Using Stylus/Rupture and Pug instead of CSS and HTML.  
   http://stylus-lang.com/
   https://github.com/jescalan/rupture
   https://github.com/pugjs/pug/

So far I have done 01-12 of chapter 7, chapter 8 "product' client/server, and chapter 8 "product' async client/server,
click the "Projects" tab
(the other tabs are from the webpack starter)

___ 

# clone 
git clone https://github.com/invegat/angutype

# change directory 
cd angutype

# install with npm
npm install

# start the server (for chapter 8 client server)
npm start

# use Hot Module Replacement
npm run server:dev:hmr

# use AOT
npm run build:aot

# to build the chapter 8 "product" server first navigate to /src/app/AT/C8/http_websocket_samples/server
# running the client at port 3000 and the server at port 8000, this required [CORS for Express] (https://github.com/expressjs/cors)


# to build the servers 
npm run tsc

# to start a product server 
npm run devRest
#or
npm run restServer

# for hot server replacement (after first buiding and starting the product server)
tsc /w






