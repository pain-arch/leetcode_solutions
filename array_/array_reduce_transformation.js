var reduce = function(nums, fn, init) {
    let accum = init;
  for(i=0; i< nums.length; i++){
    accum = fn(accum, nums[i]);
  }
};