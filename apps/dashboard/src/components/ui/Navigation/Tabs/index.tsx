import { BoxProps, TabProps, TabsProps } from "@mui/material";
import { MuiTab, MuiTabPanel, MuiTabs } from "./index.style";

export type PanelConfig = {
  translationKey?: string;
  label: string;
  icon?: string | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | undefined;
  panel: React.ReactNode;
  enable?: true;
}

interface ITabsProps {

}

interface ITabProps {

}

interface ITabPanelProps {
  tabIndex: number;
  tabValue: number;
}

export function Tabs(props: ITabsProps & TabsProps) {
  return (
    <MuiTabs
      {...props}
    >
      {props.children}
    </MuiTabs>
  )
}

export function Tab(props: ITabProps & TabProps) {
  return (
    <MuiTab {...props} />
  )
}

export function TabPanel(props: ITabPanelProps & BoxProps) {
  return (
    <>
      {props.tabIndex === props.tabValue && (
        <MuiTabPanel
          {...props}
        >
          {props.children}
        </MuiTabPanel>
      )}
    </>
  )
}