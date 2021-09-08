// Imports
declare const window: any;

import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/Resources.module.scss"; // Page styles
import { ethers } from 'ethers'

import Token from '../src/artifacts/contracts/WeedLoot.sol/WeedLoot.json'

const {tokenAddress: TokenAddress} = require('../secrets.json')

  
  // Types
  import { useState } from "react";
  
  
  export default function Admin() {
    const [costToMint, setCostToMint] = useState('')
    const [totalSupply, setTotalSupply] = useState('')

    async function getCost() {
        if (typeof window.ethereum !== 'undefined') {
          // const [account] = await requestAccount()
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const contract = new ethers.Contract(TokenAddress, Token.abi, provider)
          const cost = await contract.getCostToMint();
    
          console.log('cost', cost.toString())
        }
      }
    
      async function setCost() {
        const amount = ethers.utils.parseEther(costToMint).toString()
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner()
        const contract = new ethers.Contract(TokenAddress, Token.abi, signer)
    
        await contract.setCostToMint(amount)
        console.log('Cost Set!')
      }
    
      async function setSupply() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner()
        const contract = new ethers.Contract(TokenAddress, Token.abi, signer)
    
        await contract.setTotalSupply(totalSupply)
        console.log('Supply Set!')
      }
    
      async function getBalance() {
        if (typeof window.ethereum !== 'undefined') {
          // const [account] = await requestAccount()
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const contract = new ethers.Contract(TokenAddress, Token.abi, provider)
          const balance = await contract.getBalance();
    
          console.log('balance', balance.toString())
    
        }
      }

    async function mintMyOwn() {
          // const [account] = await requestAccount()
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner()
          const contract = new ethers.Contract(TokenAddress, Token.abi, signer)
          
    
          const amount = await contract.getCostToMint()
    
          const overrides = {
            value: amount
          }
    
          // console.log(account)
          await contract.purchaseAndMint(overrides)
    }

    async function distribute() {

        // const amount = ethers.utils.parseEther(withdrawAmount).toString()
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner()
        const contract = new ethers.Contract(TokenAddress, Token.abi, signer)
    
        await contract.distribute()
        console.log('Distribute successful')
      }
    
      async function getTotalSupply() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner()
        const contract = new ethers.Contract(TokenAddress, Token.abi, signer)
    
        const result = await contract.getTotalSupply()
        console.log(result.toString())
      }

    return (
      <Layout>
          <div className="container">
            <div>
                <h1>Getters</h1>
                <button onClick={getCost}>Get Cost To Mint</button><br /><br />
                <button onClick={getBalance}>Get Balance</button><br /><br />
                <button onClick={getTotalSupply}>Get Total Supply</button>
            </div>

            <div>
                <h1>Setters</h1>
                <input onChange={e => setCostToMint(e.target.value)} placeholder="Amount In ETH" />
                <button onClick={setCost}>Set Cost To Mint</button><br /><br />
                <input onChange={e => setTotalSupply(e.target.value)} placeholder="Total" />
                <button onClick={setSupply}>Set Total Supply</button><br /><br />
            </div>

            <div>
                <h1>Minting</h1>
                <button onClick={mintMyOwn}>Mint My Own!</button>
            </div>

            <div>
                <h1>Other</h1>
                <button onClick={distribute}>Distribute</button>
            </div>
          </div>
        
      </Layout>
    );
  }
  