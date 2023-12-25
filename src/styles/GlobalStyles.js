import { createGlobalStyle } from 'styled-components';
import { theme } from '../styles/ThemeStyles';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'B612', sans-serif;
        color: ${theme.colors.Primary};
    }
`;

export default GlobalStyles;