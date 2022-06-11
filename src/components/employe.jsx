import React from "react";
import { Displaydata } from "./displaydata";
export default function Employee() {
  const [formData, setFormData] = React.useState({
    name1: "",
    age: "",
    address: "",
    salary:"",
    isMarried: false
  });
  const inputRef = React.useRef(null);

  const handleChange = (e) => {
    let { name, value, checked, type } = e.target;

    value = type === "checkbox" ? checked : value;

    // username, password, age
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    inputRef.style="display:none"
    fetch(`http://localhost:3001/employedata`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "content-type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      
  };

  const { name1, address, age,salary, isMarried } = formData;
  return (
    <div className="App" >
      <h3 style={{color:"teal"}}>EMPLOYEE SIGN UP FORM</h3>
      <br />
      <form onSubmit={handleSubmit} ref={inputRef}>
      <input
          type="text"
          placeholder="Enter name"
          name="name1"
          onChange={handleChange}
          value={name1}
        />
        <br/>
        <input
          type="text"
          placeholder="Enter Age"
          name="age"
          onChange={handleChange}
          value={age}
        />
        <br />
        <input
          type="text"
          placeholder="Enter address"
          name="address"
          onChange={handleChange}
          value={address}
        />
        <br />
        <input
          type="text"
          placeholder="Enter salary"
          name="salary"
          onChange={handleChange}
          value={salary}
        />
        <br />
        <label>
          MARRIED :{" "}
          <input
            type="checkbox"
            checked={isMarried}
            onChange={handleChange}
            name="isMarried"
          />
        </label>
        <br />
        
        <input type="submit" value="SUBMIT FORM" />
      </form>
      <Displaydata />
    </div>
  );
}
