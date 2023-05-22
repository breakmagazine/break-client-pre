import Logo from '../../assets/svg/break-logo.svg';
import MenuButton from '../../assets/svg/menubar-button.svg';
import styled from '@emotion/styled';
import { Flex, Line } from '../common/common';
import { MovingImage } from './MovingImage';
import { UpperTextArea } from './UpperTextArea';
import { UpperCTAArea } from './UpperCTAArea';

export const Landing = () => {
    return (
        <Wrapper>
            <Flex align="flex-start" justify="flex-start">
                <div className="item item1">
                    <Logo className="item logo" />
                </div>
                <div>
                    <Flex align="flex-start" justify="space-between">
                        <div className="item item2">2023</div>
                        <div className="item item3">
                            <MenuButton className="item menu-button" />
                        </div>
                    </Flex>
                    <Line />
                    <Flex align="flex-start" justify="space-between">
                        <MovingImage img={['', '', '', '']} border={[6.25, 0, 0, 0]} />
                        <div>
                            <UpperTextArea />
                            <UpperCTAArea />
                            <Line />
                        </div>
                    </Flex>
                    <Flex align="flex-start" justify="space-between">
                        <div>
                            <UpperTextArea />
                            <UpperCTAArea />
                            <Line />
                        </div>
                        <MovingImage img={['', '', '', '']} border={[0, 0, 0, 6.25]} />
                    </Flex>
                </div>
            </Flex>
        </Wrapper>
    );
};

{
    /* <div>
<div className="item item4">4</div>
<div className="item item5">5</div>
<div className="item item6">6</div>
<div className="item item7">7</div>
<div className="item item8">8</div>
<div className="item item9">9</div>
<div className="item item9">10</div>
</div> */
}

const Wrapper = styled.div`
    width: 100vw;
    height: 152vw;

    box-sizing: border-box;

    /* grid-template-columns: 10.06vw, 17.15vw, 23.47vw;
    grid-template-rows: repeat(6, auto); */

    .item1 {
        width: 10.06vw;
        height: 100%;
        padding-top: 2.98vw;

        display: flex;
        justify-content: center;
        align-items: flex-start;

        border-right: 1.01px solid #000;

        .logo {
            width: 5.13vw;
            height: 19.44vw;
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

        border-right: 1.01px solid #000;
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
