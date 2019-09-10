import React, {
  useRef,
  useEffect,
  useContext,
} from "react";
import { Context } from "../switchTheme";

export function MainLayout({ children }) {
  const { name, setTheme } = useContext(Context);
  useEffect(() => {
    setTheme("main");
    return () => {
      setTheme("default");
    };
  }, []);
  return children;
}

export function DefaultLayout({ children }) {
  const { setTheme } = useContext(Context);
  useEffect(() => {
    if (name !== "default") {
      setTheme("default");
    }
  }, []);
  return children;
}
