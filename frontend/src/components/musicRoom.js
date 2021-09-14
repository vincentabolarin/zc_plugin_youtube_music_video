import React from "react";
import styled from "styled-components";

import Playlist from "./playlist";
import Chat from "./chat";

function MusicRoom() {
  return (
    <Wrapper>
      <div className="room-main">
        <Playlist />
      </div>
      <div className="room-chat-container">
        <Chat />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin: 0;

  .room-main {
    overflow: hidden;
    position: relative;
    flex-grow: 1;
    margin-right: 10px;
  }

  @media screen and (max-width: 1000px) {
    justify-content: center;
    align-items: center;

    .room-main {
      margin: 0;
    }

    .room-chat-container {
      position: fixed;
      top: 70px;
      z-index: 1112;
      background: rgb(240, 240, 240);
      width: 347px;
      display: flex;
      justify-content: center;
    }
  }

  @media screen and (max-width: 600px) {
    .room-chat-container {
      top: 50px;
    }
  }
`;

export default MusicRoom;
