import styled from "styled-components";

export const TitleStyle = styled.h1`
  font-size: ${(props) => props.$fontSize};
  margin-bottom: ${(props) => props.$marginBottom || 0};
`;

export const ParagraphStyle = styled.p`
  font-size: ${(props) => props.$fontSize};
  margin-bottom: ${(props) => props.$marginBottom || 0};
`;
