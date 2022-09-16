import html from "./../../img/skills/html.png";
import css from "./../../img/skills/css.png";
import js from "./../../img/skills/js.png";
import react from "./../../img/skills/react.png";
import ts from "./../../img/skills/ts.png";
import git from "./../../img/skills/git.png";
import {
  SkillsIcon,
  MySkills,
  SkillsInfoBlock,
  SkillsTitle,
  SkillsBlock,
  Container
}from './style';
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
