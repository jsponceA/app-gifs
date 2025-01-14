import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";

const ToggleColorMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleColorMode = () => {
    setDarkMode(!darkMode);
  };

  const changeClassName = (state) => {
    if (state) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  useEffect(() => {
    changeClassName(darkMode);
  }, [darkMode]);
  return (
    <>
      {darkMode ? (
        <button onClick={toggleColorMode} type="button">
          <MdOutlineWbSunny
            size={40}
            className="text-yellow-500"
            title="Light Mode"
          />
        </button>
      ) : (
        <button onClick={toggleColorMode} type="button" title="Dark Mode">
          <MdDarkMode size={40} />
        </button>
      )}
    </>
  );
};

export default ToggleColorMode;
