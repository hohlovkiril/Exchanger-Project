import {
  Button,
  IconButton,
} from '../../../ui/Inputs';
import {
  Typography,
} from '../../../ui/DataDisplay';

export interface IAuthFormProvider {
  url: string;
  icon: React.ReactNode;
  label?: string;
}

export default function AuthFormProvider({
  url,
  icon,
  label,
}: IAuthFormProvider) {
  return (
    <>
      {label ? (
        <Button
          color='inherit'
          variant='outlined'
          startIcon={icon}
        >
          <Typography>
            {label}
          </Typography>
        </Button>
      ) : (
        <IconButton
          color='inherit'
        >
          {icon}
        </IconButton>
      )}
    </>
  )
}