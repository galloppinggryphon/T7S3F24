import { Box } from '@mui/material'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute( '/' )( {
    component: Index,
} )

function Index() {
    return (
        <Box className="p-2" sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
            <h1>Welcome Home!</h1>
        </Box>
    )
}
