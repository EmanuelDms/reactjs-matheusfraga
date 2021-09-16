import { Grid as GridContainer, styled, useTheme } from "@material-ui/core";
import React from "react";
import { Link as Anchor } from "react-router-dom";

export default function Header() {
  const theme = useTheme();

  const Grid = styled(GridContainer)({
    border: theme.palette.secondary,
    width: "100%",
  });
  const Link = styled(Anchor)({});

  return (
    <Grid container justifyContent="space-around">
      <Link to="/">Home</Link>
      <Link to="/contato">Contato</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/produto">Produtos</Link>
    </Grid>
  );
}
