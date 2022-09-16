import styled from "styled-components";
import html from "./../../img/skills/html.png";
import css from "./../../img/skills/css.png";
import js from "./../../img/skills/js.png";
import react from "./../../img/skills/react.png";
import ts from "./../../img/skills/ts.png";
import git from "./../../img/skills/git.png";
const Container = styled.div`
  width: 100%;
  display: flex;
  display: flex;
  background-color: #364353;
`;
const SkillsBlock = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
  flex-direction: column;
`;
const SkillsTitle = styled.h2`
  font-size: 36px;
  margin: 0;
  padding: 0;
  color: white;
  letter-spacing: 5px;
`;
const SkillsInfoBlock = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 80px;
`;
const MySkills = styled.div`
  width: 23.33%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  border: 5px initial #492344;
  @media (max-width:670px) {
    width: 16.33%;
  }
`;
const SkillsIcon = styled.img`
  height: 100px;
  transition: 300ms;
  &:hover {
    transition: 300ms;
    transform: scale(1.2);
  }
  @media (max-width:670px) {
    height: 80px;
  }
`;
const Skills = () => {
  return (
    <Container>
      <SkillsBlock>
        <SkillsTitle>Skills</SkillsTitle>
        <SkillsInfoBlock>
          <MySkills>
            <SkillsIcon src={html} />
          </MySkills>
          <MySkills>
            <SkillsIcon src={css} />
          </MySkills>
          <MySkills>
            <SkillsIcon src={js} />
          </MySkills>
          <MySkills>
            <SkillsIcon src={react} />
          </MySkills>
          <MySkills>
            <SkillsIcon src={ts} />
          </MySkills>
          <MySkills>
            <SkillsIcon src={git} />
          </MySkills>
        </SkillsInfoBlock>
      </SkillsBlock>
    </Container>
  );
};

export default Skills;
