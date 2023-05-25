import Logo from '../../assets/svg/break-logo.svg';
import MenuButton from '../../assets/svg/menubar-button.svg';
import LowerMenuButton from '../../assets/svg/menubar-button-lower.svg';
import styled from '@emotion/styled';
import { Flex, Line, Space, VerticalLine } from '../common/common';
import { MovingImage } from './MovingImage';
import { UpperTextArea } from './UpperTextArea';
import { UpperCTAArea } from './UpperCTAArea';
import { LowerTextArea } from './LowerTextArea';
import { LowerCTAArea } from './LowerCTAArea';
import { MovingText } from './MovingText';

const IMG_SRC = {
    upper: ['/images/upper1.png', '/images/upper2.png', '/images/upper3.png', '/images/upper4.png'],
    lower: ['/images/lower1.png', '/images/lower2.png', '/images/lower3.png', '/images/lower4.png'],
};

export const Landing = () => {
    return (
        <Wrapper>
            <Line />
            <Flex align="flex-start" justify="flex-start">
                <Flex className="item item1" direction="column" align="flex-start" justify="space-between">
                    <Flex align="flex-start">
                        <Logo className="item logo" />
                    </Flex>
                    <LowerMenuButton className="item menu-button-lower" />
                </Flex>
                <div>
                    <Flex align="flex-start" justify="space-between">
                        <div className="item item2">2023</div>
                        <div className="item item3">
                            <MenuButton className="item menu-button" />
                        </div>
                    </Flex>
                    <Line />
                    <Flex align="flex-start" justify="flex-start">
                        <MovingImage img={IMG_SRC.upper} border={[6.25, 0, 0, 0]} />
                        <div>
                            <UpperTextArea />
                            <UpperCTAArea />
                        </div>
                    </Flex>
                    <Line />
                    <Flex align="flex-start" justify="flex-start">
                        <div>
                            <LowerTextArea />
                            <LowerCTAArea />
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
            <Space height={3} />
            <Line />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100vw;
    height: 162vw;

    box-sizing: border-box;

    position: relative;

    .item1 {
        width: 10.06vw;
        height: 100%;
        padding-top: 2.98vw;

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

        .menu-button {
            position: absolute;
            top: 0;
            right: 0;

            width: 6.59vw;
            height: 5.13vw;

            cursor: pointer;
        }
    }

    /* .item4 {
        width: 40.08vw;
        height: 55.13vw;
        background-color: gray;
    } */

    .item5 {
        grid-row: 2 / 3;
        grid-column: 3 / 4;
        background-color: blue;
    }

    .item6 {
        grid-row: 3 / 4;
        grid-column: 3 / 4;
        background-color: navy;
    }

    .item7 {
        grid-row: 4 / 5;
        grid-column: 2 / 3;
        background-color: purple;
    }

    .item8 {
        grid-row: 5 / 6;
        grid-column: 2 / 3;
        background-color: pink;
    }

    .item9 {
        grid-row: 4 / 6;
        grid-column: 3 / 4;
        background-color: skyblue;
    }

    .item10 {
        grid-row: 4 / 6;
        grid-column: 3 / 4;
        background-color: skyblue;
    }
`;
