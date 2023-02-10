import {
  TextField,
  Typography,
  Card,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";

import { useState } from "react";

const typProperties = {
  marginTop: "1%",
};

function App() {
  const [principal, setPrincipal] = useState(0);
  const [term, setTerm] = useState(0);
  const [rate, setRate] = useState(0);
  const [answer, setAnswer] = useState(0);

  const calcMonthlyInstallment = (principal, rate, term) => {
    const monthly_rate = (rate * 0.01) / 12;

    // using the annuity formula
    return (principal * monthly_rate) / (1 - Math.pow(1 + monthly_rate, -term));
  };

  return (
    <div className="App">
      <Container
        sx={{
          marginTop: "4%",
        }}
      >
        <Card sx={{ padding: "4%" }}>
          <Grid container>
            <Grid item>
              <Typography variant="h2" sx={{ marginBottom: "4%" }}>
                Loan Calculator
              </Typography>

              <Typography variant="h6" sx={typProperties}>
                Loan Amount
              </Typography>

              <TextField
                id="outlined-basic"
                color="primary"
                label="Amount"
                variant="filled"
                onChange={(e) => {
                  setPrincipal(e.target.value);
                  console.log(principal);
                }}
              />

              <Typography variant="h6" sx={typProperties}>
                Number of Months
              </Typography>
              <TextField
                id="outlined-basic"
                label="No. of Months"
                variant="filled"
                onChange={(e) => {
                  setTerm(e.target.value);
                  console.log(term);
                }}
              />

              <Typography variant="h6" sx={typProperties}>
                Annual Interest Rate
              </Typography>
              <TextField
                id="outlined-basic"
                label="Annual Interest Rate"
                variant="filled"
                onChange={(e) => {
                  setRate(e.target.value);
                  console.log(rate);
                }}
              />
            </Grid>

            <Grid item>
              <Typography variant="h6" sx={{ marginTop: "50%" }}>
                Monthly Payment:
              </Typography>
              <Paper sx={{ padding: "16%", minWidth: "100%" }}>
                ₱ {!answer ? 0 : answer.toFixed(2)}
              </Paper>
            </Grid>
          </Grid>
          <Button
            size="large"
            variant="contained"
            sx={{ marginTop: "2%" }}
            onClick={(e) => {
              setAnswer(
                calcMonthlyInstallment(
                  parseFloat(principal),
                  parseFloat(rate),
                  parseFloat(term)
                )
              );
            }}
          >
            Calculate
          </Button>
        </Card>
      </Container>
    </div>
  );
}

export default App;
