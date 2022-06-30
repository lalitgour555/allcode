import React from 'react'

const Snameobj = () => {
    let cars = [
        { id: 1, name: "Mercedes", year: "2015" },
        { id: 2, name: "Mercedes", year: "2000" },
        { id: 3, name: "BMW", year: "2010" },
        { id: 4, name: "BMW", year: "2004" },
        { id: 5, name: "Volvo", year: "2012" },
        { id: 6, name: "Volvo", year: "2014" },
      ];
      
      let numbers = cars.reduce((acc, child) => {
        if (!acc[child.name]) {
          acc[child.name] = 0;
        }
        acc[child.name]++;
        return acc;
      }, {});
      
      console.log(numbers);
      
      
  return (
    <div>
        <h1> " id: 1, name: "Mercedes", year: "2015" ,<br></br>
        id: 2, name: "Mercedes", year: "2000" ,<br></br>
         id: 3, name: "BMW", year: "2010" ,<br></br>
         id: 4, name: "BMW", year: "2004" ,<br></br>
        id: 5, name: "Volvo", year: "2012" ,<br></br>
         id: 6, name: "Volvo", year: "2014" "</h1>
        
        Snameobj</div>
  )
}

export default Snameobj