/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, MouseEventHandler, SetStateAction, useEffect } from 'react';
import styled from '@emotion/styled';
import { theme } from '@break/styles/theme/theme';
import Image from 'next/image';
import Year from '../../../assets/svg/c2023.svg';
import { RowImage } from './RowImage';
import { Flex, Line, Space, Text, VerticalLine } from '@break/components/common/common';

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

export const Menubar = (props: MenubarProps) => {
    useEffect(() => {
        // mount

        return () => {
            // unmount
            // props.setMenubarShow(false);
        };
    }, []);

    return (
        <>
            <MenubarContent>
                <RowImage />
                <Title direction="column" align="flex-start" justify="flex-start">
                    <Space height={3.95} />
                    <Text typo="Category">Article</Text>
                    <Space height={8.33} />
                    <Text typo="Category">BULGOGIDISCO</Text>
                </Title>
                <Content direction="column" align="flex-start" justify="flex-start">
                    <Space height={3.95} />
                    <Text typo="Title2">CHAPTER 2</Text>
                    <Space height={0.486} />
                    <Text typo="Body2">지극히 사적인 순간</Text>
                    <Space height={5.41} />
                    <Text typo="Title2">火合</Text>
                    <Space height={0.486} />
                    <Text typo="Body2">
                        계속 뭉그적거리고만 있을 수는 없잖아. 불살라 버리는 거야. 모두 함께 춤을 추자!
                        <br /> 경계선을 허무는 록 밴드 불고기디스코와 뜨겁게 화합(火合)하다.
                    </Text>
                </Content>
            </MenubarContent>
            <MenubarWrapper>
                <Year className="year" />
            </MenubarWrapper>
            <BackDrop src="" alt="" onClick={() => props.setMenubarShow(false)} />
            {/* <Line /> */}
        </>
    );
};

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
`;

const BackDrop = styled(Image)`
    z-index: 15000;

    width: 100vw;
    height: 162.083333vw;

    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: rgba(14, 14, 14, 0.5);

    cursor: pointer;

    box-sizing: border-box;
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
