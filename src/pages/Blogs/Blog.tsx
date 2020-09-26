import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

type Props = {
  mdPath: string;
};

export default ({ mdPath }: Props) => {
  const [markdown, setMarkdown] = useState<string>('');

  fetch(mdPath)
    .then((r) => r.text())
    .then((text) => {
      setMarkdown(text);
    });

  return <ReactMarkdown source={markdown} escapeHtml={false} />;
};
