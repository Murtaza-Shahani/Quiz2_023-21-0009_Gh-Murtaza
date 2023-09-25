function calculateAverage(numbers) {
    let avg;
    if(numbers==0)
    {
        console.log("there is no number to calculate average")
    }
    else{
     avg = numbers/5 ;
    }
      return avg
  }

  const numbers = [1, 2, 3, 4, 5];
  const avg = calculateAverage(numbers);
  console.log(`The average is: ${avg}`);
  

  function ArrayWithIndex(array) {
    array.map((value, index) => {
      console.log(`Value at index ${index} is ${value}`);
    });
  }
  
  
  const ARRAY = [10, 20, 30, 40, 50];
  ArrayWithIndex(ARRAY);
  
