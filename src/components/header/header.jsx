
import {
  LastLetter,
  LetterChangeColor,
  Border,
  Title,
  Header,
  HeaderBlock,
} from "./style";
const Head = () => {
  return (
    <Header>
      <HeaderBlock>
        <Border />
        <Title>
          <span style={{ color: "white" }}>N</span>
          <LetterChangeColor>E</LetterChangeColor>
          <LetterChangeColor>L</LetterChangeColor>
          <LetterChangeColor>E</LetterChangeColor>
          <LetterChangeColor>R</LetterChangeColor>
          <LetterChangeColor>I</LetterChangeColor>
          <LetterChangeColor>O</LetterChangeColor>
          <LastLetter>N</LastLetter>
        </Title>
        <Border />
      </HeaderBlock>
    </Header>
  );
};

export default Head;
