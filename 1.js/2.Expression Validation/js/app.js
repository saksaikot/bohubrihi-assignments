import ExpressionValidation from "./ExpressionValidation.js";

const validator = new ExpressionValidation();

const validationInputNode = document.querySelector("#validationInput");
const validationMessageNode = document.querySelector("#validationMessage");

document
  .querySelector("#check-input")
  .addEventListener("click", handleCheckInput);

function handleCheckInput() {
  const type = document.querySelector(
    "[name=expressionValidation]:checked"
  ).value;
  const result = validator.validate(type, validationInputNode.value);
  showValidationResult(result);
}

function showValidationResult({ matched, message }) {
  //class cleanup
  validationInputNode.classList.remove("is-invalid", "is-valid");
  validationMessageNode.classList.remove("valid-feedback", "invalid-feedback");

  const inputClass = matched ? "is-valid" : "is-invalid";
  const messageClass = matched ? "valid-feedback" : "invalid-feedback";
  validationInputNode.classList.add(inputClass);
  validationMessageNode.classList.add(messageClass);
  validationMessageNode.textContent = message;
}
