import { Link } from 'react-router-dom';

import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';

import {
  Stack
} from '../../ui/Surfaces';
import {
  Typography,
} from '../../ui/DataDisplay';

interface IProps {
  srcPath: string;
  materialLink: string;
  children: string;
}

export default function DemoComponentsHeader({
  srcPath,
  materialLink,
  children
}: IProps) {
  return (
    <Stack 
      direction='column'
      justifyContent='flex-start'
      alignItems='flex-start'
      gap={1}
      sx={{ marginBottom: '3em', }}
    >
      <Typography variant='h6' color='textDisabled'>
        {children}
      </Typography>
      <Typography variant='caption' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: '.5em', alignItems: 'center' }}>
        <CodeIcon fontSize='small' />
        {srcPath}
      </Typography>
      <Link to={materialLink}>
        <Typography variant='caption' color='info' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: '.5em', alignItems: 'center' }}>
          <LanguageIcon fontSize='small' />
          {materialLink}
        </Typography>
      </Link>
    </Stack>
  )
}