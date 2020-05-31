var contactRecords=[
	{
    contactId:1,
    firstName:'John',
    lastName:'Smith',
    email:'john.smith@gmail.com',
    phone:'9876543'
  },
  {
    contactId:2,
    firstName:'James',
    lastName:'Smith',
    email:'james.smith@gmail.com',
    phone:'99876543'
  },
  {
    contactId:3,
    firstName:'Joseph',
    lastName:'James',
    email:'joseph.jamesh@gmail.com',
    phone:'876543'
  }
];

var Contacts=function(){};

function recordNotFound(message){
	Error.call(this);
	this.message=message;
	this.status=404;
}

function getIndexContactRecord(id){
	var index=-1;
for(i=0;i<contactRecords.length;i++){
	if(contactRecords[i].contactId===id){
		index=i;
		break;
	}
}
return index;
}

Contacts.prototype.get=function(contactId,callback){
	try{
		var index=getIndexContactRecord(contactId);
		if(index>-1){
			callback(null,contactRecords[index]);
		}
		else{
			callback(new recordNotFound('Record does not exist'));
		}
	}
	catch(err){
		callback(err,null);
	}
};
Contacts.prototype.getAll=function(callback){
	try{
		callback(null,contactRecords);
	}
	catch(err){
		callback(err,null);
	}
};

Contacts.prototype.append=function(contact,callback){
	try{
		contact.contactId=parseInt(contact.contactId);
		contactRecords.push(contact);
		callback(null);
	}
	catch(err){
		callback(err,null);
	}
};

Contacts.prototype.save=function(contact,callback){
	try{
		var contactId=parseInt(contact.contactId);
		var index=getIndexContactRecord(contactId);
		contactRecords[index].contactId=contactId;
		contactRecords[index].firstName=contact.firstName;
		contactRecords[index].lastName=contact.lastName;
		contactRecords[index].email=contact.email;
		contactRecords[index].phone=contact.phone;
		callback(null);
	}
	catch(err){
		callback(err,null);
	}
};


Contacts.prototype.delete=function(contactId,callback){
	try{
		var index=getIndexContactRecord(contactId);
		if(index>-1){
			contactRecords.splice(index,1);
			callback(null);
		}
		else{
			callback(new recordNotFound('Record cannot be deleted!!'));
		}
	}
	catch(err){
		callback(err,null);
	}
};

module.exports=Contacts;
