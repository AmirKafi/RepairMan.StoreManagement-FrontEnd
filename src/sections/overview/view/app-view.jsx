import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import AppWidgetSummary from '../app-widget-summary';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Income"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/Income_Icon.svg" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="This Month"
            total={12000}
            color="info"
            icon={<img alt="icon" src="/assets/icons/Income_Astronaut.svg" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Repairs"
            total={30000}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/Phone_Repair.svg" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="This Week"
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/Phone_Repair_2.svg" />}
          />
        </Grid>

        <Grid xs={12} sm={12} md={12}>
          <img alt="img" src="/assets\illustrations/Phone_Repair.jpg" />
        </Grid>
      </Grid>
    </Container>
  );
}
