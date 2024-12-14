import * as S from './Avatar.module.css';

export const Avatar = ({hasBorder = true, src}) => {
    return (
        <img
            className={`${S.avatar} ${hasBorder ? S.avatarWithBorder : ""}`}
            src={src}
        />
    )
}