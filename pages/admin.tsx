// Imports
declare const window: any;

import Layout from "@components/Layout"; // Layout wrapper
import { ethers } from 'ethers'

import Token from '../src/artifacts/contracts/WeedLoot.sol/WeedLoot.json'

const TokenAddress = '0x157998B5Cb6924A95c877a7f6d3447329D1aA312'


  // Types
  import { useEffect, useState } from "react";


  export default function Admin() {
    const [costToMint, setCostToMint] = useState('')
    const [totalSupply, setTotalSupply] = useState('')
    const [tokenImages, setTokenImages] = useState([''])

    useEffect(() => {
        if(!tokenImages || tokenImages[0] == ''){
            getBalance()
        }
    })

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
        var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

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

                console.log(obj)

                tokens.push('data:image/svg+xml;base64,' + Base64.encode(obj.image_data))

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
                <button onClick={getBalance}>Get Balance</button><br /><br />
            </div>

            <div>
                <h1>Setters</h1>
                <input onChange={e => setCostToMint(e.target.value)} placeholder="Amount In ETH" />
                <button onClick={setCost}>Set Cost To Mint</button><br /><br />
            </div>

            <div>
                <h1>Minting</h1>
                <button onClick={mintMyOwn}>Mint My Own!</button>
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
