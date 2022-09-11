import logo from './logo.svg';
import './App.css';
import {CurrencyInput} from "./CurrencyInput";
import {useState, useEffect} from "react";
import axios from "axios";
import {Grid} from "@material-ui/core";

function App() {
    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('UAH');
    const [currency2, setCurrency2] = useState('USD');

    const [rates, setRates] = useState([]);

    useEffect(() => {
        axios.get('http://data.fixer.io/api/latest?access_key=106ab470d06b4c14d00c10f864ef62b6')
            .then(response => {
                setRates(response.data.rates);
            })
    }, []);

    useEffect(() => {
        if (!rates) {
            function init() {
                handleAmount1Change(1);
            }
            init();
        }
    }, [rates]);



    function handleAmount1Change(amount1) {
        setAmount2(roundUp(amount1 * rates[currency2] / rates[currency1]));
        setAmount1(amount1);

    }

    function handleCurrency1Change(currency1) {
        setAmount2(roundUp(amount1 * rates[currency2] / rates[currency1]));
        setCurrency1(currency1);
    }

    function handleAmount2Change(amount2) {
        setAmount1(roundUp(amount2 * rates[currency1] / rates[currency2]));
        setAmount2(amount2);
    }

    function handleCurrency2Change(currency2) {
        setAmount1(roundUp(amount2 * rates[currency1] / rates[currency2]));
        setCurrency2(currency2);
    }

    function roundUp(number) {
        return number.toFixed(2);
    }

    return (
    <div className="App">
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <h1>Currency Exchanger</h1>
              <CurrencyInput
                  amount={amount1}
                  currency={currency1}
                  currencies={Object.keys(rates)}
                  label="Buy"
                  onAmountChange={handleAmount1Change}
                  onCurrencyChange={handleCurrency1Change}
              />
              <CurrencyInput
                  amount={amount2}
                  currency={currency2}
                  label="for"
                  currencies={Object.keys(rates)}
                  onAmountChange={handleAmount2Change}
                  onCurrencyChange={handleCurrency2Change}
              />
        </Grid>
    </div>
  );
}

export default App;
