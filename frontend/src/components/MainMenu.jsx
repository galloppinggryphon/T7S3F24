import { Link } from '@tanstack/react-router'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function MainMenu() {
    return (
        <AppBar position="static">
            <Toolbar sx={ { justifyContent: 'end', gap: 4 } }>
                <Button color="inherit">
                    <Link to="/" style={ { color: 'inherit', textDecoration: 'none' } }>
                        Home
                    </Link>
                </Button>
                <Button color="inherit">
                    <Link to="/dashboard" style={ { color: 'inherit', textDecoration: 'none' } }>
                        Dashboard
                    </Link>
                </Button>
                <Button color="inherit">
                    <Link to="/about" style={ { color: 'inherit', textDecoration: 'none' } }>
                        About
                    </Link>
                </Button>
                <Typography variant="h6" component="div" sx={ { marginLeft: 5, marginRight: 3 } }>
                    T7S3F24
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
