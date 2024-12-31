import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { findAllParent, findMenuItem } from "../helpers/menu";
import styled from "styled-components";
import SidebarToggleButton from "../components/SidebarToggleButton";
import { useSelector } from "react-redux";

const MenuItem = ({ item, className, linkClassName }) => {
  return (
    <StyledMenuItem className={classNames("side-nav-item", className)}>
      <MenuItemLink item={item} className={linkClassName} />
      {item.children && (
        <ul className="side-nav-second-level">
          {item.children.map((child, index) => (
            <MenuItem
              key={index}
              item={child}
              className={className}
              linkClassName={linkClassName}
            />
          ))}
        </ul>
      )}
    </StyledMenuItem>
  );
};

const MenuItemLink = ({ item, className }) => {
  return (
    <StyledMenuLink
      to={item.url}
      target={item.target}
      className={classNames(
        "side-nav-link-ref",
        "side-sub-nav-link",
        className,
      )}
      data-menu-key={item.key}
    >
      {item.icon && <IconWrapper>{item.icon}</IconWrapper>}
      <span>{item.label}</span>
      {/* {item.badge && (
        <span className={classNames("badge", "bg-" + item.badge.variant)}>
          {item.badge.text}
        </span>
      )} */}
    </StyledMenuLink>
  );
};

const AppMenu = ({ menuItems }) => {
  let location = useLocation();
  const menuRef = useRef(null);
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const [activeMenuItems, setActiveMenuItems] = useState([]);

  const activeMenu = useCallback(() => {
    const div = document.getElementById("main-side-menu");
    if (!div) return;

    const matchingMenuItem = Array.from(div.getElementsByClassName("side-nav-link-ref"))
      .find(item => location.pathname === item.pathname);

    if (matchingMenuItem) {
      const mid = matchingMenuItem.getAttribute("data-menu-key");
      const activeMt = findMenuItem(menuItems, mid);
      if (activeMt) {
        setActiveMenuItems([
          activeMt.key,
          ...findAllParent(menuItems, activeMt),
        ]);
      }
    }
  }, [location.pathname, menuItems]);

  useEffect(() => {
    activeMenu();
  }, [activeMenu]);

  return (
    <>
      <SidebarToggleButton />
      <SideNav
        className="side-nav"
        ref={menuRef}
        id="main-side-menu"
        isOpen={isOpen}
      >
        <div>
          <SidebarHeader>
            <p>AI튜터</p>
            <span>교사용 LMS</span>
          </SidebarHeader>
          {(menuItems || []).map((item, idx) => {
            return (
              <MenuItem
                key={idx}
                item={item}
                linkClassName="side-nav-link"
                className={
                  activeMenuItems.includes(item.key) ? "menuitem-active" : ""
                }
              />
            );
          })}
        </div>
        <SidebarBottom>
          <li>로그아웃</li>
          <li>고객센터</li>
        </SidebarBottom>
      </SideNav>
    </>
  );
};

const SideNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => (props.isOpen ? "274px" : "0px")};
  height: 100vh;
  background: #f5f5f5;
  transition: width 0.3s ease-in-out;
  overflow: hidden;

  > * {
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    transition:
      opacity 0.2s ease-in-out,
      visibility 0.2s ease-in-out;
  }
`;

const SidebarHeader = styled.div`
  position: relative;
  height: 98px;
  padding: 20px 24px;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid #e5e5e5;

  display: flex;
  flex-direction: column;
  gap: 6px;

  p {
    color: #343434;
  }
  span {
    color: #2e90ff;
    font-size: 16px;
    font-weight: 600;
  }
  svg {
    width: 30px;
    height: 30px;
  }
`;

const SidebarBottom = styled.ul`
  padding: 20px;

  li {
    font-size: 20px;
    color: #525252;
    line-height: 1.5;

    &:first-child {
      font-weight: 600;
    }
  }
`;

const StyledMenuItem = styled.li`
  padding: 0;
  cursor: pointer;

  &.side-nav-item .side-nav-link-ref {
    padding: 12px 24px;
    display: flex;
    align-items: center;
    color: #525252;
    font-size: 18px;
    font-weight: 600;
    transition: background-color 0.3s ease;

    &:hover {
      background: #eeeeee;
    }
  }

  &.menuitem-active {
    .side-sub-nav-link {
      background: #2e90ff;

      > span {
        color: #fff;
      }
    }
    .side-nav-second-level a {
      background: #88c0ff;
      span {
        color: #525252;
      }
    }
  }

  .side-nav-second-level {
    background: #ffffff;

    .side-nav-link-ref {
      padding-left: 40px;
      color: #bababa;
      /* svg color #BABABA */

      &:hover {
        background: #2e90ff;
        color: #525252;
        /* svg color #525252 */
      }
    }
  }
`;

const StyledMenuLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  i {
    margin-right: 12px;
    font-size: 20px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export default AppMenu;
