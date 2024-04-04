import React from 'react'

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  amountDisabled=false,
  selectCurrency="usd",
  currencyOptions = [],

}) => {
  console.log(selectCurrency)
  return (
    <div className='bg-white p-3 rounded-lg text-sm flex '>
      <div className="w-1/2">
        <label >{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          value={amount}
          disabled={amountDisabled}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value))
          }}
          placeholder='Amount'
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          value={selectCurrency}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none">
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox