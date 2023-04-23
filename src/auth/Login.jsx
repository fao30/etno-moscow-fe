import { useState } from "react";
import { validateEmail } from "../utils/utils";
import { toast } from "react-hot-toast";
import Input from "../components/Input";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(login?.email) && login?.password) {
      toast.success("Успешно вошли в систему");
      navigate("/dashboard");
    } else {
      toast.error("Неверный адрес электронной почты или пароль");
      localStorage.removeItem("access_token");
    }
  };

  const handleRecovery = (e) => {
    e.preventDefault();
    if (validateEmail(login?.email)) {
      console.log(login?.email);
    } else {
      toast.error("errorr");
    }
  };

  return (
    <section className="grid gap-4 w-[80%] md:w-[50%] lg:w-[30%]">
      <h2>{forgotPassword ? "Восстановить пароль" : "Войти в систему"}</h2>
      <Input
        label="Почта"
        name="email"
        value={login?.email}
        type="text"
        placeholder="admin@example.com"
        onChange={handleChange}
        icon="ic:baseline-email"
        warning={
          !validateEmail(login?.email) &&
          login?.email?.length > 5 && (
            <p className="pSmaller3 link">введите корректную почту</p>
          )
        }
      />
      {!forgotPassword && (
        <div className="flex flex-col gap-1">
          <Input
            label="Пароль"
            name="password"
            value={login?.password}
            type={showPassword ? "text" : "password"}
            placeholder="*******"
            onChange={handleChange}
            icon="zondicons:view-show"
            toggle={() => setShowPassword(!showPassword)}
          />
          <p
            onClick={() => setForgotPassword(true)}
            className="text-right pSmaller3 themed cursor-pointer"
          >
            не помню пароль
          </p>
        </div>
      )}
      <button onClick={forgotPassword ? handleRecovery : handleSubmit}>
        {forgotPassword ? "Отправить ссылку" : "Войти"}
      </button>
    </section>
  );
};

export default Login;
