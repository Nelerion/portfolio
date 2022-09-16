import styled from "styled-components";
import photo1 from "./../../img/me.png";
import photo2 from "./../../img/me3.png";
import vk from "./../../img/vk.png";
import github from "./../../img/github.png";
import russia from "./../../img/russia.png";
import { useEffect, useState } from "react";
import { devices } from "../../mediaQueries/media";
const Container = styled.div`
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
const PhotoBlockContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  @media (${devices.tablet}) {
    width: 100%;
    padding:20px 0;
    border-bottom: 1px solid #434649;
  }
`;
const PhotoBlock = styled.div`
  max-width: 300px;
  border-radius: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
const Photo = styled.img`
  transition: 300ms;
`;
const AboutMe = styled.section`
  width: 100%;
  display: flex;
  margin-top: 50px;
  @media (${devices.tablet}) {
    flex-direction: column;
    align-items: center;
  }
  padding: 0 15px;
`;
const Biography = styled.div`
  width: 60%;
  box-sizing: border-box;
  @media (${devices.tablet}) {
    width: 100%;
    padding-left: 0;
  }
`;
const Title = styled.h1`
  font-size: 36px;
  color: #262630;
`;
const Social = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 15px;
`;
const InfoUnPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
`;
const SocialIcon = styled.img`
  height: 50px;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    transform: scale(1.1);
    transition: 300ms;
  }
`;
const BioMe = styled.p`
  font-family: PlayFair-Regular;
  font-size: calc(13px + 7 * (100vw / 1244));
  line-height: 1.9em;
  text-align: justify;
`;
const Russia = styled.img`
  height: 50px;
`;
const Name = styled.h2`
  margin: 0;
  padding: 0;
  font-family: PlayFair-Regular;
  color: #614d28;
  letter-spacing: 2px;
`;
const About = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = photo2;
    img.onload = () => {
      setLoad(true);
    };
  }, [load]);

  const [rotate, setRotate] = useState("");
  const [mePhoto, setPhoto] = useState(photo1);
  const change = () => {
    if (mePhoto === photo1 && load) {
      setRotate("rotateY(-0.25turn)");
      setTimeout(() => {
        setPhoto(photo2);
        setRotate("rotateY(0turn)");
      }, 300);
    } else if (mePhoto === photo2) {
      setRotate("rotateY(0.25turn)");
      setTimeout(() => {
        setPhoto(photo1);
        setRotate("rotateY(0turn)");
      }, 300);
    }
  };

  return (
    <Container>
      <AboutMe>
        <PhotoBlockContainer>
          <PhotoBlock>
            <Photo
              src={mePhoto}
              onClick={change}
              style={{ transform: rotate }}
            />
          </PhotoBlock>
          <InfoUnPhoto>
            <Name>Kirill</Name>
            <Social>
              <a href="https://vk.com/feed" target="a_blank">
                <SocialIcon src={vk} />
              </a>
              <a href="https://github.com/Nelerion" target="a_blank">
                <SocialIcon src={github} />
              </a>
            </Social>
            <Russia src={russia} />
          </InfoUnPhoto>
        </PhotoBlockContainer>
        <Biography>
          <Title>Biography</Title>
          <BioMe>
            I am a beginner frontend developer. Every day I try to improve my
            skills. I first tried frontend when I was young, but consciously
            decided to do it in 2021. Now I'm looking for my first job as a
            junior frontend. I don't have an IT education, but that doesn't stop
            me from learning and creating something new. My first job was
            related to cutting diamonds into brilliants. I then worked as a gem
            and metal appraiser. as Leading Expert
          </BioMe>
        </Biography>
      </AboutMe>
    </Container>
  );
};

export default About;
