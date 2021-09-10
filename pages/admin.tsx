// Imports
declare const window: any;

import Layout from "@components/Layout"; // Layout wrapper
import { ethers } from 'ethers'

import Token from '../src/artifacts/contracts/WeedLoot.sol/WeedLoot.json'

const TokenAddress = '0xE884e9fC6823c00F7f82369049529A5A5adc157e'


  // Types
  import { useEffect, useState } from "react";


  export default function Admin() {
    const [costToMint, setCostToMint] = useState('')
    const [totalSupply, setTotalSupply] = useState('')
    const [tokenImages, setTokenImages] = useState([''])

    async function requestAccount() {
        return await window.ethereum.request({ method: 'eth_requestAccounts' });
    }

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
            const [account] = await requestAccount()
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(TokenAddress, Token.abi, provider)
            const balance = await contract.balanceOf(account);

            const total = parseInt(balance.toString())
            console.log('total', total)

            const tokens = []

            for (let i = 0; i < total; i++) {
                const token = await contract.tokenOfOwnerByIndex(account, i)

                const tokenUri = await contract.tokenURI(token)

                const decoded = Buffer.from(tokenUri.split(',')[1], 'base64').toString()
                
                const obj = JSON.parse(decoded)

                const encoded = Buffer.from(obj.image_data, 'binary').toString('base64')

                tokens.push('data:image/svg+xml;base64,' + encoded)

            }

            if(tokens.length) {
                setTokenImages(tokens)
            }

        }
      }

    async function mintMyOwn() {
          // const [account] = await requestAccount()
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner()
          const contract = new ethers.Contract(TokenAddress, Token.abi, signer)
          const res = await contract.costToMint()

          const overrides = {
            value: res.toString()
          }

        //   // console.log(account)
          await contract.claim(overrides)
    }

    async function mintAsOwner() {
        // const [account] = await requestAccount()
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner()
        const contract = new ethers.Contract(TokenAddress, Token.abi, signer)
        await contract.ownerClaim()

       
  }

    async function distribute() {
        // const amount = ethers.utils.parseEther(withdrawAmount).toString()
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner()
        const contract = new ethers.Contract(TokenAddress, Token.abi, signer)

        await contract.distribute()
        console.log('Distribute successful')
    }

    return (
      <Layout>
          <div className="container">

            <div>
                {tokenImages && tokenImages[0] !== '' && tokenImages.map((v,i) => {
                    
                    return (
                        <img src={v} alt="" key={i} width="300" className="lootImg"/>
                    )
                })}
            </div>

            <div>
                <h1>Getters</h1>
                <button onClick={getCost}>Get Cost To Mint</button><br /><br />
                <button onClick={getBalance}>Show my Loot</button><br /><br />
            </div>

            <div>
                <h1>Setters</h1>
                <input onChange={e => setCostToMint(e.target.value)} placeholder="Amount In ETH" />
                <button onClick={setCost}>Set Cost To Mint</button><br /><br />
            </div>

            <div>
                <h1>Minting</h1>
                <button onClick={mintMyOwn}>Mint My Own!</button><br /><br />
                <button onClick={mintAsOwner}>Mint As Owner!</button>
            </div>

            <div>
                <h1>Other</h1>
                <button onClick={distribute}>Distribute</button>
            </div>
          </div>

      </Layout>
    );
  }
