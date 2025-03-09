import React, { useRef } from 'react';
import { Editor, EditorState } from 'draft-js';
import { useEditorApi } from '../provider';
import { BLOCK_RENDER_MAP, CUSTOM_STYLE_MAP } from './config';

export default function TextEditor() {

  /** Context */

  const { state, onChange } = useEditorApi();

  /** Refs */

  const editor = useRef<Editor>(null);

  /** Handler */

  const handleOnChange = (state: EditorState) => {
    onChange(state);
    if (editor.current) {
      // editor.current.focus();
    }

  }

  return (
    <>
      <Editor
        ref={editor}
        placeholder='Type a text'
        editorState={state}
        blockRenderMap={BLOCK_RENDER_MAP}
        customStyleMap={CUSTOM_STYLE_MAP}
        onChange={handleOnChange}
      />
    </>
  )
}