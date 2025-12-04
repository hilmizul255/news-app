

import { Paper, TextField, Button, Box, Typography, LinearProgress, Snackbar, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data.json";


function Login() {
    const navigate = useNavigate();
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [isLoginInProgress, setIsLoginInProgress] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [user, setUser] = useState({ userName: '', password: '' });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        })

    }

    const handleLogin = (event) => {
        event.preventDefault();
        const matchedUser = data.find((userData) => userData.userName === user.userName && userData.password == user.password);

        if (matchedUser) {
            setIsLoginInProgress(true);
            setSnackbarOpen(false);
            setIsLoggedin(true);
        } else {
            setIsLoginInProgress(false);
            setSnackbarOpen(true);
        }

    }

    useEffect(() => {
        if (isLoggedin) {
            const timer = setTimeout(() => {
                navigate('/home');
            }, 1500);

            return () => clearTimeout(timer);
        }
    }, [isLoggedin]);




    return (
        <section className="bg-img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <Paper sx={{ padding: 5, width: '30%', margin: 'auto' }}>
                <form onSubmit={handleLogin}>
                    <Typography variant="h4" gutterBottom>Login</Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

                        <Box>
                            <TextField
                                type="text"
                                name="userName"
                                label="Username"
                                variant="outlined"
                                onChange={handleChange}
                                fullWidth
                                value={user.userName}
                            />
                        </Box>

                        <Box>
                            <TextField
                                type="password"
                                name="password"
                                label="Password"
                                variant="outlined"
                                onChange={handleChange}
                                fullWidth
                                value={user.password}
                            />
                        </Box>

                        <Button
                            type="submit"
                            variant="contained"
                            disabled={isLoginInProgress}
                            fullWidth
                            onClick={handleLogin}
                        >
                            Login

                        </Button>

                        {isLoginInProgress && (<LinearProgress />)}



                    </Box>
                </form>
            </Paper>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                // onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}

            >
                <Alert severity="error">
                    "Username or password is incorrect. Please try again."
                </Alert>
            </Snackbar>

        </section>

    );
}

export default Login;
