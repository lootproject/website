import { useEffect, useState } from 'react';
import { ethers } from "ethers";
const useTreasury = () => {
    const [dao, setDao] = useState(0);

    useEffect(() => {
        if (dao) return;
        const provider = ethers.getDefaultProvider('mainnet', {
            alchemy: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
        });

        async function fetchBalance(
            provider: ethers.providers.Provider
        ) {
            let treasury;
            const treasuryMainnetAddress =
                '0x8cFDF9E9f7EA8c0871025318407A6f1Fbc5d5a18';
            if (!provider) return;
            try {
                treasury = await provider.getBalance(treasuryMainnetAddress);
                setDao(
                    parseFloat(parseFloat(ethers.utils.formatUnits(treasury)).toFixed(4))
                );
            } catch (e) {
                console.log(e)
            }
        }

        fetchBalance(provider);
    }, [dao]);

    return { dao };
};

export default useTreasury;
