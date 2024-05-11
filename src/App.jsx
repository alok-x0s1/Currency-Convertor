import { useState } from "react"
import { InputBox } from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import "./App.css"

function App() {

  const [amount, setAmount] = useState()
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to].toFixed(2));
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
    >
        <div className="w-full min-h-screen p-12 flex flex-wrap justify-between items-center">
            <a className="max-w-96 rounded-full hidden lg:block" href="https://twitter.com/hiteshdotcom" target="_blank">
                <img src='https://images.pexels.com/photos/18264705/pexels-photo-18264705/free-photo-of-smiling-man-in-headphones-with-microphone-using-a-apple-macbook.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Image" className="rounded-full" />
            </a>
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 text-center">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            selectCurrency={from}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            onAmmountChange={(ammount) => setAmount(ammount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            amountDisabled
                            currencyOptions={options}
                            selectCurrency={to}
                            onCurrencyChange={(currency) => setTo(currency)}
                        />
                    </div>
                    <button className="button">
                        <span class="button-content">Convert {from.toUpperCase()} to {to.toUpperCase()}</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
