import React from 'react';
import { ContentState } from 'draft-js';
import { useEditorApi } from '../../provider';

interface ILinkProps {
  children: React.ReactNode;
  contentState: ContentState;
  entityKey: string;
}

export default function Link({
  children,
  contentState,
  entityKey,
}: ILinkProps) {

  const { setEntityData } = useEditorApi();
  const { url } = contentState.getEntity(entityKey).getData();

  const handleClick = () => {
    const newUrl = prompt('URL:', url);

    if (newUrl) {
      setEntityData(entityKey, { url: newUrl });
    }
  }

  return (
    <a href={url} onClick={handleClick}>
      {children}
    </a>
  )
}