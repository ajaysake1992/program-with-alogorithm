const a = [1,3,2,2];

const b = a.filter((val, index, arr) => {
  
  return a.indexOf(val) === index;
  
});

console.log(b);

const c = b.sort((x,y) => {
  
  return y-x;
  
});

console.log(c);