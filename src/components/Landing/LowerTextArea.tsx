import styled from '@emotion/styled';
import { Flex, Line, Space, Text } from '../common/common';
import { TextSet } from './TextSet';

const TEXT = {
    Passion: {
        title: 'Passion',
        description: [
            'Break is a magazine made by fearless people in their 20s. The passion of the outspoken breakers is also reflected in the results.',
        ],
    },
    Connection: {
        title: 'Connection',
        description: [
            "We are connected to you. Songs of artists I've liked, my outfit these days, and even the space I want to visit. You can find them all on the break.",
            'Break Magazine is an independent magazine covering a new generation of fashion and lifestyle. It is distributed free of charge through Tumblbuck and offline distribution.',
        ],
    },
    CatchPhrase: 'LET’S BREAK !',
};

export const LowerTextArea = () => {
    return (
        <>
            <Wrapper direction="column" align="flex-start" justify="flex-start">
                <Space height={1.66} />
                <Flex direction="column" gap={3.05}>
                    <TextSet title={TEXT.Passion.title} description={TEXT.Passion.description} />
                    <TextSet title={TEXT.Connection.title} description={TEXT.Connection.description} />
                </Flex>
                <Flex direction="column" align="flex-start" justify="flex-start">
                    <Space height={3.54} />
                    <Text typo="CatchPhrase">{TEXT.CatchPhrase}</Text>
                    <Space height={3.47} />
                </Flex>
            </Wrapper>
            <Line />
        </>
    );
};

const Wrapper = styled(Flex)`
    width: 40.08vw;
    height: 53.33vw;

    padding: 0vw 0.83vw 0vw 1.94vw;
    box-sizing: border-box;
`;
