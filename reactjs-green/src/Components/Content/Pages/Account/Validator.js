// export function Validator(formSelector) {
//   var form = new Validator("#register-form");

//   form.onSubmit = function (formData) {
//     console.log(formData);
//   };

//   function getParent(element, selector) {
//     while (element.parentElement) {
//       if (element.parentElement.matches(selector)) {
//         return element.parentElement;
//       }
//       element = element.parentElement;
//     }
//   }

//   var formRules = {};

//   /**
//    * Quy ước tạo rule:
//    * Nếu có lỗi thì return `error message`
//    * Nếu không có lỗi thì return `undefined`
//    */
//   var validatorRules = {
//     required: function (value) {
//       return value ? undefined : "Vui lòng nhập trường này";
//     },
//     passwordRequired: function (value) {
//       return value
//         ? undefined
//         : "Mật khẩu phải có ít nhất 6 kí tự, tối đa 12 kí tự";
//     },
//     isNotName: function (value) {
//       var regex = /^[a-zA-ZÀ-ỹĂ-ưẠ-Ỵ ]+$/;
//       return regex.test(value) ? undefined : "Vui lòng nhập đúng tên của bạn";
//     },
//     email: function (value) {
//       var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//       return regex.test(value) ? undefined : "Vui lòng nhập email của bạn";
//     },
//     min: function (min) {
//       return function (value) {
//         return value.length >= min
//           ? undefined
//           : `Vui lòng nhập ít nhất ${min} kí tự`;
//       };
//     },
//     max: function (max) {
//       return function (value) {
//         return value.length <= max
//           ? undefined
//           : `Vui lòng chỉ nhập tối đa ${max} kí tự`;
//       };
//     },
//     passwordConfirmRequired: function (value) {
//       return value ? undefined : "Vui lòng nhập lại mật khẩu ở trên";
//     },
//     confirm: function (selector) {
//       return function (value) {
//         return value === document.querySelector(selector).value
//           ? undefined
//           : "Mật khẩu nhập lại không chính xác";
//       };
//     },
//     requiredSelect: function (value) {
//       return value ? undefined : "Vui lòng chọn mục này";
//     },
//     requiredRadio: function (options) {
//       options = document.querySelectorAll('input[name="gender"]');
//       for (var i = 0; i < options.length; i++) {
//         if (options[i].checked) {
//           return undefined;
//         }
//       }
//       return "Vui lòng chọn giới tính của bạn";
//     },
//   };

//   // Lấy ra form Element trong DOM theo formSelector
//   var formElement = document.querySelector(formSelector);

//   // Chỉ xử lý khi có element trong DOM
//   if (formElement) {
//     var inputs = formElement.querySelectorAll("[name][rules]");
//     for (var input of inputs) {
//       var rules = input.getAttribute("rules").split("|");
//       for (var rule of rules) {
//         var ruleInfo;
//         var isRuleHasValue = rule.includes(":");

//         if (isRuleHasValue) {
//           ruleInfo = rule.split(":");
//           rule = ruleInfo[0];
//         }

//         var ruleFunc = validatorRules[rule];

//         if (isRuleHasValue) {
//           ruleFunc = ruleFunc(ruleInfo[1]);
//         }

//         if (Array.isArray(formRules[input.name])) {
//           formRules[input.name].push(ruleFunc);
//         } else {
//           formRules[input.name] = [ruleFunc];
//         }
//       }

//       // Lắng nghe sự kiện để validate(blue, change,...)
//       input.onblur = handleValidate;
//       input.oninput = handleClearError;
//     }
//     function handleValidate(event) {
//       var rules = formRules[event.target.name];
//       var errorMessage;

//       for (var rule of rules) {
//         errorMessage = rule(event.target.value);
//         if (errorMessage) break;
//       }

//       // Nếu có lỗi thì hiển thị message lỗi ra UI
//       if (errorMessage) {
//         var formGroup = getParent(event.target, ".form-group");
//         if (formGroup) {
//           formGroup.classList.add("invalid");
//           var formMessage = formGroup.querySelector(".form-message");

//           if (formMessage) {
//             formMessage.innerText = errorMessage;
//           }
//         }
//       }

//       return !errorMessage;
//     }

