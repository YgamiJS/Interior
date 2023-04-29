import styled from "./Loading.module.scss";

export const Loading = () => {
  return (
    <div className={styled.loading}>
      <div className={styled.loading__container + " container"}>
        <div className={styled.loading__spinner}></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};
