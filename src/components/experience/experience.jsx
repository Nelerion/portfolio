import styled from "styled-components";
import { devices } from "../../mediaQueries/media";

const Container = styled.div`
  width: 100%;
  background-color: white;
`;
const ExperienceBlock = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 50px 10px;
  box-sizing: border-box;
  @media (${devices.laptop}) {
    flex-direction: column;
    padding: 50px 15px;
  }
`;
const LeftBlockTitle = styled.div`
  width: 30%;
  display: flex;
  
`;
const TitleExperience = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 36px;
`;
const RigtBlockExperience = styled.div`
  width: 70%;
  display: flex;
  height: auto;
  @media (${devices.laptop}) {
    width: 100%;
  }
`;
const ExperienceJob = styled.div`
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
const ExperienceJobInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 20px;
  @media (${devices.laptop}) {
    margin-top: 20px;
    width: 90%;
  }
  @media (${devices.tablet}) {
    width: 100%;
  }
`;
const Progress = styled.span`
  display: flex;
  width: 20%;
  align-items: center;
  flex-direction: column;
  margin-top: 90px;
  @media (${devices.laptop}) {
    width: 10%;
  }
  @media (${devices.tablet}) {
    display:none;
  }
`;

const ProgressСircle = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #816023;
`;
const ProgressСircleEmpty = styled(ProgressСircle)`
  background: rgba(0, 0, 0, 0);
  border: 1px solid #816023;
  box-sizing: border-box;
`;
const ProgressLine1 = styled.span`
  width: 1px;
  height: 30%;
  background-color: #816023;
`;
const ProgressLine2 = styled.span`
  width: 1px;
  height: 45%;
  background-color: #816023;
`;

const JobTitle = styled.h2`
  font-size: 24px;
  color: #594d5e;
  font-family: PlayFair-black;
`;
const JobCompany = styled.span`
  color: #929691;
`;
const AgeJob = styled(JobCompany)``;
const ExperienceUL = styled.ul`
  list-style-type: square;
  line-height: 1.7;
  font-size: calc(10px + 6 * (100vw / 1200));

`;
const Experience = () => {
  return (
    <Container>
      <ExperienceBlock>
        <LeftBlockTitle>
          <TitleExperience>Experience</TitleExperience>
        </LeftBlockTitle>
        <RigtBlockExperience>
          <Progress>
            <ProgressСircle />
            <ProgressLine1 />
            <ProgressСircleEmpty />
            <ProgressLine2 />
            <ProgressСircleEmpty />
          </Progress>
          <ExperienceJobInfo>
            <ExperienceJob>
              <JobTitle>Star learning frontend</JobTitle>
              <JobCompany>Self-learning</JobCompany>
              <AgeJob>2021 - Present</AgeJob>
              <ExperienceUL>
                <li>
                  <span>
                    At the moment I continue to improve my skills and in search
                    of work
                  </span>
                </li>
              </ExperienceUL>
            </ExperienceJob>
            <ExperienceJob>
              <JobTitle>
                Leading expert in sorting and grading precious stones and metals
              </JobTitle>
              <JobCompany>Gokhran of Russia</JobCompany>
              <AgeJob>May 2018 - August 2022 Russia</AgeJob>
              <ExperienceUL>
                <li>
                  <span>1.5 year jewel sorter</span>
                </li>
                <li>
                  <span>1.5 years as an expert of the 1st category</span>
                </li>
                <li>
                  <span>1 year of work as a leading expert</span>
                </li>
              </ExperienceUL>
            </ExperienceJob>
            <ExperienceJob>
              <JobTitle>Diamond cutter into diamonds</JobTitle>
              <JobCompany>S.D. Diamond</JobCompany>
              <AgeJob>Feb 2015 - Feb 2018 Russia</AgeJob>
              <ExperienceUL>
                <li>
                  <span>1.5 years as a diamond-cutter</span>
                </li>
                <li>
                  <span>1.5 years of work on semi-automated machines</span>
                </li>
                <li>
                  <span>
                    2015 - the winner of the international competition of
                    professional skills "Best Cutter 2015" in the nomination - a
                    novice diamond cutter in diamonds
                  </span>
                </li>
                <li>
                  <span>
                    Winner of the III WORLDSKILLS RUSSIA Open Championship in
                    Moscow
                  </span>
                </li>
                <li>
                  <span>
                    Winner of the IV WORLDSKILLS RUSSIA Open Championship in
                    Moscow
                  </span>
                </li>
              </ExperienceUL>
            </ExperienceJob>
          </ExperienceJobInfo>
        </RigtBlockExperience>
      </ExperienceBlock>
    </Container>
  );
};

export default Experience;
