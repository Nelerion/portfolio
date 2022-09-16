import space from "./../../img/portfolio/space.png";
import {
  Description,
  ButtonCode,
  ProjectImageBlock,
  ProjectImage,
  ProjectTitle,
  Project,
  ProjectInfoBLock,
  RightBlock,
  LeftBLockTitle,
  LeftBlock,
  PortfolioBlock,
  Container
}from './style';
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
