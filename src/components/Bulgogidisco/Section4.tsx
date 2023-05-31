import styled from '@emotion/styled';
import { Flex, Space, Text } from '../common/common';
import Image from 'next/image';
import { Interview } from './Interview';
import interviewJson from '../Bulgogidisco/interview.json';

export const Section4 = () => {
    const IMG_SRC = [
        'https://github.com/breakmagazine/break-client/assets/103591752/681a84c5-281b-49c7-af50-220f036992e9',
        'https://github.com/breakmagazine/break-client/assets/103591752/eca8b2a1-b5d3-4c9b-97ce-b3135f4bcca8',
        'https://github.com/breakmagazine/break-client/assets/103591752/6fba8425-6db4-4191-9a1e-9f474d9077cf',
        'https://github.com/breakmagazine/break-client/assets/103591752/39ee1b29-32ab-4890-9089-11cf44e33a1b',
        'https://github.com/breakmagazine/break-client/assets/103591752/77b1c2f5-78e0-47bb-bb51-1a161486f6fc',
        'https://github.com/breakmagazine/break-client/assets/103591752/8f735b99-9218-42cd-aa77-24ea91adad70',
    ];
    const interviewData = interviewJson;

    return (
        <Wrapper direction="column" align="center" justify="flex-start">
            <Space height={141.18} />
            <Image className="section4-img0" alt="" width={1036} height={1551} src={IMG_SRC[0]} />
            <Flex className="section4-interview0" direction="column" justify="flex-start">
                <Interview
                    title={interviewData.interview13.question}
                    description={interviewData.interview13.answer}
                    titleColor="#fff"
                    descriptionColor={'#DADADA'}
                />
            </Flex>
            <Interview
                className="section4-interview1"
                title={interviewData.interview14.question}
                description={interviewData.interview14.answer}
                titleColor="#fff"
                descriptionColor={'#DADADA'}
            />
            <Image className="section4-img1" alt="" width={1440} height={2156} src={IMG_SRC[1]} />
            <Image className="section4-img2" alt="" width={758} height={1135} src={IMG_SRC[2]} />
            <Space height={41.04} />
            <Interview
                className="section4-interview2"
                title={interviewData.interview15.question}
                description={interviewData.interview15.answer}
                titleColor="#fff"
                descriptionColor={'#DADADA'}
            />
            <Interview
                className="section4-interview3"
                title={interviewData.interview16.question}
                description={interviewData.interview16.answer}
            />
            <Space height={63.4} />
            <Image className="section4-img3" alt="" width={1440} height={2156} src={IMG_SRC[3]} />
            <Image className="section4-img4" alt="" width={1440} height={2156} src={IMG_SRC[4]} />
            <Image className="section4-img5" alt="" width={1440} height={2156} src={IMG_SRC[5]} />
        </Wrapper>
    );
};

const Wrapper = styled(Flex)`
    position: relative;

    width: 100%;
    height: auto;

    box-sizing: border-box;

    overflow: hidden;

    .section4-img0 {
        position: absolute;

        width: 71.94vw;
        height: 107.708vw;

        top: 0;
        left: -9.65vw;
    }

    .section4-interview0 {
        position: absolute;

        width: 52.22vw;

        top: 6.52vw;
        right: 0;

        background: rgba(0, 0, 0, 0.8);

        box-sizing: border-box;
        padding: 6.52vw 4.51vw 3.6vw 4.79vw;

        z-index: 2;
    }

    .section4-interview1 {
        position: absolute;

        width: 52.29vw;
        height: 22.84vw;

        top: 112.77vw;
        left: 4.51vw;
    }

    .section4-img1 {
        width: 100vw;
        height: auto;
    }

    .section4-img2 {
        position: absolute;

        width: 52.63vw;
        height: 78.819vw;

        top: 255.97vw;
        right: 0;

        z-index: 2;
    }

    .section4-interview2 {
        position: absolute;

        width: 50.34vw;
        height: 11.66vw;

        top: 311.59vw;
        left: 4.51vw;

        z-index: 3;
    }

    .section4-interview3 {
        position: absolute;

        width: 57.63vw;
        /* height: 21.52vw; */

        top: 326.66vw;
        left: 0;

        z-index: 3;

        box-sizing: border-box;
        padding: 3.61vw 1.73vw 4.3vw 4.51vw;

        background-color: #fff;
    }

    .section4-img3 {
        position: absolute;

        width: 31.25vw;
        height: auto;

        left: -5.13vw;
        bottom: 0;
    }

    .section4-img4 {
        position: absolute;

        width: 31.52vw;
        height: auto;

        left: 26.11vw;
        bottom: 0;
    }

    .section4-img5 {
        position: absolute;

        width: 42.37vw;
        height: auto;

        right: 0;
        bottom: 0;
    }
`;
