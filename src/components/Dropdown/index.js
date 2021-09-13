import React from "react";
import { menuData } from "../../data/MenuData";
import {
  DropdownContainer,
  Icon,
  CloseIcon,
  DropdownWrapper,
  DropdownMenu,
  MenuLink,
  BtnWrap,
} from "./DropdownElements";
import { Button } from "../GlobalStyle/Button";

const Dropdown = ({ open, toggle }) => {
  return (
    <>
      <DropdownContainer onClick={toggle} open={open}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <DropdownWrapper>
          <DropdownMenu>
            {menuData.map((menu, index) => {
              return (
                <MenuLink to={menu.link} key={index}>
                  {menu.title}
                </MenuLink>
              );
            })}
          </DropdownMenu>
          <BtnWrap>
            <Button primary="true" round="true" big="true" to="/contact">
              Contact Us
            </Button>
          </BtnWrap>
        </DropdownWrapper>
      </DropdownContainer>
    </>
  );
};

export default Dropdown;
