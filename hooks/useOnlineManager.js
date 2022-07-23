import React, { useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";
import { onlineManager } from "@tanstack/react-query";
import { WEB } from "../utils/lib";

function useOnlineManager() {
  useEffect(() => {
    if (WEB) {
      return NetInfo.addEventListener((state) => {
        onlineManager.setOnline(
          state.isConnected !== null &&
            state.isConnected &&
            Boolean(state.isInternetReachable)
        );
      });
    }
  }, []);
}

export default useOnlineManager;
