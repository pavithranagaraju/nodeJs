console.log("First Statement");
setTimeout(function(){
	console.log('Second Statement');
});


console.log("third Statement");
console.log('Using Callback');
var fruits=['apple','banana','grapes','orange'];
fruits.forEach(function(fruit,index){
setTimeout(function(){
	console.log(index+ ". " + fruit);
});

	
});