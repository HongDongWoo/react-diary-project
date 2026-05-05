import Header from "../components/Header";
import Button from "../components/Button";
import DairyList from "../components/DairyList";
import { useState, useContext } from "react";
import { DairyStateContext } from "../App";
function getMonthlyData(pivotData, data) {
  const beginTime = new Date(
    pivotData.getFullYear(),
    pivotData.getMonth(),
    1,
    0,
    0,
    0,
  ).getTime();

  const endTime = new Date(
    pivotData.getFullYear(),
    pivotData.getMonth() + 1,
    0,
    23,
    59,
    59,
  ).getTime();
  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime,
  );
}
function Home() {
  const data = useContext(DairyStateContext);
  const [pivotData, setPivotData] = useState(new Date());

  const monthlyData = getMonthlyData(pivotData, data);
  console.log(monthlyData);

  const onDecreaseMonth = () => {
    setPivotData(new Date(pivotData.getFullYear(), pivotData.getMonth() - 1));
  };
  const onIncreaseMonth = () => {
    setPivotData(new Date(pivotData.getFullYear(), pivotData.getMonth() + 1));
  };
  return (
    <div>
      <Header
        title={`${pivotData.getFullYear()}년 ${pivotData.getMonth() + 1}월`}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <DairyList data={monthlyData} />
    </div>
  );
}

export default Home;
