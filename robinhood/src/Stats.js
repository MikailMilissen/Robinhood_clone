import React, { useState, useEffect } from 'react'
import './Stats.css'
import axios from 'axios'
import StatsRow from './StatsRow'
import {db} from './firebase'

const KEY_URL = 'c1359p748v6rj20a8opg'
const BASE_URL = 'https://finnhub.io/api/v1/quote'

function Stats() {

    const [stockData, setStockData] = useState([]);

    const [myStocks, setmyStocks] = useState([])

    const getStocksData = (stock) => {
        return axios
            .get (`${BASE_URL}?symbol=${stock}&token=${KEY_URL}`)
            .catch((error) => {
                console.error('Error', error.message)
            })
    }

    useEffect(() => {
        let tempStocksData = []
        const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];
        let promises = [];
        stocksList.map((stock) => {
          promises.push(
            getStocksData(stock)
            .then((res) => {
                tempStocksData.push({
                    name: stock,
                    ...res.data
             });
            })
          )
        });

        Promise.all(promises).then(()=>{
            console.log(tempStocksData);
            setStockData(tempStocksData);
          })

    }, [])

  

    return (
        <div className='stats'>
            <div className="stats__container">
                <div className="stats__header">
                    <p>Stocks</p>
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
{/* For the current stocks */}
                    </div>
                </div>
                <div className="stats__header">
                    <p>Lists</p>
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
                        {stockData.map((stock) => (
                            <StatsRow 
                                key={stock.name}
                                name={stock.name}
                                openPrice={stock.o}
                                price={stock.c}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
