import {
  ExperienceUL,
  AgeJob,
  JobCompany,
  JobTitle,
  ProgressLine2,
  ProgressLine1,
  ProgressСircleEmpty,
  ProgressСircle,
  Progress,
  ExperienceJobInfo,
  ExperienceJob,
  RigtBlockExperience,
  TitleExperience,
  LeftBlockTitle,
  ExperienceBlock,
  Container,
} from "./style";
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
              <JobTitle>Start learning frontend</JobTitle>
              <JobCompany>Self-learning</JobCompany>
              <AgeJob>July 2021 - Present</AgeJob>
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
