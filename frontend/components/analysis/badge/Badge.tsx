import styled from "styled-components";
import Seed from "../../../public/analysis/badge/seed.png";
import Image from 'next/image'

const Container = styled.div`
  width: 90%;
  height: 90%;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 1rem;
`;

const ProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NickName = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 2rem;
  margin-left: 1rem;
`;

export default function badge() {
  return (
    <Container>
      <ProfileImage>
        <Image src={Seed} alt="이미지를 찾을 수 없습니다." />
      </ProfileImage>
      <RightContainer>
        <NickName>
          <Title>현재 새싹 등급이에요!</Title>
        </NickName>
      </RightContainer>
    </Container>
  );
}