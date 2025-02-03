import React from "react";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <Div>
      <PokeballCard>
        <Img src="../../img/ball.png" alt="포켓볼" />
      </PokeballCard>
      <PokeballCard>
        <Img src="../../img/ball.png" alt="포켓볼" />
      </PokeballCard>
      <PokeballCard>
        <Img src="../../img/ball.png" alt="포켓볼" />
      </PokeballCard>
      <PokeballCard>
        <Img src="../../img/ball.png" alt="포켓볼" />
      </PokeballCard>
      <PokeballCard>
        <Img src="../../img/ball.png" alt="포켓볼" />
      </PokeballCard>
      <PokeballCard>
        <Img src="../../img/ball.png" alt="포켓볼" />
      </PokeballCard>
    </Div>
  );
};

export default Dashboard;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PokeballCard = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
`;

const Img = styled.img`
  object-fit: cover;
`;
