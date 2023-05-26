/* eslint-disable react-hooks/exhaustive-deps */
import { Flex } from '@break/components/common/common';
import styled from '@emotion/styled';
import Image from 'next/image';

export const RowImage = ({ img }: { img: string[] }) => {
    return (
        <StyledFlex gap={1.59} align="flex-start" justify="flex-start">
            <Img src={img[0]} alt="" width={285} height={428} />
            <Img src={img[1]} alt="" width={285} height={428} />
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
