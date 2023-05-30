import styled from '@emotion/styled';
import { Flex, Space, Text } from '../common/common';
import Image from 'next/image';
import { Interview } from './Interview';
import interviewData from '../Bulgogidisco/interview.json';
import { Section2 } from './Section2';
import { Section3 } from './Section3';
import { Section4 } from './Section4';
import { Section5 } from './Section5';
import { Section1 } from './Section1';

export const BulgogidiscoPage = () => {
    return (
        <Wrapper direction="column" align="center" justify="flex-start">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
        </Wrapper>
    );
};

const Wrapper = styled(Flex)`
    background-color: #000;
    position: relative;

    width: 100vw;
    height: auto;
    box-sizing: border-box;

    overflow: hidden;
`;
