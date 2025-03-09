import React, { useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Container } from "@mui/material";

import { Card, CardContent, CardHeader } from "../../components/ui/Surfaces";
import { PanelConfig, Tabs, Tab, } from "../../components/ui/Navigation/Tabs";
import AccountPanel from "./panels/account.panel";
import ChangePasswordPanel from "./panels/changePassword.panel";
import SettingsPanel from "./panels/settings.panel";

type ProfilePanelConfig = {
  navigate: string;
  path: string;
} & PanelConfig;

const tabs: ProfilePanelConfig[] = [
  {
    label: 'Profile',
    translationKey: 'page__profile_tab_my_account',
    panel: <>Profile</>,
    path: '/profile',
    navigate: '/profile',
  },
  {
    label: 'My Account',
    translationKey: 'page__profile_tab_my_account',
    panel: <AccountPanel />,
    enable: true,
    path: '/profile',
    navigate: '/profile',
  },
  {
    label: 'Change Password',
    translationKey: 'page__profile_tab_change_password',
    panel: <ChangePasswordPanel />,
    enable: true,
    path: '/profile/change-password',
    navigate: '/profile/change-password',
  },
  {
    label: 'Settings',
    translationKey: 'page__profile_tab_settings',
    panel: (
      <SettingsPanel
        showEmailSettings
        showSecuritySettings
        showNotificationSettings
        showSocialSettings
      />
    ),
    enable: true,
    path: '/profile/settings',
    navigate: '/profile/settings',
  }
]

export default function ProfilePage() {

  /** Context */

  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  /** States */

  const [tabIndex, setTabIndex] = useState<number>(0);

  useLayoutEffect(() => {
    const filteredTabs = tabs.filter((tab) => tab.enable);

    for (let i = 0; i < filteredTabs.length; i++) {
      if (pathname === filteredTabs[i].path) {
        setTabIndex(i);
      }
    }
  }, [
    pathname
  ])

  return (
    <>
      <Container maxWidth='xl'>

        <Card>
          <CardHeader
            title={(
              <Tabs
                value={tabIndex}
                scrollButtons='auto'
                sx={{
                  borderBottom: '1px solid',
                  borderColor: 'rgba(125, 125, 125, .25)'
                }}
              >
                {tabs.filter((tab) => tab.enable).map((tab, key) => (
                  <Tab
                    key={key}
                    label={tab.translationKey
                      ? t(tab.translationKey, { defaultValue: tab.label })
                      : tab.label
                    }
                    onClick={() => navigate(tab.navigate)}
                  />
                ))}
              </Tabs>
            )}
          />

          <CardContent>
            {tabs.filter((tab) => tab.enable).map((tab, key) => (
              <React.Fragment key={key}>
                {tabIndex === key && tab.panel}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>

      </Container>
    </>
  )
}