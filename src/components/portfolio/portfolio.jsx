import styled from "styled-components";
import space from "./../../img/portfolio/space.png";
import { devices } from "../../mediaQueries/media";
const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;
const PortfolioBlock = styled.div`
  display: flex;
  padding: 50px 10px;
  box-sizing: border-box;
  @media (${devices.laptop}) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftBlock = styled.div`
  width: 30%;
  display: flex;
  @media (${devices.laptop}) {
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
const LeftBLockTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 36px;
`;
const RightBlock = styled.div`
  width: 70%;
  display: flex;
  padding-top: 50px;
`;
const ProjectInfoBLock = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  font-family: PlayFair-regular;
  font-size: 24px;
  @media (${devices.laptop}) {
    width: 100%;
  }
`;
const Project = styled.div`
  display: flex;
  justify-content: space-between;
  @media (${devices.laptop}) {
    align-items: center;
    justify-content: space-between;
    flex-direction:column-reverse;
    gap:20px;
  }
`;
const ProjectTitle = styled.h2`
  font-size: 24px;
  color: #3a1437;
  margin: 0;
  padding: 0;
  font-family: PlayFair-italic;
`;
const ProjectImage = styled.img`
  width: 100%;
  object-fit: cover;
`;
const ProjectImageBlock = styled.div`
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
const ButtonCode = styled.a`
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
const Description = styled.p`
@media (${devices.laptop}) {
    text-align:center;
  }
`;
const Portfolio = () => {
  return (
    <Container>
      <PortfolioBlock>
        <LeftBlock>
          <LeftBLockTitle>Project</LeftBLockTitle>
        </LeftBlock>
        <RightBlock>
          <Project>
            <ProjectInfoBLock>
              <ProjectTitle>Space</ProjectTitle>
              <Description>
                Information from space, asteroids, images of Mars and the Earth,
                etc.
              </Description>
            </ProjectInfoBLock>
            <ProjectImageBlock>
              <a
                href="https://nelerion.github.io/Space/#/APOD"
                target="a_blank"
              >
                <ProjectImage src={space} />
              </a>
              <ButtonCode href="https://github.com/Nelerion/Space">
                Code {"</>"}
              </ButtonCode>
            </ProjectImageBlock>
          </Project>
        </RightBlock>
      </PortfolioBlock>
    </Container>
  );
};

export default Portfolio;
