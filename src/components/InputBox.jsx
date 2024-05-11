import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmmountChange,
    onCurrencyChange,
    currencyOptions = [],
    amountDisabled = false,
    currencyDisabled = false,
    selectCurrency = "usd",
    className = "",
}) {
   
    const amountID = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2 text-start">
                <label 
                htmlFor={amountID}
                className="text-black text-lg mb-2 inline-block">
                    {label}
                </label>
                <input
                id={amountID}
                    value={amount}
                    onChange={(e) => onAmmountChange && onAmmountChange(Number(e.target.value))}
                    disabled={amountDisabled}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black text-sm mb-2 w-full">Currency Type</p>
                <select
                value={selectCurrency}
                disabled={currencyDisabled}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                >
                    {
                        currencyOptions.map(
                            (currency) => (        
                                <option 
                                value={currency} 
                                key={currency}
                                >
                                {currency}
                                </option>
                            )
                        )
                    }
                </select>
            </div>
        </div>
    );
}

export default InputBox;