import styled from '@emotion/styled';
import { Flex, Text } from '../common/common';

type MovingDirection = 'right' | 'left';

export const MovingText = ({ direction }: { direction: MovingDirection }) => {
    return (
        <Wrapper direction={direction}>
            <Flex className="flow-wrap" gap={3.33}>
                <Text className="flow-text" typo="MovingText">
                    NEW&nbsp;GEN&nbsp;LIFE&nbsp;&&nbsp;FASHION&nbsp;STYLE
                </Text>
                <Text className="flow-text" typo="MovingText">
                    NEW&nbsp;GEN&nbsp;LIFE&nbsp;&&nbsp;FASHION&nbsp;STYLE
                </Text>
                <Text className="flow-text" typo="MovingText">
                    NEW&nbsp;GEN&nbsp;LIFE&nbsp;&&nbsp;FASHION&nbsp;STYLE
                </Text>
                <Text className="flow-text" typo="MovingText">
                    NEW&nbsp;GEN&nbsp;LIFE&nbsp;&&nbsp;FASHION&nbsp;STYLE
                </Text>
            </Flex>
        </Wrapper>
    );
};

const Wrapper = styled.div<{ direction: MovingDirection }>`
    width: 89.94vw;

    .flow-wrap {
        display: flex;
        flex: 0 0 auto;
        white-space: nowrap;
        overflow: hidden;
    }

    .flow-text {
        animation: ${({ direction }) => `${direction}Loop`} 20s linear infinite;
    }

    @keyframes leftLoop {
        0% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        100% {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
        }
    }

    @keyframes rightLoop {
        100% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        0% {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
        }
    }
`;
