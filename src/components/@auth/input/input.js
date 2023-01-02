import React from "react";
import Form from "react-bootstrap/Form";
function Input({ value, onChange, inError ,item }) {
  console.log("name",value[item.name]);  
  return (
    <>  
      <Form.Group className="my-3 ">
        <h6>{item.id}</h6>
        <Form.Control
          value={value[item.name]=== undefined ?"":value[item.name]}
          name={item.name}
          type={item.type}
          placeholder={item.placeholder}
          isInvalid={inError[item?.name]}
          onChange={(e) => onChange(item.name, e.target.value)}
        />

        <Form.Control.Feedback type="invalid" className="fs-5">
          {inError[item?.name]}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
}
export default Input;
