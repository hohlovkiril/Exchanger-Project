import ColumnList from "./ColumnList";
import { TaskProvider } from "./provider/index.provider";

export default function TaskboardApp() {
  return (
    <>
      <TaskProvider>
        <ColumnList />
      </TaskProvider>
    </>
  )
}