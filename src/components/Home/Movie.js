import styled from "styled-components";
import { theme } from "../../styles/ThemeStyles";
import capaImage from "../../assets/capa.png";
import clockImage from "../../assets/clock.svg";
import starImage from "../../assets/star.svg";
import starEmptyImage from "../../assets/starEmpty.svg";

const Movie = () => {
    return(
        <Container>
            <Capa src={capaImage} alt="capa" />
            <AreaMovie>
                <Description>Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston) retoma seu papel como o Deus do Mal em uma nova série que ocorre após os eventos de “Vingadores: Endgame”.</Description>
                <TopRated>
                    <ClockArea>
                        <Clock src={clockImage} alt="clock" />
                        <Time>51min</Time>
                    </ClockArea>
                    <StarArea>
                        <Star src={starImage} alt="star" />
                        <Star src={starImage} alt="star" />
                        <Star src={starImage} alt="star" />
                        <Star src={starImage} alt="star" />
                        <Star src={starEmptyImage} alt="star" />
                    </StarArea>
                    <Year>2021</Year>
                </TopRated>
                <Buttons>
                    <Play href="#">ASSISTIR AGORA</Play>   
                    <Trailer href="#">TRAILER</Trailer>              
                </Buttons>
            </AreaMovie>
        </Container>
    );
}

const baseButtonStyle = `
    border-radius: 0.25rem;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
`;

const Container = styled.div`
    display: flex;
    gap: 4.5rem;
    justify-content: center;
    margin-top: 7.5rem;
`;

const Capa = styled.img`
    border-radius: 1.25rem;
    margin-left: 1rem;
`;

const AreaMovie = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 45rem;
    margin-right: 1rem;
`;

const Description = styled.p`
`;

const TopRated = styled.div`
    display: flex;
    gap: 6rem;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.5rem;
    max-width: 33rem;
`;

const ClockArea = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Clock = styled.img``;

const Time = styled.p``;

const StarArea = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const Star = styled.img``;

const Year = styled.p``;

const Buttons = styled.div`
    display: flex;
    gap: 1.25rem;
    margin-top: 2.5rem;
`;

const Play = styled.a`
    ${baseButtonStyle}
    background-color: ${theme.colors.Blue};
    padding: 1rem 1.75rem;
`;

const Trailer = styled.a`
    ${baseButtonStyle}
    background-color: ${theme.colors.Dark};
    padding: 1rem 1.5rem;
    border: solid 1px ${theme.colors.Primary};
`;  

export default Movie;