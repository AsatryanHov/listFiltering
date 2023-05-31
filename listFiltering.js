function filter_list(l) {
  
  let a = l.filter(function(val) {
    return typeof val === "number";
  });
  
  let b = a.filter(function(val){
   return val > 0;
  
  });
  return a;
  }
