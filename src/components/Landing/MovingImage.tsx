import { css } from '@emotion/css';
import styled from '@emotion/styled';
import Image from 'next/image';
<Image className="item image1" src="" alt="" />;

interface MovingImageProps {
    img: string[];
    border: BorderRadius;
}

export type BorderRadius = number | [number, number] | [number, number, number, number];

/**
 * @param image 이미지 이름: string[]
 * @param border 이미지 borderRadius
 * number
 * [number,number]
 * [number,number,number,number]
 */
export const MovingImage = ({ img, border, ...props }: MovingImageProps) => {
    return (
        <Wrapper border={border}>
            <Image
                className="image"
                loading="lazy"
                src={img[Math.floor(Math.random() * img.length)]}
                alt=""
                width={718}
                height={912}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div<{
    border: BorderRadius;
}>`
    width: 49.86vw;
    height: 62.63vw;

    background-color: #000;

    .image {
        ${({ border }) => css`
            border-radius: ${typeof border === 'number'
                ? `${border}vw`
                : border.length === 2
                ? `${border[0]}vw ${border[1]}vw`
                : `${border[0]}vw ${border[1]}vw ${border[2]}vw ${border[3]}vw`};
        `}

        width: 100%;
        height: 100%;

        border: none;
    }
`;
