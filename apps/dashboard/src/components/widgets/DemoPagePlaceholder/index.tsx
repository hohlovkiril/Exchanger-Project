import {
  Box,
  Container,
} from '../../ui/Surfaces';
import {
  Typography
} from '../../ui/DataDisplay';

export default function DemoPagePlaceholder() {
  return (
    <Container
      maxWidth='md'
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'grid',
          maxHeight: '80%',
          width: '80%',
          border: '1px solid',
          borderColor: 'rgba(200, 200, 200, .5)',
          '& .MuiBox-root': {
            border: '1px solid',
            borderColor: 'rgba(200, 200, 200, .5)',
          }
        }}
      >
        <Box
          sx={{ gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 1, gridRowEnd: 2 }}
        />
        <Box
          sx={{ gridColumnStart: 2, gridColumnEnd: 4, gridRowStart: 1, gridRowEnd: 2 }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            gap: '.25em',
            padding: '2em',
            gridColumnStart: 1, 
            gridColumnEnd: 2, 
            gridRowStart: 2, 
            gridRowEnd: 4,
            '& .MuiTypography-root': {
              fontSize: 'clamp(28px, 2vw, 34px)',
              fontWeight: '100'
            }
          }}
        >
          <Typography color='primary'>
            Create
          </Typography>
          <Typography>
            Something
          </Typography>
          <Typography>
            Beautiful
          </Typography>
        </Box>
        <Box
          sx={{ 
            gridColumnStart: 2, 
            gridColumnEnd: 4, 
            gridRowStart: 2, 
            gridRowEnd: 4,
            backgroundImage: 'url("/static/images/empty-page-placeholder.gif")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: '50%',
          }}
        />
      </Box>
    </Container>
  )
}