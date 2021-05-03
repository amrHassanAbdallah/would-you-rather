import React from "react";

import {
    AppBar,
    Toolbar,
    Typography
} from "@material-ui/core"


class NavBar extends React.Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            React
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }

}

export default NavBar
