import React from "react";

function Error() {
  return <div>404 Page Not Fouend</div>;
  // handleValidation() {
  //   let fields = this.state.fields;
  //   let errors = {};
  //   let errorClassName = {};
  //   let formIsValid = true;
  
  //   //email
  //   if (!fields["email"]) {
  //     formIsValid = false;
  //     errors["email"] = "Please enter your email.";
  //     errorClassName["email"] = "text-danger";
  //   } else {
  //     var regexEmail =
  //       /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //     if (!regexEmail.test(fields["email"])) {
  //       formIsValid = false;
  //       errors["email"] = "Please enter valid email.";
  //       errorClassName["email"] = "text-danger";
  //     }
  //   }
  
  //   this.setState({ errors: errors });
  //   this.setState({ errorClassName: errorClassName });
  //   return formIsValid;
  // }
}
export default Error;
