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
  margin-left: 310px;
  padding: 16px;

  @media (max-width: 768px){
    margin-left: 0;
  }
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
  
  @media (max-width: 768px){
    padding: 8px 16px;
  }
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
  margin-top: 2vh;
  margin-bottom: 2vh;
  width: 100%;
  height: auto;
  color: ${themeColors.DARKCOLOR.color};

  @media (max-width: 1000px){
    flex-direction: column;
    align-items: flex-start;
  }
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
  margin-left: 4%;
  font-size: 24px;
  color: ${themeColors.DARKCOLOR.color};

  @media (max-width: 1000px){
    margin-left: 0;
    margin-top: 1vh;
  }
`;

const CommentWord = styled.div`
  display: flex;
  font-size: 20px;
  width: 95%;
  font-size: 20px;

  @media (max-width: 768px){
    font-size: 15px;
  }
`;

const CommentDate = styled(CommentWord)`
  display: flex;
  font-size: 16px;
  margin-bottom: 0;
  color: #606060;

  @media (max-width: 768px){
    flex-direction: column;
    font-size: 15px;
  }
`;

const SubTitleText = styled.div`
  font-size: 24px;
  padding: 1vh 3vh 1vh 0;
  margin-top: 2vh;

  @media (max-width: 768px){
    margin-left: 0;
    margin-top: 2vh;
  }
`;

const NameAndDate = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap; // 작은 화면 대응용!! 자동으로 아래로 넘어가게~
`;
function RecentUsers () {
  return (
    <>
      <NoCenterHorizontal>
        <SubTitleText>Recent Users</SubTitleText>
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
  {/* ~~~~~~~~~~~~~~~~~ Comment부분 ~~~~~~~~~~~~~~ */}
      <NoCenterHorizontal>
        <SubTitleText>Recent Comments</SubTitleText>

        <UserTotalBox>
          <UserCommitIcon src={CommitImg1} alt="avator3" />
          <UserCommentBox>
            <NameAndDate>
              John
              <CommentDate>Sep 29, 2014, 9:12 PM</CommentDate>
            </NameAndDate>
            <CommentWord>
              Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CommentWord>
          </UserCommentBox>
        </UserTotalBox>

        <UserTotalBox>
          <UserCommitIcon src={CommitImg2} alt="avator1" />
          <UserCommentBox >
            <NameAndDate>
              Bo
              <CommentDate>Sep 28, 2014, 10:15 PM</CommentDate>
            </NameAndDate>
      
            <CommentWord>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CommentWord>
          </UserCommentBox>
        </UserTotalBox>
      </NoCenterHorizontal>
      
    </>
  );
}

export default RecentUsers;