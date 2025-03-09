import { CircularProgressProps, LinearProgressProps } from "@mui/material";
import { MuiCircularProgress, MuiLinearProgress } from "./index.style";

interface ICircularProps {

}

interface ILinearProps {

}

export function CircularProgress(props: ICircularProps & CircularProgressProps) {
  return (
    <>
      <MuiCircularProgress
        {...props}
      />
    </>
  )
}

export function LinearProgress(props: ILinearProps & LinearProgressProps) {
  return (
    <>
      <MuiLinearProgress
        {...props}
      />
    </>
  )
}