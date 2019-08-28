import React from "react";

export default function Input({ value, setValue }) {
  return (
    <div
      style={{
        maxWidth: 400,
        margin: "24px auto 36px"
      }}
    >
      <input
        value={value}
        placeholder="Type pokemon name!!!"
        onChange={e => {
          setValue(e.nativeEvent.target.value);
        }}
      />
    </div>
  );
}
