import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const globalStyle = css`
    ${emotionReset}
    body {
        font-family: 'Pretendard';
    }
    button {
        background: inherit;
        border: none;
        box-shadow: none;
        border-radius: 0;
        padding: 0;
        overflow: visible;
        cursor: pointer;
    }
    button:focus {
        outline: none;
    }
    input:focus {
        outline: none;
    }
    textarea:focus {
        outline: none;
    }
    input,
    textarea {
        border: none;
    }
`;