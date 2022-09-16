import styled from "styled-components";
import { devices } from "../../mediaQueries/media";
export const Container = styled.div`
  width: 100%;
  background-color: white;
`;
export const ExperienceBlock = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 50px 10px;
  box-sizing: border-box;
  @media ${devices.laptop} {
    flex-direction: column;
    padding: 50px 15px;
  }
`;
export const LeftBlockTitle = styled.div`
  width: 30%;
  display: flex;
`;
export const TitleExperience = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 36px;
`;
export const RigtBlockExperience = styled.div`
  width: 70%;
  display: flex;
  height: auto;
  @media ${devices.laptop} {
    width: 100%;
  }
`;
export const ExperienceJob = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border: 1px solid #434649;
  font-family: PlayFair-regular;
  border-radius: 10px;
  -webkit-box-shadow: 0px 5px 18px -12px rgba(129, 131, 133, 1);
  -moz-box-shadow: 0px 5px 18px -12px rgba(129, 131, 133, 1);
  box-shadow: 0px 5px 18px -12px rgba(129, 131, 133, 1);
  transition: 300ms;
  box-sizing: border-box;
  &:hover {
    transition: 300ms;
    -webkit-box-shadow: 0px 10px 28px -12px #949292;
    -moz-box-shadow: 0px 10px 28px -12px #949292;
    box-shadow: 0px 10px 28px -12px #949292;
  }
`;
export const ExperienceJobInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 20px;
  @media ${devices.laptop} {
    margin-top: 20px;
    width: 90%;
  }
  @media ${devices.tablet} {
    width: 100%;
  }
`;
export const Progress = styled.span`
  display: flex;
  width: 20%;
  align-items: center;
  flex-direction: column;
  margin-top: 90px;
  @media ${devices.laptop} {
    width: 10%;
  }
  @media ${devices.tablet} {
    display: none;
  }
`;

export const ProgressСircle = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #816023;
`;
export const ProgressСircleEmpty = styled(ProgressСircle)`
  background: rgba(0, 0, 0, 0);
  border: 1px solid #816023;
  box-sizing: border-box;
`;
export const ProgressLine1 = styled.span`
  width: 1px;
  height: 30%;
  background-color: #816023;
`;
export const ProgressLine2 = styled.span`
  width: 1px;
  height: 45%;
  background-color: #816023;
`;

export const JobTitle = styled.h2`
  font-size: 24px;
  color: #594d5e;
  font-family: PlayFair-black;
`;
export const JobCompany = styled.span`
  color: #929691;
`;
export const AgeJob = styled(JobCompany)``;
export const ExperienceUL = styled.ul`
  list-style-type: square;
  line-height: 1.7;
  font-size: calc(10px + 6 * (100vw / 1200));
`;
