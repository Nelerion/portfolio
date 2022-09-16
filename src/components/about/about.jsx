import styled from "styled-components";
import photo1 from "./../../img/me.png";
import photo2 from "./../../img/me3.png";
import vk from "./../../img/vk.png";
import github from "./../../img/github.png";
import russia from "./../../img/russia.png";
import { useEffect, useState } from "react";
import {
  Name,
  Russia,
  BioMe,
  SocialIcon,
  InfoUnPhoto,
  Social,
  Title,
  Biography,
  AboutMe,
  Photo,
  PhotoBlock,
  PhotoBlockContainer,
  Container,
} from "./style";
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
            and metal appraiser as Leading Expert
          </BioMe>
        </Biography>
      </AboutMe>
    </Container>
  );
};

export default About;
