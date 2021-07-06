import { Button, Container, Grid, Hidden, Typography } from "@material-ui/core";
import React from "react";

import "./Home.css";

export default function Home() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={"title"}>
            <Hidden smDown>
              <Typography variant="h1">Stalder Taxi-Service</Typography>
              <Typography variant="h4">Der private non-profit Taxi-Service Ihres Vertrauens!</Typography>
            </Hidden>
            <Hidden mdUp>
              <Typography variant="h4">Stalder Taxi-Service</Typography>
              <Typography variant="h6">Der private non-profit Taxi-Service Ihres Vertrauens!</Typography>
            </Hidden>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={process.env.PUBLIC_URL + "/title_image.jpg"} alt="Header Image" className={"titleImage"} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={"bookingDiv"}>
            <Typography variant="h4">Jetzt buchen!</Typography>
            <Typography variant="body">
              Wir nehmen zur Zeit keine neuen Passagiere über unsere Website an. Danke für Ihr Verständins.
            </Typography>

            <Button variant="contained" color="primary" disabled={true}>
              Buchen
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
