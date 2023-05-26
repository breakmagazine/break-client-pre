import Logo from '../../assets/svg/break-logo.svg';
import MenuButton from '../../assets/svg/menubar-button.svg';
import MenuButtonHover from '../../assets/svg/menubar-button-hover.svg';
import LowerMenuButton from '../../assets/svg/menubar-button-lower.svg';
import styled from '@emotion/styled';
import { Flex, Line, Space, VerticalLine } from '../common/common';
import { MovingImage } from './MovingImage';
import { UpperTextArea } from './UpperTextArea';
import { UpperCTAArea } from './UpperCTAArea';
import { LowerTextArea } from './LowerTextArea';
import { LowerCTAArea } from './LowerCTAArea';
import { MovingText } from './MovingText';
import { useState } from 'react';
import { Menubar } from './Menubar';
import { useRouter } from 'next/router';

const IMG_SRC = {
    upper: [
        'https://github.com/breakmagazine/break-client/assets/103591752/92886c89-58a2-4687-8b30-34f2901d7d44',
        'https://github.com/breakmagazine/break-client/assets/103591752/5800c213-2714-4942-afc1-728f15d5f39b',
        'https://github.com/breakmagazine/break-client/assets/103591752/3bd5e1ea-4685-4678-8b71-1a3a4c1487b1',
        'https://github.com/breakmagazine/break-client/assets/103591752/97000352-5195-4d08-8806-f351844e5af9',
    ],
    lower: [
        'https://github.com/breakmagazine/break-client/assets/103591752/8bb6cc40-2844-4c6a-b2f2-a2874fa0632c',
        'https://github.com/breakmagazine/break-client/assets/103591752/c350363c-b698-4862-b897-4ff2a47b5125',
        'https://github.com/breakmagazine/break-client/assets/103591752/6910201f-149b-43dd-9d67-9e3caa6256cd',
        'https://github.com/breakmagazine/break-client/assets/103591752/c7531440-958e-45bd-bf7c-f7abe0ae0f34',
    ],
};

export const Landing = () => {
    const [menubarShow, setMenubarShow] = useState(false);
    const router = useRouter();

    return (
        <Wrapper>
            <Line />
            <Flex align="flex-start" justify="flex-start">
                <Flex className="item item1" direction="column" align="flex-start" justify="space-between">
                    <Flex justify="flex-start" align="center" direction="column">
                        <Space height={2.98} />
                        <Logo className="item logo" />
                    </Flex>
                    <LowerMenuButton className="item menu-button-lower" />
                </Flex>
                <div>
                    <Flex align="flex-start" justify="space-between">
                        <div className="item item2">2023</div>
                        <div className="item item3">
                            <StyledMenuButton>
                                <MenuButton className="item menu-button" onClick={() => setMenubarShow(true)} />
                                <MenuButtonHover
                                    className="item menu-button-hover"
                                    onClick={() => setMenubarShow(true)}
                                />
                            </StyledMenuButton>
                        </div>
                    </Flex>
                    <Line />
                    <Flex align="flex-start" justify="flex-start">
                        <MovingImage img={IMG_SRC.upper} border={[6.25, 0, 0, 0]} />
                        <div>
                            <UpperTextArea />
                            <UpperCTAArea handleButtonClick={() => router.push('/bulgogidisco')} />
                        </div>
                    </Flex>
                    <Line />
                    <Flex align="flex-start" justify="flex-start">
                        <div>
                            <LowerTextArea />
                            <LowerCTAArea handleButtonClick={() => router.push('/article')} />
                        </div>
                        <VerticalLine />
                        <MovingImage img={IMG_SRC.lower} border={[0, 0, 0, 6.25]} />
                    </Flex>
                    <Line />
                    <Flex direction="column">
                        <Space height={4.56} />
                        <MovingText direction={'right'} />
                        <Space height={2.75} />
                        <MovingText direction={'left'} />
                    </Flex>
                </div>
            </Flex>
            <Line />
            {menubarShow && <Menubar menubarShow={menubarShow} setMenubarShow={setMenubarShow} />}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100vw;
    height: 162.083333vw;

    box-sizing: border-box;

    position: relative;

    .item1 {
        width: 10.06vw;
        height: 162.083333vw;

        border-right: 0.076vw solid #000;

        .logo {
            width: 5.13vw;
            height: 19.44vw;
        }

        .menu-button-lower {
            width: 6.18vw;

            cursor: pointer;
        }
    }

    .item2 {
        width: 16.45vw;
        height: 8.95vw;

        font-family: Helvetica;
        font-weight: bold;
        font-size: 5.3vw;

        display: flex;
        justify-content: center;
        align-items: center;

        border-right: 0.076vw solid #000;
    }

    .item3 {
        width: 73.49vw;
        height: 8.95vw;
    }
`;

const StyledMenuButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 6.59vw;
    height: 5.13vw;

    cursor: pointer;

    .menu-button {
        opacity: 1;

        position: absolute;
        top: 0;
        right: 0;

        z-index: 1;
    }

    .menu-button-hover {
        opacity: 0;

        position: absolute;
        top: 0;
        right: 0;

        z-index: 0;
    }

    :hover {
        .menu-button {
            opacity: 0;
        }

        .menu-button-hover {
            opacity: 1;
        }
    }
`;
