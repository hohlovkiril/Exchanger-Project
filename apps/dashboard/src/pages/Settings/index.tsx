import React, { useState } from "react"

import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import SecurityIcon from '@mui/icons-material/Security';
import KeyIcon from '@mui/icons-material/Key';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import BrushIcon from '@mui/icons-material/Brush';
import StorageIcon from '@mui/icons-material/Storage';

import {
  Tabs,
  Tab,
  TabPanel,
} from '../../components/ui/Navigation';
import {
  Card,
  CardContent,
  CardHeader,
  Container,
} from "../../components/ui/Surfaces";
import { PanelConfig } from "../../components/ui/Navigation/Tabs";
import {
  GeneralSettingsPanel,
  UserManagementPanel,
  SecurityPanel,
  AccessControlPanel,
  ApiAndIntegrationsPanel,
  UIPanel,
  BackupAndRestorePanel,
} from './Panels';

const tabs: PanelConfig[] = [
  {
    label: 'General Settings',
    icon: <SettingsIcon />,
    panel: <GeneralSettingsPanel />,
    enable: true,
  },
  {
    label: 'User Management',
    icon: <PeopleIcon />,
    panel: <UserManagementPanel />,
    enable: true,
  },
  {
    label: 'Security',
    icon: <SecurityIcon />,
    panel: <SecurityPanel />,
    enable: true,
  },
  {
    label: 'Access Control',
    icon: <KeyIcon />,
    panel: <AccessControlPanel />,
    enable: true,
  },
  {
    label: 'API & Integrations',
    icon: <IntegrationInstructionsIcon />,
    panel: <ApiAndIntegrationsPanel />,
    enable: true,
  },
  {
    label: 'UI Settings',
    icon: <BrushIcon />,
    panel: <UIPanel />,
    enable: true,
  },
  {
    label: 'Backup & Restore',
    icon: <StorageIcon />,
    panel: <BackupAndRestorePanel />,
    enable: true,
  }
]

export default function SettingsPage() {

  /** States */

  const [value, setValue] = useState<number>(0);

  /** Handlers */

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Container maxWidth='xl'>
        <Card>
          <CardHeader
            title={(
              <Tabs
                orientation='horizontal'
                variant='scrollable'
                scrollButtons='auto'
                value={value}
                onChange={handleChange}
                sx={{
                  borderBottom: '1px solid',
                  borderColor: 'rgba(125, 125, 125, .25)'
                }}
              >
                {tabs.filter((_) => _.enable === true).map((panel, key) => (
                  <Tab
                    key={key}
                    icon={panel.icon}
                    label={panel.label}
                  />
                ))}
              </Tabs>
            )}
            sx={{
              padding: '0',
            }}
          />
          <CardContent>
            {tabs.filter((_) => _.enable === true).map((panel, key) => (
              <TabPanel
                key={key}
                tabIndex={key}
                tabValue={value}
              >
                {panel.panel}
              </TabPanel>
            ))}
          </CardContent>
        </Card>
      </Container>
    </>
  )
}