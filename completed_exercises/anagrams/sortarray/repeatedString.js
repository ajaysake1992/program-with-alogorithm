const a = ['1','3','2'];

const b = a.filter((val, index, arr) => {
  
  return a.indexOf(val) === index;
  
});

console.log(b);

b.sort().reverse();

console.log(b);