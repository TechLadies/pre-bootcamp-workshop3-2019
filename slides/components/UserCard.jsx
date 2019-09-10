/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export default function UserCard() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        background: white;
        padding: 12px;
        border-radius: 5px;
        margin-bottom: 36px;
      `}
    >
      <div
        css={css`
          width: 120px;
          height: 120px;
          background: #d4d4d4;
          border-radius: 5px;
        `}
      />
      <div
        css={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 12px 16px;
        `}
      >
        <div
          css={css`
            height: 16px;
            background: #d4d4d4;
            border-radius: 8px;
            margin-bottom: 16px;
          `}
        />
        <div
          css={css`
            height: 16px;
            width: 70%;
            background: #d4d4d4;
            border-radius: 8px;
          `}
        />
      </div>
    </div>
  );
}
