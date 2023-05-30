import styled from '@emotion/styled';
import { Flex, Space, Text } from '../common/common';
import Image from 'next/image';
import { Interview } from './Interview';
import interviewJson from '../Bulgogidisco/interview.json';
import YouTube, { YouTubeProps } from 'react-youtube';

export const Section5 = () => {
    const CREDIT = [
        'CREDIT',
        <br key={-1} />,
        'Editor 이정훈 (66.express)',
        'Interviewee 불고기디스코 (@bulgogidisco)',
        'Photographer 이가영 (@ieegayoung)',
        'Videographer 윤정원 (@yzwtz)',
        'Web Designer 김소현 (@xoxo._.hyun) 안은빈 (@aneunbn)',
        'Web Developer 강나연 (@nyhibi) 장영준 (@youngjangjoon)',
    ];

    const interviewData = interviewJson;

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <Wrapper direction="column" align="center" justify="flex-start">
            <Space height={7.63} />
            <Space height={23.88} />
            <Flex className="section5-interview0" direction="row" justify="flex-end">
                <Interview
                    title={interviewData.interview17.question}
                    description={interviewData.interview17.answer}
                    titleColor="#fff"
                    descriptionColor={'#DADADA'}
                />
            </Flex>
            <YouTube
                className="youtube"
                videoId="8L0EeAcTzrA"
                opts={opts}
                onReady={onPlayerReady}
                onEnd={(e) => {
                    e.target.stopVideo(0);
                }}
            />
            <Space height={10.55} />
            <Text typo="BulgogiAnswer" color="#dadada">
                [DAGAGA] 뮤직비디오
            </Text>
            <Space height={2.22} />
            <YouTube
                className="youtube"
                videoId="tgSqOrSQvq8"
                opts={opts}
                onReady={onPlayerReady}
                onEnd={(e) => {
                    e.target.stopVideo(0);
                }}
            />
            <Space height={5.208} />
            <Text typo="BulgogiAnswer" color="#dadada">
                5월 17일 발매한 새 EP [DAGAGA]는 현재 모든 음원 사이트에서 확인할 수 있다.
            </Text>
            <Space height={17.84} />
            <Flex direction="column">
                {CREDIT.map((el, index) => (
                    <Text key={index} typo="Credit" color={'rgba(255, 255, 255, 0.6)'}>
                        {el}
                    </Text>
                ))}
            </Flex>
            <Space height={10.41} />
        </Wrapper>
    );
};

const Wrapper = styled(Flex)`
    position: relative;

    width: 100%;
    height: auto;

    box-sizing: border-box;

    overflow: hidden;

    .section5-interview0 {
        position: absolute;

        top: 7.63vw;
        right: 2.5vw;
    }

    .youtube > * {
        width: 100vw;
        height: 56.11vw;
    }
`;
