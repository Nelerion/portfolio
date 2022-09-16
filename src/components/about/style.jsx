import { devices } from "../../mediaQueries/media";
import styled from "styled-components";
export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  margin-top: 70px;
  display: flex;
  padding-bottom: 50px;
  @media (${devices.tablet}) {
    margin-top: 0;
    padding-bottom: 10px;
  }
`;
export const PhotoBlockContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  @media (${devices.tablet}) {
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #434649;
  }
`;
export const PhotoBlock = styled.div`
  max-width: 300px;
  border-radius: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
export const Photo = styled.img`
  transition: 300ms;
`;
export const AboutMe = styled.section`
  width: 100%;
  display: flex;
  margin-top: 50px;
  @media (${devices.tablet}) {
    flex-direction: column;
    align-items: center;
  }
  padding: 0 15px;
`;
export const Biography = styled.div`
  width: 60%;
  box-sizing: border-box;
  @media (${devices.tablet}) {
    width: 100%;
    padding-left: 0;
  }
`;
export const Title = styled.h1`
  font-size: 36px;
  color: #262630;
`;
export const Social = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 15px;
`;
export const InfoUnPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
`;
export const SocialIcon = styled.img`
  height: 50px;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    transform: scale(1.1);
    transition: 300ms;
  }
`;
export const BioMe = styled.p`
  font-family: PlayFair-Regular;
  font-size: calc(13px + 7 * (100vw / 1244));
  line-height: 1.9em;
  text-align: justify;
`;
export const Russia = styled.img`
  height: 50px;
`;
export const Name = styled.h2`
  margin: 0;
  padding: 0;
  font-family: PlayFair-Regular;
  color: #614d28;
  letter-spacing: 2px;
`;

