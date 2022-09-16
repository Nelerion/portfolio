import styled from "styled-components";
import { devices } from "../../mediaQueries/media";
export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;
export const PortfolioBlock = styled.div`
  display: flex;
  padding: 50px 10px;
  box-sizing: border-box;
  @media (${devices.laptop}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftBlock = styled.div`
  width: 30%;
  display: flex;
  @media (${devices.laptop}) {
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
export const LeftBLockTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 36px;
`;
export const RightBlock = styled.div`
  width: 70%;
  display: flex;
  padding-top: 50px;
`;
export const ProjectInfoBLock = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  font-family: PlayFair-regular;
  font-size: 24px;
  @media (${devices.laptop}) {
    width: 100%;
  }
`;
export const Project = styled.div`
  display: flex;
  justify-content: space-between;
  @media (${devices.laptop}) {
    align-items: center;
    justify-content: space-between;
    flex-direction:column-reverse;
    gap:20px;
  }
`;
export const ProjectTitle = styled.h2`
  font-size: 24px;
  color: #3a1437;
  margin: 0;
  padding: 0;
  font-family: PlayFair-italic;
`;
export const ProjectImage = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const ProjectImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border: 1px solid #816023;
  -webkit-box-shadow: 0px 5px 14px -3px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: 0px 5px 14px -3px rgba(0, 0, 0, 0.28);
  box-shadow: 0px 5px 14px -3px rgba(0, 0, 0, 0.28);
  transition: 200ms;
  &:hover {
    -webkit-box-shadow: 0px 5px 23px -3px rgba(0, 0, 0, 0.38);
    -moz-box-shadow: 0px 5px 23px -3px rgba(0, 0, 0, 0.38);
    box-shadow: 0px 5px 23px -3px rgba(0, 0, 0, 0.38);
    transition: 200ms;
  }
  
`;
export const ButtonCode = styled.a`
  border: 1px solid #614d28;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border-radius: 5px;
  background-color: white;
  color: #612857;
  cursor: pointer;
  text-decoration: none;
  font-family: PlayFair-Regular;
  &:hover {
    background-color: #816023;
    color: white;
  }
`;
export const Description = styled.p`
@media (${devices.laptop}) {
    text-align:center;
  }
`;

