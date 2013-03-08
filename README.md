##  EXPRESS-ROUTES-MAP

Module avaiable on npm repository.
Simple module that simplifies the creation of REST APIs on Express.
The module is designed to help building rest apis, that expose CRUD functionalities on collections of datas.

# Exaple

GET /users   -> retrieve collection of users
GET /users/:id -> retrieve user with id, from collection users

the same philosophy for POST (create) , PUT (update), DELETE (delete)

##GETTING STARTED

server.js
```
var expressmap = require('express-routes-map'),
http = require('http'),
var app = express(),
.....
....
expressmap(app).defineRoutes('/bill', require('./routes/bills'))
  .defineRoutes('/users',require('./routes/users'))
  .map();
```
  
The routes have to be build like the follow:<br>
<br>
routes/bills.js<br>
```
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
