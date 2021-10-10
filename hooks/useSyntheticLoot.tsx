import { Contract } from '@ethersproject/contracts';
import { useEffect, useState } from 'react';
import { useWalletContext } from './useWalletContext';

const useSyntheticLoot = () => {
  const { account, provider } = useWalletContext();
  const [svg, setSVG] = useState<string>();
  useEffect(() => {
    if (!account || !provider) return;
    const contract = new Contract(
      SyntheticLootMainnetAddress,
      SyntheticLootPartialABI,
      provider
    );
    contract.functions
      .tokenURI(account)
      .then(([tokenURI]: [tokenURI: string]) => {
        try {
          const _svg = atob(
            JSON.parse(
              atob(tokenURI.replace('data:application/json;base64,', ''))
            ).image.replace('data:image/svg+xml;base64,', '')
          );
          setSVG(_svg);
        } catch (err) {
          console.log(err);
        }
      });
  }, [account, provider]);
  return svg;
};

const SyntheticLootMainnetAddress =
  '0x869ad3dfb0f9acb9094ba85228008981be6dbdde';

const SyntheticLootPartialABI = [
  {
    inputs: [
      { internalType: 'address', name: 'walletAddress', type: 'address' }
    ],
    name: 'tokenURI',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  }
];

export default useSyntheticLoot;
