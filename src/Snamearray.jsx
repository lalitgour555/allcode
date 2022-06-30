import React from 'react'

const Snamearray = () => {
    var result1 = [
        {id:1, name:'Sandra', type:'user', username:'sandra'},
        {id:2, name:'John', type:'admin', username:'johnny2'},
        {id:3, name:'Peter', type:'user', username:'pete'},
        {id:4, name:'Bobby', type:'user', username:'be_bob'}
      ];
      
      var result2 = [
        {id:2, name:'John', email:'johnny@example.com'},
        {id:3, name:'Peter', type:'user', username:'pete'},
        {id:4, name:'Bobby', email:'bobby@example.com'}
      ];
      
      var props = ['id', 'name'];
      
      var result = result1.filter(function(o1){
        // filter out (!) items in result2
        return result2.some(function(o2){
            return o1.id === o2.id;          // assumes unique id
        });
      }).map(function(o){
        // use reduce to make objects with only the required properties
        // and map to apply this to the filtered array as a whole
        return props.reduce(function(newo, name){
            newo[name] = o[name];
            return newo;
        }, {});
      });
      
      document.body.innerHTML = '<pre>' + JSON.stringify(result, null, 4) +
            '</pre>';
  return (
    <div><h1>hello</h1></div>
  )
}

export default Snamearray