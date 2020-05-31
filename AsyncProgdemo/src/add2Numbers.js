function nodeStyleCallBack(err,data){
	if(err){
		console.log(err);
		return;
	}
	console.log(data);
}

function addNumbers(x,y,callback){
	if(typeof x!== 'number'){
		callback(new Error('The first argument is not a number'));
		return;
	}

	if(typeof y!== 'number'){
		callback(new Error('The Second argument is not a number'));
		return;
	}

	var result=x+y;
	callback(null,result);
}

addNumbers(1,2,nodeStyleCallBack);
 /*
 remove this comment to create a call back error
 addNumbers('a','b',nodeStyleCallBack); */ 
console.log('CallBack hell.....');
addNumbers(1,2,function(err,data){
	addNumbers(data,3,function(err,data){
		addNumbers(data,4,function(err,data){
			console.log(data);
		});
	});
});

console.log("Using asyn waterfall");

var async=require('async');

async.waterfall([
	async.apply(function(arg1,arg2,callback){
		addNumbers(arg1,arg2,callback);
	},1,2),function(arg1,callback){
		addNumbers(arg1,3,callback);
	},
	function(arg1,callback){
		addNumbers(arg1,4,callback);
	},
	function(arg1,callback){
		addNumbers(arg1,5,callback);
	},
],function(err,result){
	console.log("1+2+3+4+5=",result);
});

console.log('Asyn Parallel');

async.parallel([
	function measureBloodPressure(callback){
		callback(null,140);
	},
	function measureRespirationRate(callback){
		callback(null,20);
	},
	function mesureTemparature(callback){
		callback(null,98);
	},
	function measurePulseRate(callback){
		callback(null,60);
	}
],function(err,results){
	console.log("asyn.parallel....");
	console.log("Blood Pressure:",results[0]);
	console.log("Respiration Rate:",results[1]);
	console.log("Temperature:",results[2]);
	console.log("Pulse Rate:",results[3]);
	
	
});