/* eslint-disable react/jsx-key */
import styled from '@emotion/styled';
import Image from 'next/image';
import { Flex, Space, Text } from '../common/common';
import { InfoTextSet } from './InfoTextSet';

export const ArticlePage = () => {
    const IMG_SRC = [
        'https://github.com/breakmagazine/break-client/assets/103591752/1b024cb4-a8b7-4ac2-884a-0144056760d1',
        'https://github.com/breakmagazine/break-client/assets/103591752/588dbcb0-d673-44de-bd74-8043cebbf629',
        'https://github.com/breakmagazine/break-client/assets/103591752/6fed137f-9551-4f41-82d7-358e92ef4f78',
        'https://github.com/breakmagazine/break-client/assets/103591752/0e97c650-cd30-4da8-8e55-429bd1101a1e',
        'https://github.com/breakmagazine/break-client/assets/103591752/c4a109f7-c95f-4b8c-b035-dd63d4615eeb',
        'https://github.com/breakmagazine/break-client/assets/103591752/d399fc9a-adb0-491d-a7df-9ee190d82937',
        'https://github.com/breakmagazine/break-client/assets/103591752/66c4f0fe-5729-47de-bb3d-fec63543e437',
        'https://github.com/breakmagazine/break-client/assets/103591752/4966f766-a15c-4def-94f3-d7badae5caaa',
        'https://github.com/breakmagazine/break-client/assets/103591752/8e218955-af25-41b0-86e8-a71d002d1f77',
    ];

    const CREDIT = [
        'CREDIT',
        <br />,
        'Fashion Editor 이주은 @41.1.04, 장선영 @syin.yer',
        'Photographer 한예림 @yerimhan_',
        'Hair&Make-up 최윤정 @avo.cad_o0',
        'Model 최민성 @cccmsg',
        'Hair&Make-up assistant 이윤서 @2ysstyle',
        'Web Designer 김소현 (@xoxo._.hyun) 안은빈 (@aneunbn)',
        'Web Developer 강나연 (@nyhibi) 장영준 (@youngjangjoon)',
    ];

    const INFO_TEXT = {
        look1: {
            title: 'LOOK1',
            description: [
                'Top 에디터 개인 소장품',
                'Shoes 에디터 개인 소장품',
                'Acc ROCKING DOCKING PICKING @rockingdockingpicking',
                'Outer, Bottom 모두 0426x @0426x',
            ],
        },
        look2: {
            title: 'LOOK2',
            description: ['Top toritoritoritori @toritoritoritori__', 'Bottom Helmut Lang', 'Acc ae'],
        },
        look3: {
            title: 'LOOK3',
            description: ['Top sulvam', 'Bottom Per Gotesson', 'Shoes Salomon', 'Acc Our Legacy, ae'],
        },
    };

    return (
        <Wrapper direction="column" align="center" justify="flex-start">
            <ImageWrapper1>
                <Image priority className="img0" alt="" width={1439} height={1797} src={IMG_SRC[0]} />
                <InfoTextSet className="text" title={INFO_TEXT.look1.title} description={INFO_TEXT.look1.description} />
            </ImageWrapper1>
            <WhiteWrapper direction="column" align="center" justify="flex-start">
                <Space height={11.11} />
                <Image priority className="img1" alt="" width={1103} height={735} src={IMG_SRC[1]} />
            </WhiteWrapper>
            <Space height={106.25} />

            <Image priority className="img2" alt="" width={1232} height={1847} src={IMG_SRC[2]} />
            <InfoTextSet className="text2" title={INFO_TEXT.look1.title} description={INFO_TEXT.look1.description} />

            <Space height={36.805} />
            <section>
                <Image priority className="img3" alt="" width={1314} height={1917} src={IMG_SRC[3]} />
            </section>
            <Space height={136.875} />
            <section>
                <Image priority className="img3-1" alt="" width={1314} height={1917} src={IMG_SRC[3]} />
            </section>
            <Space height={136.875} />
            <Space height={28.47} />
            <Image priority className="img4" alt="" width={1444} height={1020} src={IMG_SRC[4]} />
            <Space height={27.36} />
            <Image priority className="img5" alt="" width={1466} height={2197} src={IMG_SRC[5]} />
            <section>
                <Image priority className="img6" alt="" width={1039} height={1557} src={IMG_SRC[6]} />
            </section>
            <Space height={108.125} />
            <Space height={21.04} />
            <Image priority className="img7" alt="" width={1466} height={2198} src={IMG_SRC[7]} />
            <section>
                <Image priority className="img8" alt="" width={1231} height={1539} src={IMG_SRC[8]} />
            </section>
            <Space height={82.63} />
            <Space height={22.84} />
            <Flex direction="column">
                {CREDIT.map((el, index) => (
                    <Text key={index} typo="Credit" color={'rgba(255, 255, 255, 0.6)'}>
                        {el}
                    </Text>
                ))}
            </Flex>
            <Space height={8.88} />
        </Wrapper>
    );
};

const Wrapper = styled(Flex)`
    background-color: #000;
    position: relative;

    width: 100vw;
    height: auto;
    box-sizing: border-box;

    overflow: hidden;

    .img0 {
        width: 100vw;
        height: auto;
    }

    .img2 {
        width: 85.55vw;
        height: auto;

        position: absolute;
        top: 236.94vw;
        left: 7.225vw;

        background-color: #000;
    }

    .img3 {
        position: absolute;

        width: 91.25vw;
        height: auto;

        left: 22.7vw;
    }

    .img3-1 {
        position: absolute;

        width: 91.25vw;
        height: auto;

        right: 19.86vw;
    }

    .img4 {
        width: 100vw;
        height: auto;
    }

    .img5 {
        width: 101.8vw;
        height: auto;
    }

    .img6 {
        position: absolute;
        width: 72.152vw;
        height: 108.125vw;
    }

    .img7 {
        width: 101.805vw;
        height: auto;
    }

    .img8 {
        position: absolute;

        width: 85.486vw;
        height: auto;

        top: -11.73vw;
        left: 7.222vw;
    }

    section {
        position: relative;

        width: 100%;
        height: auto;
    }

    img {
        border: none;
    }
`;

const WhiteWrapper = styled(Flex)`
    background-color: #fff;
    width: 100vw;
    height: 134.16vw;

    box-sizing: border-box;

    .img1 {
        width: 76.95vw;
        height: 51.04vw;
    }
`;

const ImageWrapper1 = styled.div`
    position: relative;
    height: 124.79vw;

    .text {
        position: absolute;
        left: 2.76vw;
        bottom: 24px;
    }
`;
