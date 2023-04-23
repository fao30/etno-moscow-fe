import { Icon } from "@iconify/react";
import useLocalStorage from "../../../utils/useLocalStorage";
import { useEffect } from "react";

export default function Theme() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div
      className="cursor-pointer w-fit xl:w-14 aspect-square p-1 md:p-2 text-2xl xl:text-3xl flex items-center justify-center outline-none shadow active:scale-95 transition-all rounded-full
      bg-light text-primary dark:text-dark2"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icon
        icon={`${
          theme === "dark"
            ? "material-symbols:light-mode"
            : "material-symbols:dark-mode-outline-rounded"
        }`}
      />
    </div>
  );
}
