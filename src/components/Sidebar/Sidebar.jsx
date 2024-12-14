import { PencilLine } from "@phosphor-icons/react";

import * as S from './Sidebar.module.css'

import capaImg from '../../assets/capa.png'
import { Avatar } from "../Avatar/Avatar";

export const Sidebar = () => {
    return (
        <aside className={S.sidebar}>
            <img
                className={S.cover}
                src={capaImg}
            />

            <div className={S.profile}>
                <Avatar src="https://github.com/LeonardoPilatti.png" />
                <strong>Leonardo Pilatti</strong>
                <span>Frontend Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}