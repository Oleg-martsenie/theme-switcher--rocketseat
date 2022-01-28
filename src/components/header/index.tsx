import { shade, darken } from "polished";
import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from 'styled-components'

import { Container } from './style'

interface Props {
    toggleTheme(): void ;
}

export const Header: React.FC<Props> = ({toggleTheme}) => {
    const { color, title } = useContext(ThemeContext)

    return (
        <Container>
            Hello mundo

            <Switch 
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={45}
                handleDiameter={20}
                offColor={shade(.4, color.secundary)}
                onColor={color.onSwitch}
            />
        </Container>
    );
}

export default Header