function whatShallIWear(temp){
	if(temp < 60){
		console.log("Wear a jacket");
	} else if(temp < 70){
		console.log("Wear a sweater");
	} else {
		console.log("Wear a T-shirt");
	}
}

whatShallIWear(60);
whatShallIWear(70);
whatShallIWear(80);
whatShallIWear(50);