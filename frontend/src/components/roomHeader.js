// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import avatarSvg from "../media/header-avatar.svg";
import groupIconSvg from "../media/header-group-icon.svg";
import groupIconSvgMobile from "../media/header-group-icon-mobile.svg"

const roomHeader = () => {
  return (
    <Wrapper className="header">
      <div className="header-left">
        <img
          src={groupIconSvg}
          alt="header-group-icon"
          className="header-group-icon"
        />
        <img
          src={groupIconSvgMobile}
          alt="header-group-icon-mobile"
          className="header-group-icon-mobile"
        />
        <Link to="/" className="header-link">
          Music Room
        </Link>
      </div>

      <div className="header-right">
        <div>
          <img src={avatarSvg} alt="header-avatar" />
        </div>
        <div className="header-count">12</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 1px 1px 0px 0px;
  height: 60px;
  color: #27ae60;
  padding: 20px;
  margin-bottom: 10px;

  .header-group-icon {
    display: block;
  }

  .header-group-icon-mobile {
    display: none;
  }

  .header-link {
    display: block;
    margin-left: 10px;
    font-style: normal;
    line-height: 8px;
    letter-spacing: 0px;
    padding: 12px;
    border-radius: 4px;
    color: inherit;
    text-decoration: none;
    font-size: 20px;
    white-space: nowrap;
  }

  .header-right,
  .header-left {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-count {
    font-size: 18px;
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    background: #27ae60;
    color: #ffffff;

    .header-group-icon {
      display: none;
    }
  
    .header-group-icon-mobile {
      display: block;
    }
  }
`;

export default roomHeader;
