class ExpressionValidation {
  validate(type, string) {
    const result = { matched: false, message: "Invalid Input" };
    const expression = this.regexPatterns()[type];
    if (expression) {
      if (expression[0].test(string)) {
        result.matched = true;
        result.message = expression[1];
      } else {
        result.message = expression[2];
      }
    }
    return result;
  }
  regexPatterns() {
    return {
      phone: [
        /^01\d{9}$/,
        "This is a valid phone number",
        "Invalid Phone number, number must start with 01 and total 11 digit ",
      ],
      email: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Valid email address",
        "Invalid email address, email should be username@domain",
      ],
      zipCode: [
        /^\d{4}$/,
        "Valid zip code",
        "Invalid zip code, zip code for Bangladesh must be 4 digit.",
      ],
    };
  }
}
export default ExpressionValidation;
