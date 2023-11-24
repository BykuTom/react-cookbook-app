import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppProvider";
import { useEffect } from "react";
import { ExportButton } from "../components/ExportButton";
export const Profile = () => {
  const { state } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.user) {
      navigate("/");
    }
  }, [state, navigate]);

  return (
    <div className="h-[calc(100vh-4rem)] bg-orange-50 text-black flex flex-col justify-center items-center gap-2">
      {state.user && <h1>{state.user.username} Profile</h1>}
      <ExportButton keyword={"cookbooks"} />
    </div>
  );
};
