var reduce = function(nums, fn, init) {
    let accum = init;
    let i = 0;

  for(i=0; i< nums.length; i++){
    accum = fn(accum, nums[i]);
  }

 
};