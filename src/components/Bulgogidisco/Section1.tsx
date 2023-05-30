import styled from '@emotion/styled';
import { Flex, Space, Text } from '../common/common';
import Image from 'next/image';
import Hwahap from '../../assets/svg/hwahap.svg';
import { Interview } from './Interview';
import interviewData from '../Bulgogidisco/interview.json';

export const Section1 = () => {
    const IMG_SRC = [
        'https://github.com/breakmagazine/break-client/assets/103591752/d403aa13-415a-477a-8f52-20028ada4751',
        'https://github.com/breakmagazine/break-client/assets/103591752/2c3679c4-ab27-4eca-9a0c-4b7ccf227095',
        'https://github.com/breakmagazine/break-client/assets/103591752/8a8c3f16-9a08-4ee1-9245-20e9a780f83e',
        'https://github.com/breakmagazine/break-client/assets/103591752/a6f47927-57bc-4234-af98-610c5065f870',
    ];
    return (
        <Wrapper direction="column" align="center" justify="flex-start">
            <Space height={78.05} />
            <Image priority className="img0" alt="" width={833} height={1124} src={IMG_SRC[0]} />
            <Flex className="heading" direction="column">
                <Text typo="BulgogiHeading" color="#fff">
                    계속 뭉그적거리고만 있을 수는 없잖아. 불살라 버리는 거야.
                </Text>
                <Text typo="BulgogiHeading" color="#fff">
                    모두 함께 춤을 추자!
                </Text>
                <Text typo="BulgogiHeading" color="#fff">
                    경계선을 허무는 록 밴드 불고기디스코와 뜨겁게 화합(火合)하다.
                </Text>
            </Flex>
            <Space height={13.47} />
            <Flex className="interview1" gap={1.805} direction="column" justify="flex-start">
                <Interview title={interviewData.interview1.question} description={interviewData.interview1.answer} />
                <Interview title={interviewData.interview2.question} description={interviewData.interview2.answer} />
            </Flex>
            <Space height={84.16} />
            <Flex className="interview2" gap={5} direction="column" justify="flex-start">
                <Interview
                    title={interviewData.interview3.question}
                    description={interviewData.interview3.answer}
                    titleColor="#fff"
                    descriptionColor={'#DADADA'}
                />
                <Interview
                    title={interviewData.interview4.question}
                    description={interviewData.interview4.answer}
                    titleColor="#fff"
                    descriptionColor={'#DADADA'}
                />
            </Flex>
            <Image priority className="img1" alt="" width={896} height={1341} src={IMG_SRC[1]} />
            <Space height={137.84} />
            <Image priority className="img3" alt="" width={896} height={1341} src={IMG_SRC[3]} />
            <Image priority className="img2" alt="" width={896} height={1341} src={IMG_SRC[2]} />
            <Flex className="interview3" direction="column" justify="flex-start">
                <Interview
                    title={interviewData.interview5.question}
                    description={interviewData.interview5.answer}
                    titleColor="#fff"
                    descriptionColor={'#DADADA'}
                />
            </Flex>
            <Flex className="interview4" direction="column" justify="flex-start">
                <Interview
                    title={interviewData.interview6.question}
                    description={interviewData.interview6.answer}
                    titleColor="#fff"
                    descriptionColor={'#DADADA'}
                />
            </Flex>
        </Wrapper>
    );
};

const Wrapper = styled(Flex)`
    position: relative;

    width: 100%;
    height: auto;

    box-sizing: border-box;

    overflow: hidden;
    .heading {
        position: absolute;

        top: 13.402vw;
    }

    .img0 {
        position: absolute;

        width: 61.32vw;
        height: 78.05vw;

        left: 6.59vw;
    }

    .interview1 {
        position: absolute;

        width: 60.97vw;
        height: 53.819vw;

        top: 37.708vw;
        right: 0;

        background-color: #fff;

        box-sizing: border-box;
        padding: 5.27vw 4.51vw 0vw 4.08vw;
    }

    .interview2 {
        position: absolute;

        width: 54.44vw;
        height: 84.16vw;

        top: 91.52vw;
        left: -5.138vw;

        box-sizing: border-box;
        padding: 4.79vw 7.91vw 0vw 9.65vw;

        background-size: cover;
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
            url(https://github.com/breakmagazine/break-client/assets/103591752/11eac482-f021-47f9-abd8-0c8304e03723);
    }
    .img1 {
        position: absolute;

        width: 62.22vw;
        height: 93.125vw;

        top: 85.97vw;
        right: -6.388vw;

        z-index: 2;
    }

    .interview3 {
        position: absolute;

        width: 61.18vw;
        height: 44.236vw;

        top: 175.69vw;

        background: rgba(0, 0, 0, 0.8);

        box-sizing: border-box;
        padding: 3.402vw 4.51vw 0vw 4.375vw;

        z-index: 3;
    }

    .img2 {
        position: absolute;

        width: 65.69vw;
        height: 93.125vw;

        top: 192.36vw;
        left: -15vw;
    }

    .img3 {
        position: absolute;

        width: 62.22vw;
        height: 93.125vw;

        top: 177.15vw;
        right: -12.91vw;
    }

    .interview4 {
        position: absolute;

        width: 49.305vw;
        height: 44.263vw;

        top: 270.27vw;
        right: 0;

        box-sizing: border-box;
        padding: 5.13vw 3.61vw 0vw 4.58vw;
    }
`;
