import React from "react";
import { HeaderStyle as S } from "../styled-component/HeaderStyle";

const Header = () => {
  /** Header UI */
  return (
    <S.HeaderBox>
      <S.LogoImg src="https://ifh.cc/g/WOXQw7.png" alt="로고" />
    </S.HeaderBox>
  );
};

export default Header;
