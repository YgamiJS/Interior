import styled from "./NetWork.module.scss";

export const NetWork = () => {
  return (
    <div className={styled.netWork}>
      <div className={styled.netWork + " container"}>
        <h1>Oh no , no internet</h1>
      </div>
    </div>
  );
};
