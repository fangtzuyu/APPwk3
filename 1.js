function buy(callback) {
    console.log('buy something');
    var data = {
        thing:'milk'
    };
    callback(data);
}
buy(data =>{
    console.log('The callback was invoked.');
    console.log(data);
});