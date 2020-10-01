//@flow
import React from "react";
import {connect} from "react-redux";
import type {Store} from "../../../shared/flowTypes";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(10),
    },
    card: {
        marginTop: theme.spacing(2),
        alignContent: 'center'
    },
    button: {
        marginTop: theme.spacing(1),
        float: 'right',
    },
    titleCard: {
        color: theme.var.textColorDark,
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(2),
        font: 'Bold 24px/20px Roboto',
        float: 'left',
    },
}));

type Props = {}

const Login = (props: Props) => {

    const classes = useStyles();

    return (
        <Grid container
              direction="row"
              justify="center"
              alignItems="center" spacing={3}>
            <Card className={classes.root}>
                <CardContent>
                    <Grid container spacing={8}>
                        <Grid item xs={10}>
                            <Typography className={classes.titleCard}>Login</Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>

                        <Grid item xs={12}>
                            <TextField variant={"outlined"} fullWidth={true} name={'login'} type={"email"}
                                       label={'Login'} placeholder="Login" autoFocus/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant={"outlined"} fullWidth={true} name={'senha'} type={"password"}
                                       label={'Senha'} placeholder="Senha"/>
                        </Grid>

                        <Grid item container justify="center" sm={6}>
                            <Button className={classes.button}
                                    variant="outlined"
                                    onClick={''}
                                    fullWidth={false}>
                                {'Cadastrar'}
                            </Button>
                        </Grid>

                        <Grid item container justify="center" sm={6}>
                            <Button className={classes.button} disabled={false}
                                    variant="contained" color="primary"
                                    fullWidth={false}
                                    type="submit">
                                {'Entrar'}
                            </Button>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </Grid>
    );
}

const mapStateToProps = (store: Store) => {
    return {};
};

const mapToDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapToDispatchToProps)(Login);