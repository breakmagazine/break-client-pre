import styled from '@emotion/styled';
import { Flex, Line, Space, Text } from '../common/common';
import { TextSet } from './TextSet';

const TEXT = {
    Freedom: {
        title: 'Freedom',
        description: [
            'In the break, your imagination unfolds into reality.',
            'Breaker* works in a free environment where each person is respected, and creative planning is born underneath.',
        ],
    },
    Diversity: {
        title: 'Diversity',
        description: [
            "Don't discuss break without 'diversity'. ",
            'Breakers with different personalities gather to create unique content.',
        ],
    },
    Sense: {
        title: 'Sense',
        description: [
            'The content of the break stimulates the sixth sense beyond the five senses.',
            "We don't release content that doesn't stimulate anything beyond what you didn't know.",
        ],
    },
};

export const UpperTextArea = () => {
    return (
        <>
            <Wrapper direction="column">
                <Space height={1.66} />
                <Flex direction="column" gap={3.05}>
                    <TextSet title={TEXT.Freedom.title} description={TEXT.Freedom.description} />
                    <TextSet title={TEXT.Diversity.title} description={TEXT.Diversity.description} />
                    <TextSet title={TEXT.Sense.title} description={TEXT.Sense.description} />
                </Flex>
                <Space height={1.59} />
            </Wrapper>
            <Line />
        </>
    );
};

const Wrapper = styled(Flex)`
    width: 40.08vw;
    height: 55.106vw;

    padding: 0vw 2.01vw 0vw 1.94vw;
    box-sizing: border-box;
`;
