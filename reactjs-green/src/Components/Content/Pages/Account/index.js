import Input from "../../../Input";
import "./Account.css";
import { useEffect, useState, useRef } from "react";
import { registerInput1, registerInput2 } from "../../../../Data";

export function Account() {
  const [value, setValue] = useState("");
  const mainValidatorRef = useRef(null);
  const overlayRef = useRef(null);
  const closeFormBtnRef = useRef(null);
  const formMessageRefs = useRef([]);
  const formGroupRefs = useRef([]);
  const formControlRefs = useRef([]);

  useEffect(() => {
    const mainValidator = mainValidatorRef.current;
    const overlay = overlayRef.current;
    const closeFormBtn = closeFormBtnRef.current;
    const formMessage = formMessageRefs.current;
    const formGroup = formGroupRefs.current;
    const formControl = formControlRefs.current;

    function handleRegistertValidation() {
      closeFormBtn.addEventListener("click", () => {
        mainValidator.style.display = "none";
        overlay.style.display = "none";
        Array.from(formControl).forEach((textControl) => {
          textControl.value = "";
        });

        Array.from(formMessage).forEach((message) => {
          message.textContent = "";
          formGroup.forEach((formInput) => {
            formInput.classList.remove("invalid");
          });
        });
      });
    }

    handleRegistertValidation();

    return () => {
      closeFormBtn.removeEventListener("click", handleRegistertValidation);
    };
  }, []);

  return (
    <>
      <div ref={overlayRef} className="overlay" id="overlay"></div>
      <div className="main">
        <form
          ref={mainValidatorRef}
          action=""
          method="POST"
          className="form"
          id="register-form"
        >
          <span ref={closeFormBtnRef} id="closeFormBtn" className="close">
            &times;
          </span>
          <h3 className="heading">Đăng ký tài khoản Tiki</h3>
          <p className="desc">Cùng mua sắm mọi thứ ❤️</p>

          <div className="spacer"></div>

          {registerInput1.map((item, index) => {
            return (
              <div key={index} ref={formGroupRefs} className="form-group">
                <div htmlFor={item.name} className="form-label">{item.label}</div>
                <Input
                  ref={formControlRefs}
                  id={item.id}
                  name={item.name}
                  rules={item.rules}
                  type={item.type}
                  placeholder={item.placeholder}
                  className="form-control"
                  setValue={setValue}
                />
                <span ref={formMessageRefs} className="form-mesage"></span>
              </div>
            )
          })}

          <div ref={formGroupRefs} className="form-group">
            <div htmlFor="province" className="form-label">
              Tỉnh/Thành phố
            </div>
            <select
              ref={formControlRefs}
              id="province"
              name="province"
              rules="requiredSelect"
              className="form-control"
            >
              {registerInput2.map((item) => {
                return (
                  <option key={item.id} value={item.value}>{item.select}</option>
                )
              })}
            </select>
            <span ref={formMessageRefs} className="form-message"></span>
          </div>

          <div ref={formGroupRefs} className="form-group horizontal">
            <div htmlFor="gender" className="form-label">
              Giới tính
            </div>
            <div className="form-gender">
              <div>
                <Input
                  id="male"
                  name="gender"
                  rules="requiredRadio"
                  type="radio"
                  value="Male"
                  className="genderForm"
                  setValue={setValue}
                />
                <div htmlFor="male">Nam</div>
              </div>
              <div>
                <Input
                  id="female"
                  name="gender"
                  rules="requiredRadio"
                  type="radio"
                  value="Female"
                  className="genderForm"
                  setValue={setValue}
                />
                <div htmlFor="female">Nữ</div>
              </div>
              <div>
                <Input
                  id="other"
                  name="gender"
                  rules="requiredRadio"
                  type="radio"
                  value="Other"
                  className="genderForm"
                  setValue={setValue}
                />
                <div htmlFor="other">Khác</div>
              </div>
            </div>
            <span ref={formMessageRefs} className="form-message"></span>
          </div>

          <button className="form-submit">Đăng ký</button>
        </form>
      </div>
    </>
  );
}

