import styled from "styled-components";
import { theme } from "../../styles/ThemeStyles"

const Title = () => {
    return (
        <Container>
            <Disponivel>está disponível agora!</Disponivel>
            <TitleMovie>loki</TitleMovie>
        </Container>
    );
}

const baseTextStyle = `
  text-transform: uppercase;
  font-weight: bold;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
`;

const TitleMovie = styled.h1`
    ${baseTextStyle}
    font-size: 6rem;
`;

const Disponivel = styled.h2`
    margin-top: 2.5rem;
    ${baseTextStyle}
    font-size: 1.25rem;
`;

export default Title;