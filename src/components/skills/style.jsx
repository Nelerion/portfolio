import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  display: flex;
  display: flex;
  background-color: #364353;
`;
export const SkillsBlock = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
  flex-direction: column;
`;
export const SkillsTitle = styled.h2`
  font-size: 36px;
  margin: 0;
  padding: 0;
  color: white;
  letter-spacing: 5px;
`;
export const SkillsInfoBlock = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 80px;
`;
export const MySkills = styled.div`
  width: 23.33%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  @media (max-width: 670px) {
    width: 16.33%;
  }
`;
export const SkillsIcon = styled.img`
  height: 100px;
  transition: 300ms;
  &:hover {
    transition: 300ms;
    transform: scale(1.2);
  }
  @media (max-width: 670px) {
    height: 80px;
  }
`;
