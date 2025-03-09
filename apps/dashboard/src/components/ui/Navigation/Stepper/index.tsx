import { MobileStepperProps, StepButtonProps, StepConnectorProps, StepContentProps, StepIconProps, StepLabelProps, StepperProps, StepProps } from "@mui/material";
import {
  MuiMobileStepper,
  MuiStepper,
  MuiStep,
  MuiStepButton,
  MuiStepConnector,
  MuiStepContent,
  MuiStepIcon,
  MuiStepLabel,
} from './index.style'

export interface IMobileStepperProps {}

export interface IStepperProps {}

export interface IStepProps {}

export interface IStepButtonProps {}

export interface IStepConnectorProps {}

export interface IStepContentProps {}

export interface IStepIconProps {}

export interface IStepLabelProps {}

export function MobileStepper(props: IMobileStepperProps & MobileStepperProps) {
  return (
    <MuiMobileStepper
      {...props}
    />
  )
}

export function Stepper(props: IStepperProps & StepperProps) {
  return (
    <MuiStepper
      {...props}
    >
      {props.children}
    </MuiStepper>
  )
}

export function Step(props: IStepProps & StepProps) {
  return (
    <MuiStep
      {...props}
    >
      {props.children}
    </MuiStep>
  )
}

export function StepButton(props: IStepButtonProps & StepButtonProps) {
  return (
    <MuiStepButton
      {...props}
    >
      {props.children}
    </MuiStepButton>
  )
}

export function StepConnector(props: IStepConnectorProps & StepConnectorProps) {
  return (
    <MuiStepConnector
      {...props}
    />
  )
}

export function StepContent(props: IStepContentProps & StepContentProps) {
  return (
    <MuiStepContent
      {...props}
    />
  )
}

export function StepIcon(props: IStepIconProps & StepIconProps) {
  return (
    <MuiStepIcon
      {...props}
    />
  )
}

export function StepLabel(props: IStepLabelProps & StepLabelProps) {
  return (
    <MuiStepLabel
      {...props}
    >
      {props.children}
    </MuiStepLabel>
  )
}