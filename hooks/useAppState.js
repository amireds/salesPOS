import React, { useEffect } from "react";
import { AppState } from "react-native";

function useAppState(onChange) {
  const statedApp = () => {
    return AppState.addEventListener("change", onChange);
  };
  useEffect(() => {
    statedApp();
    return () => {
      statedApp().remove();
    };
  }, []);
}

export default useAppState;
