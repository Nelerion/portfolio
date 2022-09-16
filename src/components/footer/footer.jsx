import styled from "styled-components";
import arrow from "./../../img/arrow.png";
const FooterBlock = styled.footer`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;
const ByMe = styled.span`
  font-family: PlayFair-regular;
  font-size: 20px;
`;
const OptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;
const ArrowTop = styled.img`
  height: 50px;
  transition: 200ms;
  &:hover {
    transition: 200ms;
    transform: scale(1.1);
  }
`;

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <FooterBlock>
      <OptionBlock>
        <ByMe>© Nelerion</ByMe>
        <ArrowTop src={arrow} onClick={scrollTop} />
      </OptionBlock>
    </FooterBlock>
  );
};

export default Footer;
