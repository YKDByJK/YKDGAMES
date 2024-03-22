import { GambaStandardTokens, TokenMeta } from 'gamba-react-ui-v2'
import { PublicKey } from '@solana/web3.js'

// Can be configured in .env
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? "https://api.mainnet-beta.solana.com"

// Change this value to your Solana address
export const PLATFORM_CREATOR_ADDRESS = new PublicKey('HvX1mNoVH7EaqB6KDdgzsHageuNBvbgrpPvnNcEpcTva')

// Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'v2-play.YKD.so'

// List of tokens supported by this platform
export const TOKENS: TokenMeta[] = [
  GambaStandardTokens.sol,
  GambaStandardTokens.usdc,
  {
     mint: new PublicKey("BgFhv7WXJameaDeuwW5aSSGYyi6MpxE8yfyC2jYEssyy"),
    symbol: 'YKD',
    name: 'Yonder Kid Dreams',
    image: "https://bafkreicezjydn2w7byv574zlftwptyi6fm6rklftpvnytmg2jwp3vkjhwq.ipfs.nftstorage.link",
     decimals: 6,
     baseWager: 1 * 1e6,
   }
]
