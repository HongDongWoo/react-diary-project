import { useParams } from "react-router-dom";
function Dairy() {
  const params = useParams();
  console.log(params.id);
  return <div>{params.id}번 일기장입니다!</div>;
}

export default Dairy;
