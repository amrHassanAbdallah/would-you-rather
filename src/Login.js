import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


class Login extends React.Component {
    render() {
        let users = this.props.users ? this.props.users : []
        console.log(users,this.props.store)
        return (

            <Container component="main" maxWidth="xs">
                {this.props.loading  && (
                    <span>loading...</span>
                )}
                <CssBaseline/>
                <div className={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <LockOutlinedIcon/>
                    <Typography component="h1" variant="h5">
                        Sign in as
                    </Typography>
                    <form className={{
                        width: '100%', // Fix IE 11 issue.
                        marginTop: 1,
                    }} noValidate>
                        {Object.keys(users).map((user) => (

                            <Button
                                type="submit"
                                fullWidth
                                variant="outlined"
                                color="primary"
                            >
                                As {users[user].name}
                            </Button>
                        ))}

                    </form>
                </div>

            </Container>
        )
    }
}

export default Login
