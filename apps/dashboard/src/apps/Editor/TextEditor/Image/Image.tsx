import React from 'react';
import { ContentState } from "draft-js";

interface IImageProps {
  children: React.ReactNode;
  contentState: ContentState;
  entityKey: string;
}

export default function Image({
  children,
  contentState,
  entityKey
}: IImageProps) {

  const { url } = contentState.getEntity(entityKey).getData();

  return (
    <img
      src={url}
      alt=""
      style={{
        width: '100%',
      }}
    />
  )
}