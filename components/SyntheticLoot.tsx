import useSyntheticLoot from 'hooks/useSyntheticLoot';
import { useWalletContext } from 'hooks/useWalletContext';
import React from 'react';

const SyntheticLoot = () => {
  const { connectWallet, account } = useWalletContext();
  const syntheticLootSVG = useSyntheticLoot();
  console.log({ syntheticLootSVG });
  return (
    <div className="synthetic-loot w-full">
      {!account ? (
        <button
          className="bg-gray-800 hover:bg-gray-600 py-2 border-gray-600 border rounded px-4 my-1"
          onClick={connectWallet}
        >
          Connect Wallet to View Your sLoot
        </button>
      ) : syntheticLootSVG ? (
        <div className="w-80">
          <svg className="w-80" dangerouslySetInnerHTML={{ __html: syntheticLootSVG }} />
        </div>

      ) : null}
    </div>
  );
};

export default SyntheticLoot;
