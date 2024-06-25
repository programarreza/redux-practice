// Function Currying

const add = (a) => {
  return (b) => {
    return (c) => {
      return a *( b + c);
    };
  };
};

const level = add(5);

console.log(level(2)(2));
console.log(level(2)(5));
console.log(level(3)(7));
console.log(level(5)(12));
