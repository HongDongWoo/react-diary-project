import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { useNavigate } from "react-router-dom";
import useDairy from "../hooks/useDairy";
import { getStringedData } from "../util/get-stringed-date";

function Dairy() {
  const params = useParams();
  const nav = useNavigate();
  const currentDairyItem = useDairy(params.id);

  if (!currentDairyItem) {
    return <div>데이터 로딩중...</div>;
  }

  const { createdDate, emotionId, content } = currentDairyItem;
  const title = getStringedData(new Date(createdDate));
  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={"< 뒤로 가기"}
          />
        }
        rightChild={
          <Button
            onClick={() => nav(`/edit/${params.id}`)}
            text={"수정하기"}
            type={"NEGATIVE"}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
}

export default Dairy;
