import React from "react";
import {ModalWindow} from "./ModalWindow";
import {IconHeader} from "./IconHeader";

export const Header: React.FC = () => {

    return (
        <header className='header'>
            <div className='header__logo'>
                <img alt='Virtus' src={require('../../../assets/images/logo.png')}/>
            </div>

            <div className='nav-bar header__nav-bar'>
                <ModalWindow/>
                <IconHeader/>
            </div>
        </header>
    );
};



