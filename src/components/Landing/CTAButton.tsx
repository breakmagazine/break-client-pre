import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';
import CTA from '../../assets/svg/cta.svg';
import CTAHover from '../../assets/svg/cta-hover.svg';

/**
 * @default button: (button 태그 속성 그대로)
 *
 */
export const CTAButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <StyledButton {...props}>
            <CTA className="item cta" />
            <CTAHover className="item cta-hover" />
        </StyledButton>
    );
};

const StyledButton = styled.button`
    position: relative;

    /* display: flex;
    align-items: center; */

    .item {
        width: 17.5vw;
        height: 8vw;
    }

    .cta-hover {
        opacity: 0;

        position: absolute;
        left: 0;

        z-index: 1;

        :hover {
            opacity: 1;
        }
    }
`;
