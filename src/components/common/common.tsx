import styled from '@emotion/styled';

export const Space = styled.div<{
    height: number;
}>`
    height: ${({ height }) => `${height}px`};
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
    gap: ${({ gap }) => (gap ? `${gap}px` : '0px')};

    width: ${({ width }) => (width ? `${width}px` : '100%')};
    height: ${({ height }) => (height ? `${height}px` : '100%')};
`;

export const Line = styled.div`
    width: 100%;
    border-bottom: 1.1px solid #000;
`;
