import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";

import { useLayoutApi } from "../../providers/layout.provider"
import {
  Box,
} from '../../components/ui/Surfaces';
import {
  Button,
} from '../../components/ui/Inputs'
import {
  Typography,
} from '../../components/ui/DataDisplay'

export default function NotFoundPage() {

  /** Context */

  const navigate = useNavigate();
  const theme = useTheme()
  const { setPageTitleStatus, setBreadcrumbsStatus, } = useLayoutApi();

  /** Effects */

  useLayoutEffect(() => {
    setPageTitleStatus(false);
    setBreadcrumbsStatus(false);
    
    return () => {
      setPageTitleStatus(true);
      setBreadcrumbsStatus(true);
    }
  }, [
    setPageTitleStatus,
    setBreadcrumbsStatus,
  ]) 

  return (
    <>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '1em',
          paddingBottom: '5%',
          background: 'url("/static/images/404-page-not-found-placeholder.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '50%',
          backgroundPositionY: '50%',
          backgroundPositionX: '50%',
          filter: theme.palette.mode === 'dark'
            ? 'invert(1)' : 'invert(0)'
        }}
      >
        <Typography
          variant="caption"
          color='textDisabled'
        >
          The page you are looking was moved, removed, renamed, or might never exist!
        </Typography>
        <Button
          color='primary'
          variant='outlined'
          onClick={() => navigate('/')}
        >
          Back to Home
        </Button>
      </Box>
    </>
  )
}