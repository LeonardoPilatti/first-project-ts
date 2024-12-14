import * as S from './Avatar.module.css';

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
    src: string;
}

export const Avatar = ({hasBorder = true, src, alt}: AvatarProps) => {
    return (
        <img
            className={`${S.avatar} ${hasBorder ? S.avatarWithBorder : ""}`}
            src={src}
        />
    )
}