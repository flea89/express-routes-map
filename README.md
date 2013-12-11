##  EXPRESS-ROUTES-MAP

Module avaiable on npm registry.
Simple module that simplifies the creation of REST APIs on Express.
The module is designed to help building rest apis, that expose CRUD functionalities on collections of datas.

# Exaple

GET /collection   ---> retrieve collection of resources <br>
GET /collection/:id  ---> retrieve resource with id, from collection <br>

the same philosophy for POST (create) , PUT (update), DELETE (delete)

##GETTING STARTED

server.js
```javascript
var expressmap = require('express-routes-map'),
http = require('http'),
var app = express(),
.....
....
expressmap(app)
  .defineRoutes('/collectionA', require('./routes/collectionA'))
  .defineRoutes('/collectionB',require('./routes/collectionB'))
  .defineRoutes('/collectionC',require('./routes/collectionC'))
  .map();
```
  
The routes have to be build like the follow:<br>
<br>
routes/collectionA.js<br>
```javascript
var item = {
  get : function(req,res){
		  ....
	},
	put : function(req,res){
  
	},
	delete : function(req,res){
		}
};

var collection = {
	get : function(req,res){

	},
	post : function(req,res){
	},
	delete : function(req,res){
	}
};

exports.item = item;
exports.collection = collection;
```


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/flea89/express-routes-map/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

