var filter = function(arr, fn) {
    let fil = [];

    for(i= 0; i < arr.length; i++){
        if(fn(arr[i], i)){
            fil.push(arr[i])
        }
    }
    return fil;

};