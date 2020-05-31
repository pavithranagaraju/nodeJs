var Q=require('q');
var addNumberspromise=function(x,y){
	var deferred=Q.defer();
	addNumbers(x,y,function(err,data){
		if(err){
			deferred.reject(err);
		}
		else{
			deferred.resolve(data);
		}
	
	});
	return deferred.promise;
};

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

addNumberspromise(1,2)
.then(function(result){
	return addNumberspromise(result,3);
})
.then(function(result){
	return addNumberspromise(result,4);
})
.then(function(result){
	return addNumberspromise(result,5);
})
.then(function(result){
	console.log('Result= ',result);
})
.catch(function(err){
	console.log(err);
});