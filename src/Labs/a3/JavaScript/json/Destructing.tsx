import React from 'react'

const Destructing = () => {
const person = { name: "John", age: 25 };
const { name, age } = person;
 // const name = person.name
 // const age = person.age
const numbers = ["one", "two", "three"];
const [ first, second, third ] = numbers;

  return (
    <div>
        <h3>
        Destructing
        </h3>
        <h3>Object Destructing</h3>
     const &#123; name, age &#125; = &#123; name: "John", age: 25 &#125;<br /><br />
     name = {name}<br />
     age = {age}
     <h3>Array Destructing</h3>
     const [first, second, third] = ["one","two","three"]<br/><br/>
     first = {first}<br />
     second = {second}<br />
     third = {third}


    </div>
  )
}

export default Destructing