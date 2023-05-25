import { Flex } from '@break/components/common/common';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

export const RowImage = () => {
    return (
        <StyledFlex gap={1.59} align="flex-start" justify="flex-start">
            <Img src="" alt="" />
            <Img src="" alt="" />
        </StyledFlex>
    );
};

const StyledFlex = styled(Flex)`
    margin-top: 3.95vw;
    margin-left: 2.22vw;

    width: auto;
    height: auto;
`;

const Img = styled(Image)`
    background-color: #000;

    width: 19.79vw;
    height: 29.72vw;

    border: 0.076 solid #000;
`;
