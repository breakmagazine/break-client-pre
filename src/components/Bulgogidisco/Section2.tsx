import styled from '@emotion/styled';
import { Flex, Space, Text } from '../common/common';
import Image from 'next/image';
import Hwahap from '../../assets/svg/hwahap.svg';
import { Interview } from './Interview';
import interviewData from '../Bulgogidisco/interview.json';

export const Section2 = () => {
  const IMG_SRC = [
    '/images/bulgogi/5.png',
    '/images/bulgogi/6.png',
    '/images/bulgogi/7.png',
    '/images/bulgogi/8.png',
    '/images/bulgogi/9.png',
  ];
  return (
    <Wrapper direction='column' align='center' justify='flex-start'>
      <Space height={149.79} />
      <Image
        priority
        className='img0'
        alt=''
        width={1440}
        height={2157}
        src={IMG_SRC[0]}
      />
      <Hwahap className='svg0' />
      <Space height={212.22} />
      <Image
        priority
        className='img1'
        alt=''
        width={876}
        height={1312}
        src={IMG_SRC[1]}
      />
      <Flex className='interview0' direction='column' justify='flex-start'>
        <Interview
          title={interviewData.interview7.question}
          description={interviewData.interview7.answer}
        />
      </Flex>
      <Image
        priority
        className='img2'
        alt=''
        width={876}
        height={1312}
        src={IMG_SRC[2]}
      />
      <Flex
        className='interview1'
        gap={7.01}
        direction='column'
        justify='flex-start'
      >
        <Interview
          title={interviewData.interview8.question}
          description={interviewData.interview3.answer}
          titleColor='#fff'
          descriptionColor={'#DADADA'}
        />
        <Interview
          title={interviewData.interview9.question}
          description={interviewData.interview9.answer}
          titleColor='#fff'
          descriptionColor={'#DADADA'}
        />
      </Flex>
      <Text typo='Bulgogi85' color='#fff'>
        경계선을 허무는 록 밴드 불고기디스코
      </Text>
      <Space height={5.13} />
      <Flex className='img3-wrapper' direction='row' justify='space-between'>
        <Image
          priority
          className='section2-img3'
          alt=''
          width={715}
          height={1071}
          src={IMG_SRC[3]}
        />
        <Image
          priority
          className='section2-img3'
          alt=''
          width={715}
          height={1071}
          src={IMG_SRC[4]}
        />
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  position: relative;

  width: 100%;
  height: auto;

  box-sizing: border-box;

  overflow: hidden;

  .img0 {
    position: absolute;

    width: 100%;
    height: 149.79vw;

    left: 0;
  }

  .svg0 {
    position: absolute;

    width: 100.97vw;
    height: 57.15vw;

    top: 131.736vw;
    left: 3.1vw;

    z-index: 3;
  }

  .img1 {
    position: absolute;

    width: 60.83vw;
    height: auto;

    top: 172.916vw;
    right: 0;
  }

  .interview0 {
    position: absolute;

    width: 60.97vw;

    top: 208.26vw;
    left: 0;

    background: rgba(255, 255, 255, 0.8);

    box-sizing: border-box;
    padding: 5.55vw 5.208vw 5.83vw 4.51vw;

    z-index: 2;
  }

  .img2 {
    position: absolute;

    width: 60.83vw;
    height: 91.11vw;

    top: 265.97vw;
    left: -21.6vw;

    z-index: 3;

    object-fit: cover;
  }

  .interview1 {
    position: absolute;

    width: 52.29vw;
    height: 53.819vw;

    top: 277.77vw;
    right: 4.3vw;

    background-color: transparent;

    padding: 0;
  }

  .img3-wrapper {
    width: 100%;
    height: 74.375vw;
  }

  .section2-img3 {
    width: 50vw;
    height: 74.375vw;
  }
`;
