import { useEffect, useRef, useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import newcontract from './Newcontract.json';
import { useAlert } from 'react-alert';
import './style.css'

const newcontractAddress = "0x3bE3A9DD022E43d4604819d540b7Ad1028E53AbF";

const Mint = ({ accounts, setAccounts }) => {
    const [price, setPrice] = useState(0)
    const alert = useAlert();

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                newcontractAddress,
                newcontract,
                signer
            );
            try {
                const response = await contract.buyTokens(accounts[0], {
                    value: ethers.utils.parseEther(price)
                });
                alert.success("minted successfully");
                console.log(response);
            } catch (err) {
                alert.error(err?.reason);
                console.log("error: ", err)
            };
        };
    };


    const handleInput = e => {
        setPrice(e.target.value);
    }

    // connect button
    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    const mint = () => {
        handleMint();
    }

    return (
        typeof accounts[0] !== 'undefined'
        ?
            <div className='buttons-wrap'>
                <div className='inc-buttons'>
                    <p>Amount in Eth</p>
                    <input type="number" value={price} onInput={handleInput} />
                </div>

                <div className="buy-buttons">
                <button onClick={mint} className='mint-button'>
                    buy
                </button>
                <button onClick={()=>{}} className='mint-button'>
                    claim
                </button>
                </div>
            </div>
        :
        <div>
            <button onClick={connectAccount} className='mint-button connect'>
                connect wallet
            </button>
        </div>
)}

export default Mint;