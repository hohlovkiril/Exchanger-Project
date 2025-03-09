import { EditorApiProvider } from "./provider";
import TextEditor from "./TextEditor";
import ToolPanel from "./ToolPanel";
import { EditorContainer } from './index.style'

export default function EditorApp() {
  return (
    <>
      <EditorApiProvider>
        <EditorContainer
          variant='unstyled'
        >
          <ToolPanel />
          <TextEditor />
        </EditorContainer>
      </EditorApiProvider>
    </>
  )
}