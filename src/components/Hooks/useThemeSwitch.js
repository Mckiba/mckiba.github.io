import React, { useState, useEffect } from "react";

export function useThemeSwitch() {
  const preferlightQuery = "(prefers-color-scheme: light)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferlightQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPref) {
        let check = userPref === "light" ? "light" : "light";
        setMode(check);
        if (check === "light") {
          document.documentElement.classList.add("light");
        } else {
          document.documentElement.classList.remove("light");
        }
        return check;
      } else {
        setMode(mediaQuery.matches ? "light" : "light");
        window.localStorage.setItem(
          "theme",
          mediaQuery.matches ? "light" : "light"
        );
        if (mediaQuery.matches) {
          document.documentElement.classList.add("light");
        } else {
          document.documentElement.classList.remove("light");
        }
        return window.matchMedia(preferlightQuery).matches ? "light" : "light";
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "light") {
      document.documentElement.classList.add("light");
      window.localStorage.setItem("theme", "light");
    }

    if (mode === "light") {
      document.documentElement.classList.remove("light");
      window.localStorage.setItem("theme", "light");
    }
  }, [mode]);

  // we're doing it this way instead of as an effect so we only
  // set the localStorage value if they explicitly change the default
  return [mode, setMode];
}
