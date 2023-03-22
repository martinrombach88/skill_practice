import valid from "card-validator";

//This is not a component, or a hook.
//It's just an imported function.

//Component: Renders something in the View
//Hook: Use React's library to act on state (this only acts on values and returns a value)

export default function validateInfo(values) {
  //Init errors object
  let errors = {};

  //Declares creditCard an object returned by the validator's number method.
  //Object contains card info and two 'valid' booleans, isValid and isPotentiallyValid
  //We assign the values from the argument (i.e. from the form) to this object,
  //and validator checks each one to see if it's valid.
  let creditCard = valid.number(values.cardNumber);

  //Here the object is given more values from the form.
  creditCard.expirationDate = valid.expirationDate(values.cardExpiration);
  creditCard.cvv = valid.cvv(values.cardSecurityCode);
  creditCard.cardholderName = valid.cardholderName(values.cardName);

  //!! this could make errors later, we aren't handling post codes??
  creditCard.postalCode = valid.postalCode(values.cardPostalCode);

  //The various errors are initialised, mostly as false.
  //If any of the false values are still false by the end of the form,
  //the card details aren't valid.
  errors.show = true;
  errors.variant = "danger";
  errors.message = "An unknown error occured. Please try again later";
  errors.cname = false;
  errors.cnumber = false;
  errors.ctype = false;
  errors.cexp = false;
  errors.ccvv = false;
  errors.cpostal = false;

  //Below each field / key/value pair in the object is checked, first for length
  //then for it's boolean isValid field

  //Check for post codes (comment if it breaks code)
  // if (values.cardPostalCode === null || !values.cardPostalCode.trim()) {
  //   errors.message = "Credit card postal code is not complete";
  // } else if (creditCard.postalCode.isValid) {
  //   errors.cpostal = true;
  // } else {
  //   errors.message = "Credit card postal code is invalid";
  // }

  //Card CVC Verification
  if (values.cardSecurityCode === null || !values.cardSecurityCode.trim()) {
    errors.message = "Credit card CVC is not complete";
  } else if (creditCard.cvv.isValid) {
    errors.ccvv = true;
  } else {
    errors.message = "Credit card CVC is invalid";
  }

  //Card Expiration Verification
  if (values.cardExpiration === null || !values.cardExpiration.trim()) {
    errors.message = "Credit card expiration date is not complete";
  } else if (creditCard.expirationDate.isValid) {
    errors.cexp = true;
  } else {
    errors.message = "Credit card expiration date is invalid";
  }

  // //Card Type Verification
  // if (
  //   values.cardType === null ||
  //   !values.cardType.trim() ||
  //   creditCard.card === null
  // ) {
  //   errors.message = "Credit card type is not complete";
  // } else if (
  //   creditCard.card.type &&
  //   creditCard.card.type.toUpperCase() === values.cardType.toUpperCase()
  // ) {
  //   errors.ctype = true;
  // } else {
  //   errors.message = "Credit card type is invalid";
  // }

  //Card Number Verification
  if (values.cardNumber === null || !values.cardNumber.trim()) {
    errors.message = "Credit card number is not complete";
  } else if (creditCard.isValid) {
    errors.cnumber = true;
  } else {
    errors.message = "Credit card number is invalid";
  }

  //Cardholder Name Verification
  if (values.cardName === null || !values.cardName.trim()) {
    errors.message = "Cardholder name is not complete";
  } else if (creditCard.cardholderName.isValid) {
    errors.cname = true;
  } else {
    errors.message = "Cardholder name is invalid";
  }

  if (
    // errors.ctype &&
    errors.cname &&
    errors.cnumber &&
    errors.cexp &&
    // errors.cpostal &&
    errors.ccvv
  ) {
    errors.variant = "success";
    errors.message = "Credit Card is valid";
  }

  return errors;
}
