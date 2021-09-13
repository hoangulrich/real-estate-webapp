import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  /* background: transparent; */
`;

export const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

export const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
  font-size: 1.8rem;
`;

export const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    color: #fff;
    display: block;
    cursor: pointer;
    /* position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%); */
    height: 25px;
    width: 25px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
