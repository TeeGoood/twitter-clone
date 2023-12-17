import React, { useState } from 'react';

const DynamicTextArea = ({lineStart}) => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const calculateRows = () => {
    const newlineCount = (text.match(/\n/g) || []).length;
    const minRows = lineStart;
    return Math.max(minRows, newlineCount);
  };

  return (
    <textarea
      value={text}
      onChange={handleTextChange}
      rows={calculateRows()}
      placeholder="What is happening?!"
      className="resize-none w-full border-non outline-none text-lg"
    />
  );
};

export default DynamicTextArea;
