import { useState } from 'react';
import { useTaskApi } from "./provider/index.provider"
import Column from "./Column";
import {
  Button,
} from "../../components/ui/Inputs";
import {
  Card,
  Stack,
} from '../../components/ui/Surfaces';
import ColumnForm from "./ColumnForm";

export default function ColumnList() {

  /** Context */

  const { columns, onColumnCreate } = useTaskApi();

  /** States */

  const [formActive, setFormActive] = useState<boolean>(false)

  return (
    <>
      <Stack
        direction='row'
        justifyContent='flex-start'
        alignItems='flex-start'
        gap={1}
        sx={{
          paddingBottom: '1em',
          overflowX: 'auto'
        }}
      >

        {columns.map((col, key) => (
          <Column
            key={key}
            data={col}
            isFirst={key === 0 || undefined}
            isLast={key === columns.length - 1 || undefined}
          />
        ))}

        <Card
          sx={{
            minWidth: '200px'
          }}
        >
          {formActive ? (
            <ColumnForm
              onCreate={(title: string) => onColumnCreate(title)}
              onClose={() => setFormActive(false)}
            />
          ) : (
            <Button
              variant='outlined'
              color='inherit'
              sx={{
                borderStyle: 'dashed'
              }}
              fullWidth
              onClick={() => setFormActive(true)}
            >
              Add Column
            </Button>
          )}
        </Card>

      </Stack>
    </>
  )
}