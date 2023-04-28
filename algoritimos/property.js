function removeProperty(obj) {
    if(obj["prop"]){
        delete obj.prop
        console.log(obj)
        return true;
    }else{
    console.log('prop not existent')
    console.log(obj)
    return false;
    }
  }

  const someObject = {
    object: "something",
    prop: "prop",
    address: "algum"
  }

removeProperty(someObject);