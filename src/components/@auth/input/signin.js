import React from "react";
import Form from "react-bootstrap/Form";    

function Signin({ value, onChange, inError, item }) {
  console.log("itemvalue", value[item.name]);
  return (
    <Form.Group className="my-3 ">
      <h6>{item.id}</h6>
      <Form.Control
        value={value[item.name] === undefined ? "" : value[item.name]}
        name={value.name}
        type={item.type}
        placeholder={item.placeholder}
        onChange={(e) => {
          onChange(item.name, e.target.value);
        }}
        isInvalid={inError[item?.name]}
      />
      <Form.Control.Feedback type="invalid" className="fs-6">
        {inError[item?.name]}
       
      </Form.Control.Feedback>
    </Form.Group>
  );
}
export default Signin;
