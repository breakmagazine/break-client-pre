/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, MouseEventHandler, SetStateAction, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '@break/styles/theme/theme';
import Image from 'next/image';
import Year from '../../../assets/svg/c2023.svg';
import { RowImage } from './RowImage';
import { Flex, Line, Space, Text, VerticalLine } from '@break/components/common/common';
import Bulgogidisco from '../../../pages/bulgogidisco/index';
import { useRouter } from 'next/router';
import MenubarLogo from '../../../assets/svg/menubar-logo.svg';

export interface MenubarProps {
    // handleCancelButtonClick?: MouseEventHandler<HTMLButtonElement>;
    // handleUploadButtonClick?: MouseEventHandler<HTMLButtonElement>;
    menubarShow: boolean;
    setMenubarShow: Dispatch<SetStateAction<boolean>>;
}

/**
 *
 * @param handleCancelButtonClick?: MouseEventHandler<HTMLButtonElement>
 * @param handleUploadButtonClick?: MouseEventHandler<HTMLButtonElement>
 */

const IMG_SRC = {
    article: [
        'https://github.com/breakmagazine/break-client/assets/103591752/3bee40d0-4916-49a9-a46c-116a49cde929',
        'https://github.com/breakmagazine/break-client/assets/103591752/56332e25-fa2d-4dd2-8423-a94d28837ff4',
        'https://github.com/breakmagazine/break-client/assets/103591752/e7ae069c-d0f2-4146-8b42-b1006d56f199',
        'https://github.com/breakmagazine/break-client/assets/103591752/6e0fb435-529f-43ff-95fc-dea862595c69',
    ],
    bulgogidisco: [
        'https://github.com/breakmagazine/break-client/assets/103591752/95ffae77-fd0a-4fff-b11c-8ea1b2c6221c',
        'https://github.com/breakmagazine/break-client/assets/103591752/8bab7155-5bf7-4092-8d46-4736adb0c7d3',
        'https://github.com/breakmagazine/break-client/assets/103591752/161a8fc4-70c2-4d8f-8b26-cf50da3427f9',
        'https://github.com/breakmagazine/break-client/assets/103591752/5fbe8439-add7-419a-bc6d-6df42d6a9bb2',
    ],
};

export const Menubar = (props: MenubarProps) => {
    const [currentImage, setCurrentImage] = useState([IMG_SRC.article[0], IMG_SRC.article[1]]);
    const router = useRouter();

    const handleArticleHover = () => {
        const array = [0, 1, 2, 3];
        const shuffledArray = array.sort(() => 0.5 - Math.random()); // 배열 섞기
        const selectedIndices = shuffledArray.slice(0, 2); // 앞에서부터 2개 인덱스 선택

        setCurrentImage([IMG_SRC.article[selectedIndices[0]], IMG_SRC.article[selectedIndices[1]]]);
    };
    const handleBulgogidiscoHover = () => {
        const array = [0, 1, 2, 3];
        const shuffledArray = array.sort(() => 0.5 - Math.random()); // 배열 섞기
        const selectedIndices = shuffledArray.slice(0, 2); // 앞에서부터 2개 인덱스 선택

        setCurrentImage([IMG_SRC.bulgogidisco[selectedIndices[0]], IMG_SRC.bulgogidisco[selectedIndices[1]]]);
    };

    return (
        <>
            <MenubarContent>
                <RowImage img={currentImage} />
                <Title direction="column" align="flex-start" justify="flex-start">
                    <Space height={3.95} />
                    <Text
                        className="article"
                        typo="Category"
                        onClick={() => router.push('/article')}
                        onMouseOver={() => handleArticleHover()}
                    >
                        Article
                    </Text>
                    <Space height={8.33} />
                    <Text
                        className="bulgogidisco"
                        typo="Category"
                        onClick={() => router.push('/bulgogidisco')}
                        onMouseOver={() => handleBulgogidiscoHover()}
                    >
                        BULGOGIDISCO
                    </Text>
                </Title>
                <Content direction="column" align="flex-start" justify="flex-start">
                    <Space height={3.95} />
                    <Text
                        className="article"
                        typo="Title2"
                        onClick={() => router.push('/article')}
                        onMouseOver={() => handleArticleHover()}
                    >
                        CHAPTER 2
                    </Text>
                    <Space height={0.486} />
                    <Text
                        className="article"
                        typo="Body2"
                        onClick={() => router.push('/article')}
                        onMouseOver={() => handleArticleHover()}
                    >
                        지극히 사적인 순간
                    </Text>
                    <Space height={5.41} />
                    <Text
                        className="bulgogidisco"
                        typo="Title2"
                        onClick={() => router.push('/bulgogidisco')}
                        onMouseOver={() => handleBulgogidiscoHover()}
                    >
                        火合
                    </Text>
                    <Space height={0.486} />
                    <Text
                        className="bulgogidisco"
                        typo="Body2"
                        onClick={() => router.push('/bulgogidisco')}
                        onMouseOver={() => handleBulgogidiscoHover()}
                    >
                        계속 뭉그적거리고만 있을 수는 없잖아. 불살라 버리는 거야. 모두 함께 춤을 추자!
                        <br /> 경계선을 허무는 록 밴드 불고기디스코와 뜨겁게 화합(火合)하다.
                    </Text>
                </Content>
            </MenubarContent>
            <MenubarWrapper>
                <Year className="year" />
            </MenubarWrapper>
            <BackDropWrapper>
                <BackDrop
                    priority
                    src="https://github.com/breakmagazine/break-client/assets/103591752/551bd1ab-bce9-42eb-82f8-a1336f72e410"
                    alt=""
                    width={1473}
                    height={2209}
                    onClick={() => props.setMenubarShow(false)}
                />
                <MenubarLogo className="menubar-logo" />
            </BackDropWrapper>
        </>
    );
};

