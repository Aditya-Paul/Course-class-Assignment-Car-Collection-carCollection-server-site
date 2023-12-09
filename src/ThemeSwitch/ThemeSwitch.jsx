import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(AuthContext)
  return (
      
      <div className="flex gap-2 text-center items-center text-3xl"> 
        <h2>You Can change the theme by click on the CheckBox</h2>
        <label className="switch text-2xl">
          <input 
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <span className="slider round"></span>
        </label>
      </div>
  );
};

export default ThemeSwitch;
