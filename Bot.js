//#functions
//main
//get one random num from [0-9]
//build a array of random numbers

const main = () => {
  const lengthcard = 15;
  let newarr = "";
  for (let i = 0; i < lengthcard; i++) {
    let random_number = Math.floor(Math.random() * 10);
    newarr += random_number.toString();
  }
  return {
    valid: newarr,
  };
};

const howmuch = (n) => {
  let j = 0;
  while (j < n) {
    console.log(main());
  }
  j++;
};
