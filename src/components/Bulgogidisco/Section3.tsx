import styled from '@emotion/styled';
import { Flex, Space, Text } from '../common/common';
import Image from 'next/image';
import { Interview } from './Interview';
import interviewJson from '../Bulgogidisco/interview.json';

export const Section3 = () => {
    const IMG_SRC = [
        'https://github.com/breakmagazine/break-client/assets/103591752/87d70b12-a96d-4988-af5e-3eeaec841172',
        'https://github.com/breakmagazine/break-client/assets/103591752/0d735f6f-1fef-4b3d-acc0-fd58d00a3d6b',
    ];
    const interviewData = interviewJson;

    return (
        <Wrapper direction="column" align="center" justify="flex-start">
            <Space height={93.95} />
            <Flex gap={6.52} className="section3-interview0" direction="column" justify="flex-start">
                <Interview
                    title={interviewData.interview9.question}
                    description={interviewData.interview9.answer}
                    titleColor="#fff"
                    descriptionColor={'#DADADA'}
                />
                <Interview
                    title={interviewData.interview10.question}
                    description={interviewData.interview10.answer}
                    titleColor="#fff"
                    descriptionColor={'#DADADA'}
                />
            </Flex>
            <Image priority className="section3-img0" alt="" width={876} height={1313} src={IMG_SRC[0]} />
            <Space height={157.08} />
            <Flex className="section3-interview1" direction="column" justify="flex-start">
                <Interview title={interviewData.interview11.question} description={interviewData.interview11.answer} />
            </Flex>
            <ImageWrapper>
                <Interview
                    className="text"
                    title={interviewData.interview12.question}
                    description={interviewData.interview12.answer}
                    titleColor="#fff"
                    descriptionColor={'#DADADA'}
                />
                <Image priority className="section3-img1" alt="" width={1440} height={2156} src={IMG_SRC[1]} />
            </ImageWrapper>
        </Wrapper>
    );
};

const Wrapper = styled(Flex)`
    .typo {
        background-color: pink;
    }
    position: relative;

    width: 100%;
    height: auto;

    box-sizing: border-box;

    overflow: hidden;

    .section3-interview0 {
        position: absolute;

        width: 64.72vw;
        height: 93.95vw;

        left: -4.375vw;

        background: rgba(0, 0, 0, 0.8);

        box-sizing: border-box;
        padding: 7.36vw 3.95vw 0vw 8.47vw;

        z-index: 2;
    }

    .section3-img0 {
        position: absolute;

        width: 60.833vw;
        height: auto;

        top: 10.13vw;
        right: -10.48vw;
    }

    .section3-interview1 {
        position: absolute;

        width: 60.69vw;
        height: 106.73vw;

        top: 91.59vw;
        right: 0;

        background: rgba(255, 255, 255, 0.8);

        box-sizing: border-box;
        padding: 4.58vw 4.722vw 0vw 3.95vw;

        z-index: 2;
    }

    .section3-img1 {
        position: absolute;

        width: 100vw;
        height: auto;

        bottom: 0;
        left: -4.72vw;
    }
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 100vw;

    .text {
        position: absolute;

        bottom: 8.819vw;
        left: 2.76vw;

        width: 45.2vw;
        z-index: 600;
    }
`;
