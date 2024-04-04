import React from 'react'
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { useState,useEffect } from 'react';
import SwapVertIcon from '@mui/icons-material/SwapVert';
const App = () => {
  const [to, setTo] = useState('inr')
  const [from, setFrom] = useState('usd')
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  
  const CurrencyInfo=useCurrencyInfo("usd");
  console.log("currency info type:", typeof CurrencyInfo);

  const options= CurrencyInfo ? Object.keys(CurrencyInfo):[];
  // console.log("options ",options);
  const convert=()=>{
    setConvertedAmount(amount*(CurrencyInfo[to]))
  }
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    }}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form 
          onSubmit={(e)=>{
            e.preventDefault();
            convert();
          }}
          >
            <div className="w-full mb-1">
              <InputBox
              label="From"
              amount={amount}
              onAmountChange={(amount)=>{
                setAmount(amount);
              }}
              onCurrencyChange={(currency)=>{
                setFrom(currency)
              }}
              currencyOptions={options}
              selectCurrency={from}
              
              />
            </div>
            <div  className="relative w-full h-0.5">
              <button
              type='button'
              onClick={swap}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              > <SwapVertIcon /> Swap</button>
            </div>
            <div className="w-full mb-1">
              <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onAmountChange={(amount)=>{
               setAmount(amount)
              }}
              onCurrencyChange={(currency)=>{
                setTo(currency)
              }}
              selectCurrency={to}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
            Convert {to} to {from} 
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App