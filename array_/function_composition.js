var compose = function(functions) {
    return function(x) {
        let result = x;
        functions.reverse().forEach(func => {
            result = func(result)
        })
        return result;
    }
};