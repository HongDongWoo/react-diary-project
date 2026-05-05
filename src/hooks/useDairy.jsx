import { useContext, useState, useEffect } from "react";
import { DairyStateContext } from "../App";
import { useNavigate } from "react-router-dom";
const useDairy = (id) => {
  const data = useContext(DairyStateContext);
  const [currentDairyItem, setCurrentDairyItem] = useState();
  const nav = useNavigate();

  useEffect(() => {
    const currentDairyItem = data.find(
      (item) => String(item.id) === String(id),
    );

    if (!currentDairyItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurrentDairyItem(currentDairyItem);
  }, [id]);

  return currentDairyItem;
};

export default useDairy;
