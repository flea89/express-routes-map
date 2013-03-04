var f = function(){
	var i=0;
		return function map (app,obj,route){
		var separator;
		route = route || '' ;
		for (var key in obj){
			if (obj.hasOwnProperty(key)) {
				switch (typeof obj[key]) {
					case 'object':
						separator = i%2 ? '/:' : '/';
						i=i+1;
						app.map(app, obj[key],route + separator + key);
						break;
					case 'function':
						app[key](route, obj[key]);
						break;
				}
			}
		}
	};
};

module.exports = function (app){
	var i=0;
	var routes = {};
	routes.array = [];
	routes.defineRoutes = function(route, obj){
		this.array.push( {
			routeName : route,
			routeObj: obj
		});
		return this;	
	};
	routes.map = function () {
		var collection ,
			item,
			routeName;
		this.array.forEach( function(el,index){

			collection = el.routeObj.collection;
			item = el.routeObj.item;
			routeName = el.routeName;

			for ( var key in collection){
				if (collection.hasOwnProperty(key)) {
					app[key](routeName, collection[key]);
				}
			}
			for (key in item){
				if (item.hasOwnProperty(key)) {
					app[key](routeName + '/:item', item[key]);
				}
			}	
		});
	};

	return routes;
};
