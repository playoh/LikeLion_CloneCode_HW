import React from "react";
import styled from "styled-components";
import { themeColors } from "./styles/StyledComponents";
import Img1 from "../w3school/avatar2.png";
import Img2 from "../w3school/avatar5.png";
import Img3 from "../w3school/avatar6.png";
import CommitImg1 from "../w3school/avatar3.png";
import CommitImg2 from "../w3school/avatar1.png";


const NoCenterHorizontal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
`;
const UserBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 7vh;
  font-size: 24px;
  color: ${themeColors.DARKCOLOR.color};
  background-color: #FFFFFF;
  border-bottom: 1px solid #DDDDDD;
`;

const UserIcon = styled.img`
  display: flex;
  justify-content: center;
  margin-left: 2%;
  margin-right: 2%;
  border-radius: 50%;
  width: 35px;
`;

// ======================================== User Comment 

const UserTotalBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 7vh;
  color: ${themeColors.DARKCOLOR.color};
`;

const UserCommitIcon = styled.img`
  display: flex;
  justify-content: center;
  margin-left: 2%;
  margin-right: 2%;
  border-radius: 50%;
  width: 96px;
`;

const UserCommentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 7vh;
  margin-left: 4%;
  font-size: 24px;
  color: ${themeColors.DARKCOLOR.color};
`;

const CommentDate = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #606060;
`;

const CommentWord = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  width: auto;
`;

const SubTitleText = styled.div`
  font-size: 24px;
  padding: 3vh 0 2vh 0;
`;


function RecentUsers () {
  return (
    <>
      <NoCenterHorizontal>
        <UserContainer>
          <UserBox>
            <UserIcon src={Img1} alt="avator2"/>
            Mike
          </UserBox>
          <UserBox>
            <UserIcon src={Img2} alt="avator5"/>
            Jill
          </UserBox>
          <UserBox>
            <UserIcon src={Img3} alt="avator6"/>
            Jane
          </UserBox>
        </UserContainer>
      </NoCenterHorizontal>

      <NoCenterHorizontal>
        <SubTitleText>Recent Comments</SubTitleText>

        <UserTotalBox>
          <UserCommitIcon src={CommitImg1} alt="avator3" />
          <UserCommentBox>
            John
            <CommentDate>Sep 29, 2014, 9:12 PM</CommentDate>
            <CommentWord>
              Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CommentWord>
          </UserCommentBox>
        </UserTotalBox>

        <UserTotalBox>
          <UserCommitIcon src={CommitImg2} alt="avator1" />
          <UserCommentBox >
            Bo
            <CommentDate>Sep 28, 2014, 10:15 PM</CommentDate>
            <CommentWord>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CommentWord>
          </UserCommentBox>
        </UserTotalBox>
      </NoCenterHorizontal>
      
    </>
  );
}

export default RecentUsers;