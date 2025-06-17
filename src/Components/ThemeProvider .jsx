import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // ডিফল্ট থিম 'light' অথবা সিস্টেমের থিম চেক করুন
  const [theme, setTheme] = useState("light");

  // থিম টগল করবে (Light ↔ Dark)
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // থিম চেঞ্জ হলে HTML-এ ক্লাস অ্যাড করুন
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme); // ব্রাউজারে সেভ করে রাখুন
  }, [theme]);

  // পেইজ লোড হলে আগে থেকে সেভ করা থিম চেক করুন
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);