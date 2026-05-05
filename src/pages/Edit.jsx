import { replace, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DairyDispatchContext, DairyStateContext } from "../App";
import useDairy from "../hooks/useDairy";

function Edit() {
  const params = useParams();

  const nav = useNavigate();

  const { onDelete, onUpdate } = useContext(DairyDispatchContext);

  const currentDairyItem = useDairy(params.id);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요?")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };
  const onSubmit = (input) => {
    onUpdate(
      params.id,
      input.createdDate.getTime(),
      input.emotionId,
      input.content,
    );

    nav("/", { replace: true });
  };
  return (
    <div>
      <Header
        text={"일기 수정 하기"}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={"< 뒤로 가기"}
          />
        }
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <Editor initData={currentDairyItem} onSubmit={onSubmit} />
    </div>
  );
}

export default Edit;
