import React from "react";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <div>
      <div>
        <Img src="../../img/ball.png" alt="포켓볼" />
      </div>
    </div>
  );
};

export default Dashboard;

const PokeballCard = styled.div``;

const Img = styled.img`
  width: 60px;
`;
