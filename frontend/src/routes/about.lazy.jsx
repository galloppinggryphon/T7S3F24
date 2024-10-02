import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute( '/about' )( {
    component: About,
} )

import React from '@/assets/react.svg'
import { Box } from '@mui/material'

function About() {
    return <Box className="p-2" sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
        <h1>Hello from About!</h1>
        <p>Here, have an SVG icon:</p>
        <React width="200" height="200" />
    </Box>
}
