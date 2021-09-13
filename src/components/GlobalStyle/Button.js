import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  outline: none;
  border: none;
  color: #fff;
  background: ${({ primary }) => (primary ? "#000d1a" : "#cd853f")};
  white-space: space nowrap;
  cursor: pointer;
  text-decoration: none;
  min-width: 100px;
  max-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};

  &:hover {
    transform: translateY(-2px);
  }
`;
