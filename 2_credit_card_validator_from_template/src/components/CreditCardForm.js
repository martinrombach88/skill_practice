import React from "react";
import useForm from "../useForm";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";

/*
Test cards:
//https://developer.ebanx.com/docs/resources/testCreditCards/
Visa:
4111111111111111, 05/2040, 111
Mastercard:
5555555555554444, 05/2040, 111
American Express:
378282246310005, 05/2040, 111
*/

const CreditCardForm = () => {
  //Logic for the form is handled by a hook called useForm, which calls another Hook, ValidateInfo.
  //The hook manages the state of the card and state changes triggered by the form on the fly.
  //Logic could be handled here also, but it's better to separate out code into
  //so that each component has an individual function

  //Crucial syntax -> useForm() -> if you don't execute the hook it won't import the variables.
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();

  return (
    <>
      <div className="App-formDiv">
        <div className="creditCard">
          <Cards
            cvc={values.cardSecurityCode}
            expiry={values.cardExpiration}
            focused={values.focus}
            name={values.cardName}
            number={values.cardNumber}
          />
        </div>

        <Form
          //handleSubmit implements useForm/validateInfo here
          className="App-form"
          onSubmit={handleSubmit}
        >
          <Form.Group>
            <Form.Control
              //Form Group collects inputs
              //together like div.
              //Form.Control is bootstrap
              //equivalent of input.

              type="text"
              id="cardName"
              name="cardName"
              placeholder="Cardholder Name"
              //taken from useForm
              value={values.cardName}
              onChange={handleChange}
              onFocus={handleFocus}
              //taken from validate info
              isValid={errors.cname}
            />

            <Form.Control
              type="number"
              name="cardNumber"
              placeholder="Card Number"
              value={values.cardNumber}
              onChange={handleChange}
              onFocus={handleFocus}
              isValid={errors.cnumber}
            />
            <Form.Control
              type="text"
              id="cardExpiration"
              name="cardExpiration"
              placeholder="Expiry Date"
              value={values.cardExpiration}
              onChange={handleChange}
              onFocus={handleFocus}
              isValid={errors.cexp}
            />

            <Form.Control
              type="number"
              id="cardSecurityCode"
              name="cardSecurityCode"
              placeholder="Security Code"
              value={values.cardSecurityCode}
              onChange={handleChange}
              onFocus={handleFocus}
              isValid={errors.ccvv}
            />
            <Form.Control type="submit" value="Validate" />
          </Form.Group>
        </Form>
      </div>
      <Alert
        id="alertMessage"
        data-testid="alertMessage"
        variant={errors.variant}
        show={errors.show}
      >
        {errors.message}
      </Alert>
    </>
  );
};

export default CreditCardForm;
