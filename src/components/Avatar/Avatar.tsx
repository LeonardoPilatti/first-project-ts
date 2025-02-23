import * as S from './Avatar.module.css';

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export const Avatar = ({hasBorder = true, ...props}: AvatarProps) => {
    return (
        <img
            className={`${S.avatar} ${hasBorder ? S.avatarWithBorder : ""}`}
            {...props}
        />
    )
}