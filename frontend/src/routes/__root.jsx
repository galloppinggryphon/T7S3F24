import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import Box from '@mui/material/Box'
import { Container, CssBaseline } from '@mui/material'
import MainMenu from '@/components/MainMenu'

export const Route = createRootRoute( {
    component: () => (
        <>
            <CssBaseline />
            <Box sx={ { flexGrow: 1 } }>
                <MainMenu />
            </Box>

            { /* <hr /> */ }
            <Container maxWidth={ false }>
                <Outlet />
            </Container>
            <TanStackRouterDevtools />
        </>
    ),
} )
