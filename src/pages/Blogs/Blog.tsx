import React, { useState } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import MLink from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

const BackLink = styled.div`
  margin: 10px;
  font-size: 0.8rem;
`;

const BlogArea = styled(Paper)`
  margin: 10px;
  padding: 20px;
`;

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

  return (
    <div>
      <BackLink>
        <MLink component={Link} to="/blogs" color="inherit" underline="none">
          ＜ 一覧へ戻る
        </MLink>
      </BackLink>
      <BlogArea>
        <ReactMarkdown source={markdown} escapeHtml={false} />
      </BlogArea>
    </div>
  );
};
