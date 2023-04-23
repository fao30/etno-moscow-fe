import { useState } from "react";
import Input from "../components/Input";
import { toast } from "react-hot-toast";

export default function PasswordChange() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      password?.oldPassword &&
      password?.newPassword === password?.confirmPassword
    ) {
      toast.success("yeay");
    } else {
      toast.error("error");
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen themedBg pl-longer6 pr-normal">
      <div className="grid gap-4 w-[80%] md:w-[50%] lg:w-[30%]">
        <h2>Сменить пароль</h2>
        <Input
          type={showPassword ? "text" : "password"}
          label="Старый пароль"
          placeholder="*******"
          name="oldPassword"
          onChange={handleChange}
          icon="zondicons:view-show"
          toggle={() => setShowPassword(!showPassword)}
        />
        <Input
          type={showPassword2 ? "text" : "password"}
          label="Новый пароль"
          placeholder="*******"
          name="newPassword"
          onChange={handleChange}
          icon="zondicons:view-show"
          toggle={() => setShowPassword2(!showPassword2)}
        />
        <Input
          type={showPassword3 ? "text" : "password"}
          label="Повторите пароль"
          placeholder="*******"
          name="confirmPassword"
          onChange={handleChange}
          icon="zondicons:view-show"
          toggle={() => setShowPassword3(!showPassword3)}
          warning={
            password?.confirmPassword?.length > 5 &&
            password?.newPassword !== password?.confirmPassword && (
              <p className="pSmaller3 link">пароль не соответствует</p>
            )
          }
        />
        <button onClick={handleSubmit}>Подтвердить</button>
      </div>
    </section>
  );
}
