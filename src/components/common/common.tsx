import { KeyOfTypo, theme } from '@break/styles/theme/theme';
import styled from '@emotion/styled';

export const Space = styled.div<{
    height?: number;
    width?: number;
}>`
    height: ${({ height }) => `${height}vw`};
    width: ${({ width }) => `${width}vw`};
`;

export const Flex = styled.div<{
    direction?: string;
    justify?: string;
    align?: string;
    gap?: number;
}>`
    display: flex;
    flex-direction: ${({ direction }) => (direction ? `${direction}` : 'row')};
    justify-content: ${({ justify }) => (justify ? `${justify}` : 'center')};
    align-items: ${({ align }) => (align ? `${align}` : 'center')};
    gap: ${({ gap }) => (gap ? `${gap}vw` : '0px')};
`;

export const Line = styled.div`
    width: 100%;
    border-bottom: 0.076vw solid #000;
`;

export const VerticalLine = styled.div`
    height: 100%;
    border-left: 0.076vw solid #000;
`;

export const Text = styled.p<{
    typo: KeyOfTypo;
    color?: string;
}>`
    ${({ typo }) => theme.typo[typo]};
    color: ${({ color }) => (color ? color : '#000')};

    display: flex;
    align-items: center;

    white-space: pre-wrap;
`;
