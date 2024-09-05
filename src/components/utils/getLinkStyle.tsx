import { useLocation } from "react-router-dom";
import { AppRoutes } from "../../../utils/routes";

export const useLinkStyle = () => {
  const location = useLocation();

  return (path: string): React.CSSProperties => {
    const isDeveloperPortalActive =
      location.pathname === AppRoutes.portal ||
      location.pathname === AppRoutes.register ||
      location.pathname === AppRoutes.login;

    const isActive =
      location.pathname === path ||
      (path === AppRoutes.portal && isDeveloperPortalActive);

    return {
      color: isActive ? "#03C068" : "black",
      borderBottom: isActive ? "3px solid #03C068" : "none",
    };
  };
};
