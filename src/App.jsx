import React, {useRef, useState} from 'react'
import Mint from './components/MintButton/Mint'

function App() {
  const [accounts, setAccounts] = useState([]);

  async function connectAccount() {
      if (window.ethereum) {
          const accounts = await window.ethereum.request({
              method: "eth_requestAccounts",
          });
          setAccounts(accounts);
      }
  }

  return (
    <>
        <nav>
          <ul>
            <li>
              <a href="https://twitter.com/batpepecoin?s=21">
                <img src="/img/twitter.png" className="twitter" alt="" srcSet />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/img/telegram.png" alt="" srcSet />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/img/dextools.png" alt="" srcSet />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/img/etherscan.png" alt="" srcSet />
              </a>
            </li>
          </ul>
        </nav>
        <img src="/img/$.png" alt="" className="spotlight" />
        <img src="/img/gotham.png" alt="" className="city" />
        <img src="/img/bats.png" alt="" className="bats" />
        <img src="/img/Camada 1.png" alt="" className="batman" />
        {/* <div className="rectwrap">
          <img src="/img/Retângulo 1.png" alt="" className="rect1" />
          <img src="/img/Retângulo 1 copiar.png" alt="" className="rect2" />
        </div> */}
        <div className="logowrap">
          <img src="/img/logo copiar 2.png" alt="" className="logo" />
          <div className="text-wrap">
            <img src="/img/$bApePE.png" alt="" className="text" />
          </div>
        </div>

        {/* action buttons */}
        <div className="action-btns">
          <Mint accounts={accounts} setAccounts={setAccounts} />
        </div>
        </>
  )
}

export default App