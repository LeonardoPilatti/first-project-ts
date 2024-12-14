import * as S from './Header.module.css'

import igniteLogo from '../../assets/ignite-logo.svg'

export const Header = () => {
    return (
        <header className={S.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
        </header>
    );
}