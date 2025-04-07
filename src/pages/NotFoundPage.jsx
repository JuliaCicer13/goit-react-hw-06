import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import css from "../components/styles/NotFound.module.css"
export default function NotFound () {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return <p className={css.comment}> 404 The page doesn`t exist. Returne to the previous page</p>
}