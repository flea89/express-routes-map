module.exports = function(app) {
	var i = 0;
	var routes = {};
	routes.array = [];
	routes.defineRoutes = function(route, obj, middleware) {
		this.array.push({
			routeName: route,
			routeObj: obj,
			middleware: middleware
		});
		return this;
	};
	routes.map = function() {
		var collection,
		item,
		routeName,
		middleware;	
		this.array.forEach(function(el, index) {
			var key;
			collection = el.routeObj.collection;
			item = el.routeObj.item;
			routeName = el.routeName;
			middleware = el.middleware;
			if (typeof middleware === 'function') {
				for (key in collection) {
					if (collection.hasOwnProperty(key)) {
						app[key](routeName, middleware, collection[key]);
					}
				}
				for (key in item) {
					if (item.hasOwnProperty(key)) {
						app[key](routeName + '/:item',middleware, item[key]);
					}
				}
			}
			else {
				for (key in collection) {
					if (collection.hasOwnProperty(key)) {
						app[key](routeName, collection[key]);
					}
				}
				for (key in item) {
					if (item.hasOwnProperty(key)) {
						app[key](routeName + '/:item', item[key]);
					}
				}

			}
		});
	};

	return routes;
};