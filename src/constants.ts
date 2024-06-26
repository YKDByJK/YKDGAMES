import { GambaStandardTokens, TokenMeta } from 'gamba-react-ui-v2'
import { PublicKey } from '@solana/web3.js'

// Can be configured in .env
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? "https://mainnet.helius-rpc.com/?api-key=d90aee17-b9c7-44d4-9c18-bc67f72d71f1"

// Change this value to your Solana address
export const PLATFORM_CREATOR_ADDRESS = new PublicKey('GUPCESUiXye7kh6kV9voGCk1C4LYukyuTwxLg7foYNRv')

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
    image: "ipfs://QmQULX9E5xbuu72Vmph9fDnJvUA85KPW7xheFJvXS2ywpc/Ykd_token-removebg-preview.png",
     decimals: 6,
     baseWager: 1 * 1e6,
   },
  
  {
    mint: new PublicKey("JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"),
  symbol: 'JUP', 
  name: 'Jupiter',
  image: "https://static.jup.ag/jup/metadata.json", 
   decimals: 6, 
   basewager: 1 *1e6,
  }

]
