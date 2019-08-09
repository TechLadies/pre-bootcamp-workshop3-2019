import React from "react";

export default function Input() {
  const [value, setValue] = React.useState("I'm MR. input");
  return (
    <div>
      <input
        value={value}
        onChange={e => {
          setValue(e.nativeEvent.target.value);
        }}
      />
      <h4>{value}</h4>
    </div>
  );
}
