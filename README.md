# angular2-starterkit

Project to start develop with angular2 and TypeScript

Features:  
1. Several components  
2. Basic routing  
3. Example of custom filters(searching, orderBy(asc/desc))     
4. Examples of form validation (custom and built-in).Custom validation is kinda stupid but just for demonstration purpose   
5. Service with (GET, GET:ID, POST, PUT, DELETE) methods     
6. Backend on mongodb    

Usage:  
(Mongodb should be instaled)  
1. git clone  https://github.com/alexbark/angular2-starterkit.git  
2. cd angular2-starterkit  
3. npm install    

Then:   

1. Run mongodb (from console command: mongod)   
2. Run backend and lite-server from /angular2-starterkit with command: **npm start** 


For now app loads from this:     
`<script src="./dist/bundle.js"></script>` in index.html file    

All systemjs related files are commented to get rid of a lot of requests. Probably for development you may want to use it. So uncomment this stuff in index.html:    
`<!--<script src="node_modules/systemjs/dist/system.src.js"></script>-->`    
and this:       
 `<!--<script src="systemjs.config.js"></script>
    <script>
      System.import('app').catch(function(err){ console.error(err); });
 </script>-->`  
 
 Also comment this:    
 `<script src="./dist/bundle.js"></script>`
 
 When work is done you can bundle bunch of .js files into one with next command: **npm run build**  
 After that uncomment bundle.js file back and comment all systemjs related files back


Future work:  

1. Gulp tasks for bundling files and buildning dev package (partially done for .js files with webpack)  
2. Make backend more modulish with adding som usefull features  
3. Integration with ng2-material  
