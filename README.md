<p align="center">
Minimal changes to <a href=https://github.com/AngularClass/angular2-webpack-starter/> 
so that I can more easily keep up with new releases.
Using Stylus/Rupture and Pug instead of CSS and HTML.  
   <a href=http://stylus-lang.com/>  
   <a href=https://github.com/jescalan/rupture/>
   <a href=https://github.com/pugjs/pug/>
so far I have done 01-04 of chapter 7, click the "Projects" tab
(the other tabs are from the webpack starter)
</p>

# clone 
git clone https://github.com/invegat/angutype

# change directory 
cd angutype

# install with npm
npm install

# start the server
npm start

# use Hot Module Replacement
npm run server:dev:hmr

AOT issues with Forms <a href=https://github.com/angular/angular/issues/11709/>
and also private fields and procedures means no "build:aot" for now.  This version
is configured for Stylus and Pug to work with "build:aot"

