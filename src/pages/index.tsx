import { useEffect, useState } from 'react';
import { Landing } from '../components/Landing/index';
import styled from '@emotion/styled';
export default function Home() {
    const [shouldShow, setShouldShow] = useState(false);

    useEffect(() => {
        setShouldShow(true); // 클라이언트 측에서 렌더링되는 시점에 요소를 보이도록 설정
    }, []);

    return (
        <>
            {shouldShow && (
                <Wrapper>
                    <Landing />
                </Wrapper>
            )}
        </>
    );
}

const Wrapper = styled.div`
    width: 100vw;
    height: 100%;

    display: flex;
    align-items: center;

    /* 162vw보다 작을 경우 height를 100vh로 지정 */
    @media (min-height: 162vw) {
        height: 100vh;
    }
`;
