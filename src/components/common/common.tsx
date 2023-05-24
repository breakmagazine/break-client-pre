import { KeyOfTypo, theme } from '@break/styles/theme/theme';
import styled from '@emotion/styled';

export const Space = styled.div<{
    height: number;
}>`
    height: ${({ height }) => `${height}vw`};
`;

export const Flex = styled.div<{
    direction?: string;
    justify?: string;
    align?: string;
    gap?: number;
    width?: number;
    height?: number;
}>`
    display: flex;
    flex-direction: ${({ direction }) => (direction ? `${direction}` : 'row')};
    justify-content: ${({ justify }) => (justify ? `${justify}` : 'center')};
    align-items: ${({ align }) => (align ? `${align}` : 'center')};
    gap: ${({ gap }) => (gap ? `${gap}vw` : '0px')};

    width: ${({ width }) => (width ? `${width}vw` : '100%')};
    height: ${({ height }) => (height ? `${height}vw` : '100%')};
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
}>`
    ${({ typo }) => theme.typo[typo]};
    color: #000;

    display: flex;
    align-items: center;
`;
