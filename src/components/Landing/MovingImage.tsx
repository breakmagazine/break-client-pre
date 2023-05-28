import { css } from '@emotion/css';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useState, useEffect } from 'react';
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
    const [currentImage, setCurrentImage] = useState(img[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * img.length);
            const randomImage = img[randomIndex];

            setCurrentImage(randomImage);
        }, 3000); // 3초

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper border={border}>
            <Image className="image" src={currentImage} alt="" width={718} height={912} priority />
        </Wrapper>
    );
};

const Wrapper = styled.div<{
    border: BorderRadius;
}>`
    width: 49.86vw;
    height: 62.706vw;

    background-color: #000;

    border-right: 0.076vw solid #000;

    /* animation: fadeIn 0.3s ease-in;
    animation-fill-mode: both;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    } */

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
