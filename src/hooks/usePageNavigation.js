import { useNavigate } from "react-router-dom";

export function usePageNavigation() {
  const navigate = useNavigate();

  const navigateToPage = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return navigateToPage;
}
