import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Theme from "./components/Theme";
import { getAccessTokenInfo } from "../../utils/utils";

const navbarData = [
  {
    label: "Опросы",
    icon: "ri:survey-line",
    href: "/dashboard",
    type: "survey",
  },
  {
    label: "Пользователи",
    icon: "ri:user-received-fill",
    href: "/dashboard/users",
    type: "users",
  },
];

export default function Navbar() {
  const dispatch = useDispatch();
  const access_token = getAccessTokenInfo();
  const location = useLocation();
  const navigate = useNavigate();

  // if (!access_token) {
  //   return null;
  // }

  return (
    <div className="relative">
      <nav className="transition-colors fixed shadow py-longer6 md:py-normal top-0 min-h-screen flex flex-col justify-between items-center bg-primary dark:bg-dark2 rounded-r-3xl">
        <Theme />
        <div className="flex flex-col gap-4 -translate-y-16 xl:-translate-y-24">
          {navbarData?.map((e, i) => {
            return (
              <NavLink
                to={e?.href}
                key={i}
                className={`font-semibold rounded-lg flex items-center text-light transition-all gap-2 h-14 md:px-2 p ${
                  e?.href === location.pathname ||
                  location?.pathname?.includes(e?.type)
                    ? "from-hover dark:from-dark to-transparent bg-gradient-to-r"
                    : "bg-transparent scale-90"
                }
              `}
              >
                <div
                  className={`w-1 md:w-2 h-10 rounded-lg transition-all ${
                    e?.href === location.pathname ||
                    location?.pathname?.includes(e?.type)
                      ? "opacity-100 bg-light "
                      : "opacity-0"
                  }`}
                />
                <span>
                  <Icon icon={e?.icon} width={25} />
                </span>
                <span className="hidden xl:flex">{e?.label}</span>
                <div className={`w-1 md:w-2 h-10 opacity-0`} />
              </NavLink>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-4 w-full">
          <div
            onClick={() => navigate("/dashboard/password-change")}
            className="active:scale-95 transition-all cursor-pointer flex items-center gap-2 text-light"
          >
            <span className="flex xl:hidden">
              <Icon icon="material-symbols:change-circle-rounded" width={25} />
            </span>
            <span className="hidden xl:flex font-semibold pSmaller2">
              Сменить пароль
            </span>
          </div>
          <div
            onClick={() => dispatch({ type: "set", modalLogout: true })}
            className="active:scale-95 transition-all cursor-pointer flex items-center gap-2 text-light"
          >
            <span>
              <Icon icon="majesticons:logout" width={25} />
            </span>
            <span className="hidden xl:flex font-semibold p">Выйти</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
