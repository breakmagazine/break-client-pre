import { useEffect, useState } from 'react';
import { Landing } from '../components/Landing/index';
export default function Home() {
    const [shouldShow, setShouldShow] = useState(false);

    useEffect(() => {
        setShouldShow(true); // 클라이언트 측에서 렌더링되는 시점에 요소를 보이도록 설정
    }, []);
    return <>{shouldShow && <Landing />}</>;
}