//     // Hàm clear message lỗi
//     function handleClearError(event) {
//       var formGroup = getParent(event.target, ".form-group");
//       if (formGroup.classList.contains("invalid")) {
//         formGroup.classList.remove("invalid");
//         var formMessage = formGroup.querySelector(".form-message");

//         if (formMessage) {
//           formMessage.innerText = "";
//         }
//       }
//     }
//   }

//   // Xử lý hành vi submit form
//   formElement.onsubmit = (event) => {
//     event.preventDefault();

//     var inputs = formElement.querySelectorAll("[name][rules]");
//     var isValid = true;

//     for (var input of inputs) {
//       if (!handleValidate({ target: input })) {
//         isValid = false;
//       }
//     }

//     // Khi không có lỗi thì submit form
//     if (isValid) {
//       if (typeof this.onSubmit === "function") {
//         var enableInputs = formElement.querySelectorAll("[name]");
//         var formValues = Array.from(enableInputs).reduce(function (
//           values,
//           input
//         ) {
//           switch (input.type) {
//             case "radio":
//               values[input.name] = formElement.querySelector(
//                 'input[name="' + input.name + '"]:checked'
//               ).value;
//               break;
//             case "checkbox":
//               if (!input.checked) {
//                 return values;
//               }
//               if (!values[input.name]) {
//                 values[input.name] = "";
//               }
//               if (!Array.isArray(values[input.name])) {
//                 values[input.name] = [];
//               }
//               values[input.name].push(input.value);
//               break;
//             case "file":
//               values[input.name] = input.files;
//               break;
//             default:
//               values[input.name] = input.value;
//           }

//           return values;
//         },
//         {});

//         // Gọi lại hàm onSubmit và trả về kèm giá trị của form
//         this.onSubmit(formValues);
//       } else {
//         formElement.submit();
//       }
//     }
//   };

//   // Gọi form validator
//   const register = document.querySelector(".accountRegister");
//   const mainValidator = document.getElementById("register-form");
//   const overlay = document.getElementById("overlay");
//   const closeFormBtn = document.getElementById("closeFormBtn");
//   const formMessage = document.querySelectorAll(".form-group .form-message");
//   const formGroup = document.querySelectorAll(".form-group");
//   const formControl = document.querySelectorAll(".form-group .form-control");

//   function handleRegistertValidation() {
//     register.addEventListener("click", () => {
//       mainValidator.style.display = "block";
//       overlay.style.display = "block";

//       if ((mainValidator.style.display = "block" && formMessage.length > 0)) {
//         overlay.addEventListener("click", () => {
//           mainValidator.style.display = "none";
//           overlay.style.display = "none";
//           formControl.forEach((textControl) => {
//             textControl.value = "";
//           });

//           formMessage.forEach((message) => {
//             message.textContent = "";
//             formGroup.forEach((formInput) => {
//               formInput.classList.remove("invalid");
//             });
//           });
//         });
//       }
//     });

//     closeFormBtn.addEventListener("click", () => {
//       mainValidator.style.display = "none";
//       overlay.style.display = "none";
//       formControl.forEach((textControl) => {
//         textControl.value = "";
//       });

//       formMessage.forEach((message) => {
//         message.textContent = "";
//         formGroup.forEach((formInput) => {
//           formInput.classList.remove("invalid");
//         });
//       });
//     });
//   }

//   handleRegistertValidation();

//   // Password input
//   const isPasswordShow = [];

//   function handlePasswordChange() {
//     formGroup.forEach((div, index) => {
//       const input = div.querySelector('input[type="password"]');
//       const eyeHidden = div.querySelector(".eye-hidden");
//       const eye = div.querySelector(".eye");

//       if (input && eyeHidden && eye) {
//         isPasswordShow[index] = false;

//         eyeHidden.addEventListener("click", () => {
//           if (!isPasswordShow[index]) {
//             input.type = "text";
//             eyeHidden.style.display = "none";
//             eye.style.display = "block";
//             isPasswordShow[index] = true;
//           }
//         });

//         eye.addEventListener("click", () => {
//           if (isPasswordShow[index]) {
//             input.type = "password";
//             eye.style.display = "none";
//             eyeHidden.style.display = "block";
//             isPasswordShow[index] = false;
//           }
//         });
//       }
//     });
//   }
//   handlePasswordChange();
// }
