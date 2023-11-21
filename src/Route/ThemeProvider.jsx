import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
   return useContext(ThemeContext)
}

const ThemeProvider = ({children}) => {
   const [isDarkMode, setDarkMode] = useState(false);

   const toggleTheme = () => {
      setDarkMode((prevMode) => !prevMode);
    };
    const theme = {
      isDarkMode,
      toggleTheme,
    };

   return (
      <ThemeContext.Provider value={theme}>
         {children}
      </ThemeContext.Provider>
   );
};

export default ThemeProvider;