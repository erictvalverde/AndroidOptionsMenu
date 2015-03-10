var menu,globalObj;

/**************** Creates the Android Action Bar Menu **********************/
function createAndroidMenu(obj) {
	
	clearAndroidMenu();
	
	Alloy.Globals.mainWindow.activity.onCreateOptionsMenu = function(e) {
		
		menu = e.menu;
	  		
	  	_.each(obj, function(item){
	  		
	  		var menuItem = menu.add({ 
				title: item.title,
				itemId: item.itemId,
				icon: item.icon,
				visible: item.visible,
				showAsAction: item.showAsAction
			});
			menuItem.addEventListener("click", item.callback);
			
		});
	};
	
	Alloy.Globals.mainWindow.activity.invalidateOptionsMenu();
	
};
exports.createAndroidMenu = createAndroidMenu;

/**************** Show and Hide Menu items **********************/
var updateItem = function() {
	Alloy.Globals.mainWindow.removeEventListener("postlayout",updateItem);
	if(typeof menu==="object" && globalObj.itemId){
		var menuItem = menu.findItem(globalObj.itemId);
		menuItem && menuItem.setVisible(globalObj.visible);
	}
};
function updateAndroidMenu(obj){
	//this is here so users can go from food Settings to Food diary without getting an error 
	globalObj = obj;
	Alloy.Globals.mainWindow.addEventListener("postlayout",updateItem);
};
exports.updateAndroidMenu = updateAndroidMenu;

/**************** Clear the all menu items **********************/
function clearAndroidMenu(){
	if(typeof menu==="object"){
		menu.clear();
	}
	globalObj = null;
};
exports.clearAndroidMenu = clearAndroidMenu;
