import React from "react";
import { HomeStyle as S } from "../styled-component/HomeStyle";

const Home = () => {
  /** 홈 UI */
  return (
    <S.Container to={"/dex"}>
      <S.DexButton>
        <S.DexImg src="https://ifh.cc/g/nvSXBK.webp" alt="포켓몬도감" />
      </S.DexButton>
    </S.Container>
  );
};

export default Home;
