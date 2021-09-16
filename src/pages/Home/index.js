import React, { useEffect, useState } from "react";
import {
  Paper,
  Button,
  LinearProgress,
  Grid,
  makeStyles,
  Typography,
  ButtonBase,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // General Styles
  root: {
    flexGrow: 1,
    [theme.breakpoints.down("768")]: {
      backgroundColor: "#000",
    },
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    height: "8vh",
    width: "100%",
    margin: "auto",

    fontSize: theme.typography.pxToRem(35),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  // </> General Styles

  // Post Styles
  post: {
    maxWidth: 700,

    margin: "auto",
    marginTop: theme.spacing(2.5),
    "&:last-child": {
      marginBottom: theme.spacing(2.5),
    },

    padding: theme.spacing(2),

    backgroundColor: theme.palette.background.paper,
  },
  image: {
    width: "100%",
    height: "100%",
    "& > img": {
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
  },
  subtitulo: {
    textAlign: "justify",
  },
  button: {
    fontWeight: theme.typography.fontWeightBold,
    background: theme.palette.background.paper,
  },
  // </> Post Styles
}));

export default function Home() {
  const [nutri, setNutri] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function loadApi() {
      setLoading(true);
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          setNutri(json);
          setLoading(false);
        });
    }
    loadApi();
  }, []);

  const classes = useStyles();
  return (
    <div className="root">
      <header className={classes.header}>
        <Typography variant="h1">React Nutri</Typography>
      </header>

      {!loading ? (
        nutri.map((item) => {
          return (
            <Paper
              key={item.id}
              elevation={5}
              className={classes.post}
              component="article"
            >
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="h4">{item.titulo}</Typography>
                </Grid>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img src={item.capa} alt={item.titulo} />
                  </ButtonBase>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    paragraph
                    wrap="wrap"
                    className={classes.subtitulo}
                  >
                    {item.subtitulo}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    fullWidth
                    variant="contained"
                    className={classes.button}
                  >
                    Acessar
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          );
        })
      ) : (
        <LinearProgress color="secondary" />
      )}
    </div>
  );
}
