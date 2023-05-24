import styled from '@emotion/styled';
import Percentage from '../../assets/svg/percent.svg';
import { Flex } from '../common/common';
import { CTAButton } from './CTAButton';

export const LowerCTAArea = () => {
    return (
        <Wrapper gap={2.56} align="center" justify="flex-start">
            <Percentage className="percentage" />
            <CTAButton />
        </Wrapper>
    );
};

const Wrapper = styled(Flex)`
    .percentage {
        padding-left: 2.84vw;
        width: 3.68vw;
        height: 2.98vw;
    }

    height: 9.3vw;
`;
