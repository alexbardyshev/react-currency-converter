import logo from './logo.svg';
import './App.css';
import {CurrencyInput} from "./CurrencyInput";

function App() {
    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('UAH');
    const [currency2, setCurrency2] = useState('USD');

    return (
    <div className="App">
      <CurrencyInput
          amount={amount1}
          currency={currency1}
      />
      <CurrencyInput
          amount={amount2}
          currency={currency2}
      />
    </div>
  );
}

export default App;
