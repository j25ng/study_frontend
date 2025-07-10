import { useEffect } from "react";
import { supabase } from "../supabaseClient";

export const useVerify = ({ onSuccess, onFailure }) => {
  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data) {
        console.error("세션 없음 또는 오류", error);
        localStorage.removeItem("sb-vbxtrrzobvrlcmbljeaf-auth-token");
        supabase.auth.signOut();
        onFailure();
        return;
      }
      onSuccess();
    };
    checkUser();
  }, []);
};
