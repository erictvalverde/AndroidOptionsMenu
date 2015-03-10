//add the following block of code to the main JS file for each section of your app
//change the option1 to any name you want, do the same with the title and any other configs you see fit
//Dublicate or remove Options to add or remove items from your menu

//Set up the android Options menu
var setUpAndroidMenu = function(){
	//Require the androidOptionsMenu.js from lib folder
	require("androidOptionsMenu").createAndroidMenu({
		// option node with basic configs, check titanium docs for more info
		//this will show to buttons on action bar named Option One and Option Two
		option1 : {
			title: "Option One", 
			itemId: 1,
			icon: '/path/to/image.png',
			visible: true,
			showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
			callback : function(){
				optionOne();
			}
		},
		option2 : {
			title: "Option Two", 
			itemId: 2,
			icon: '/path/to/image2.png',
			visible: true,
			showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
			callback : function(){
				optionTwo();
			}
		}
	});

};

//Start the set up function
setUpAndroidMenu();


//callback functions for individual menu items
var optionOne = function(){
	Ti.API.info('Option One Called');
};
var optionTwo = function(){
	Ti.API.info('Option Two Called');
};


//This is how you hide a menu Item programaticaly
if (OS_ANDROID) {
	require('androidOptionsMenu').updateAndroidMenu({
		itemId: 2,
		visible: false // Change to true to show a hidden item
	});
}