const BackDropWrapper = styled.div`
    width: 100vw;
    height: 100%;

    overflow: hidden;

    .menubar-logo {
        position: absolute;

        width: 12.84vw;
        height: 12.84vw;

        right: 5.2vw;
        bottom: 5vw;

        z-index: 150001;
    }
`;

const Title = styled(Flex)`
    width: 14.3vw;

    border-left: 0.076vw solid #000;
    border-right: 0.076vw solid #000;

    padding: 0 2.84vw 0 0.902vw;
`;

const Content = styled(Flex)`
    width: 100%;

    padding-left: 1.11vw;
`;

const MenubarContent = styled.div`
    z-index: 16001;

    width: 100%;
    height: 39.58vw;

    display: flex;
    justify-content: flex-start;

    background-color: #fff;

    position: absolute;
    top: 0;

    border: 0.076vw solid #000;
    border-radius: 0 0 3.47vw 3.47vw;

    animation-name: falling;
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
    opacity: 0;

    @keyframes falling {
        from {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .article {
        cursor: pointer;
    }

    .bulgogidisco {
        cursor: pointer;
    }

    box-shadow: ${theme.shadow.Large};
`;

const MenubarWrapper = styled.div`
    z-index: 16000;

    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */

    width: 100%;
    height: 51.319vw;

    position: absolute;
    top: 0;

    background-color: #fff;

    border: 0.076vw solid #000;
    border-radius: 0 0 3.47vw 3.47vw;

    .year {
        position: absolute;

        width: 45.97vw;
        height: 10.902vw;

        left: 3.95vw;
        bottom: 2.22vw;
    }

    animation-name: falling;
    animation-duration: 0.5s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;

    @keyframes falling {
        from {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    box-shadow: ${theme.shadow.Large};
`;

const BackDrop = styled(Image)`
    z-index: 15000;

    width: 102.29vw;
    height: auto;

    position: absolute;
    left: -0.416vw;
    top: 21.597vw;

    background: rgba(0, 0, 0, 0.8);

    cursor: pointer;
`;

const Img = styled.img`
    width: 587px;
    height: 368px;
    background-color: transparent;
`;

const ConfirmText = styled.div`
    margin-top: 38px;
    height: 17px;
`;

const CautionText = styled.div`
    margin-top: 30px;
    margin-bottom: 60px;

    height: 11px;

    ${theme.typo.Body1}
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
`;
