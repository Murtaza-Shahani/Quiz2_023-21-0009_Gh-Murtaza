function calculateAverage(numbers) {
    let avg;
    sum=0;
    if(numbers==0)
    {
        console.log("there is no number to calculate average")
    }
    else{
      for(let i=0;i<numbers.length;i++)
      {
        sum+=i
      }
     avg = sum/numbers.length ;
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
  
 
 
  const person = {
    name: "Murtaza",
    age: 21,
    country: "pakistan",
    semester: 5,
    cms: "12345",
    details: [
      {
        contactNumber: "555-555-5551",
        email: "murtaza@example.com",
      },
      {
        contactNumber: "555-555-5552",
        email: "shahani@example.com",
      },
      {
        contactNumber: "555-555-5553",
        email: "ali@example.com",
      },
    ],
  };
  
  // Printing values of the object:
  console.log("Name:", person.name);
  console.log("Age:", person.age);
  console.log("Country:", person.country);
  console.log("Semester:", person.semester);
  console.log("CMS:", person.cms);
  
  console.log("Contact Details:");
  person.details.forEach((detail, index) => {
    console.log(`Contact ${index + 1}:`);
    console.log("Contact Number:", detail.contactNumber);
    console.log("Email:", detail.email);
  });
  