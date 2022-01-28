import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';

export const Markdown: FC = ({ children }) => (
  <ReactMarkdown>{children.toString()}</ReactMarkdown>
);
