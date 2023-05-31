import { css } from '@emotion/css';

export const calcVw = (px: number) => `${(px / 1440) * 100}vw`;

export const typo = {
    Title1: css`
        font-family: 'SUIT Variable', sans-serif, 'Apple SD Gothic Neo';
        font-weight: 800;
        font-size: ${calcVw(32)};
        line-height: 140%;
        @media (min-width: 576px) {
            font-size: ${calcVw(32)};
            font-weight: 700;
        }
    `,
    Title2: css`
        font-family: 'SUIT Variable', sans-serif, 'Apple SD Gothic Neo';
        font-weight: 600;
        font-size: ${calcVw(28)};
        line-height: 120%;
        @media (max-width: 576px) {
            font-size: ${calcVw(32)};
        }
    `,
    Body1: css`
        font-family: 'SUIT Variable', sans-serif, 'Apple SD Gothic Neo';
        font-weight: 700;
        font-size: ${calcVw(24)};
        line-height: 120%;
        @media (min-width: 576px) {
            font-size: ${calcVw(24)};
            font-weight: 600;
        }
    `,
    Body2: css`
        font-family: 'SUIT Variable', sans-serif, 'Apple SD Gothic Neo';
        font-weight: 500;
        font-size: ${calcVw(16)};
        line-height: 160%;
        @media (max-width: 576px) {
            font-size: ${calcVw(22)};
        }
    `,
    Category: css`
        font-family: 'SUIT Variable', sans-serif, 'Apple SD Gothic Neo';
        font-weight: 800;
        font-size: ${calcVw(18)};
        line-height: 140%;
        @media (max-width: 576px) {
            font-size: ${calcVw(30)};
        }
    `,
    CatchPhrase: css`
        font-family: 'SUIT Variable', sans-serif, 'Apple SD Gothic Neo';
        font-weight: 900;
        font-size: ${calcVw(66)};
        line-height: 140%;
    `,
    MovingText: css`
        font-family: 'Helvetica', 'Apple SD Gothic Neo';
        font-weight: 700;
        font-size: ${calcVw(150)};
        line-height: 81%;
    `,
    BulgogiQuestion: css`
        font-family: 'SUIT Variable', sans-serif, 'Apple SD Gothic Neo';
        font-weight: 600;
        font-size: ${calcVw(28)};
        line-height: 161%;
    `,
    BulgogiAnswer: css`
        font-family: 'SUIT Variable', sans-serif, 'Apple SD Gothic Neo';
        font-weight: 600;
        font-size: ${calcVw(24)};
        line-height: 170%;
    `,
    BulgogiHeading: css`
        font-family: 'SUIT Variable', sans-serif, 'Apple SD Gothic Neo';
        font-weight: 800;
        font-size: ${calcVw(38.163)};
        line-height: 160%;
    `,
    Bulgogi85: css`
        font-family: 'SUIT Variable', sans-serif, 'Apple SD Gothic Neo';
        font-weight: 800;
        font-size: ${calcVw(85.85)};
        line-height: 160%;
    `,
    Credit: css`
        font-family: 'SUIT Variable', sans-serif, 'Apple SD Gothic Neo';
        font-weight: 700;
        font-size: ${calcVw(24)};
        line-height: 160%;
    `,
    ClothTitle: css`
        font-family: 'Pretendard';
        font-weight: 500;
        font-size: ${calcVw(20)};
        line-height: 140%;
        @media (max-width: 576px) {
            font-size: ${calcVw(24)};
        }
    `,
    ClothInfo: css`
        font-family: 'Pretendard';
        font-weight: 300;
        font-size: ${calcVw(20)};
        line-height: 140%;
        @media (max-width: 576px) {
            font-size: ${calcVw(24)};
        }
    `,
} as const;
