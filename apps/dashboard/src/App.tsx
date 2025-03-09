import { SnackbarProvider } from 'notistack';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "./providers/auth.provider"
import { ThemeProvider } from "./providers/theme.provider"
import { Router } from "./router"
import { ROUTES } from "./common/routes"
import { LayoutProvider } from './providers/layout.provider';
import { StyledMaterialSnackbarContent } from './components/ui/Feedback/Snackbar/index.style';
import { LanguageProvider } from './providers/language.provider';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <LanguageProvider>
          <ThemeProvider>
            <AuthProvider>
              <LayoutProvider>
                <SnackbarProvider
                  maxSnack={10}
                  autoHideDuration={2500}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  Components={{
                    default: StyledMaterialSnackbarContent,
                  }}
                >
                  <Router
                    routes={ROUTES}
                  />
                </SnackbarProvider>
              </LayoutProvider>
            </AuthProvider>
          </ThemeProvider>
        </LanguageProvider>
      </BrowserRouter>
    </>
  )
}