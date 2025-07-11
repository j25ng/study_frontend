import { useEffect } from "react";
import { supabase } from "../supabaseClient";
import { userStore } from "../const/store";

export const useVerify = ({ onSuccess, onFailure }) => {
  const { initUser } = userStore();

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

      const payload = {
        email: data?.user?.email || "익명",
        id: data?.user?.id || "오류",
      };

      initUser(payload);
      onSuccess();
    };
    checkUser();
  }, []);
};
