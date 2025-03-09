import { useTranslation } from 'react-i18next';

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';

import { useTheme } from "../../../../providers/theme.provider";
import {
  IconButton,
} from '../../../ui/Inputs';

export default function ThemeWidget() {

  /** Context  */

  const { t } = useTranslation();
  const { theme, handleToggle } = useTheme();

  return (
    <>
      <IconButton
        enableTooltip={{
          title: t('header__widget_theme_tooltip'),
          placement: 'bottom'
        }}
        onClick={() => handleToggle(true)}
      >
        {theme === 'light' ? (
          <WbSunnyIcon />
        ) : (
          <BedtimeIcon />
        )}
      </IconButton>
    </>
  )
}