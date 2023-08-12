function findAddress(obj) {
    let addressParts = [];
    
    if(obj.street){
        addressParts.push(obj.street);
    }
    else{
        addressParts.push('__')
    }
    if (obj.house) {
        addressParts.push(obj.house);
    }
    else{
        addressParts.push('__');
    }

    if (obj.society) {
        addressParts.push(obj.society);
    } 
    else {
        addressParts.push('__');
    }

    return addressParts.join(',');
}
