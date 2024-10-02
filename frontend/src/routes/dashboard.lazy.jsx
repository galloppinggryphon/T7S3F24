import { createLazyFileRoute } from '@tanstack/react-router'
// import DashboardExample from '../../../frontend-dashboard-example/src/dashboard'
import { Dashboard } from '@t7s3f24/frontend-dashboard-example'

export const Route = createLazyFileRoute( '/dashboard' )( {
    component: Dashboard,
    // component: () => <div>Hello /dashboard!</div>,
} )
