import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter( { routeTree } )

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}
