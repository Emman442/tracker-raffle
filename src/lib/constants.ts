import { PublicKey } from "@solana/web3.js";

// Use a placeholder program ID
export const PROGRAM_ID = new PublicKey(
  "LotRZFt41m28B1t4pTztf32aW3zP3yXyT1XJHfR1yB3"
);

// Use a placeholder for the authority wallet, replace with your actual authority public key
export const AUTHORITY_PUBLIC_KEY = new PublicKey(
  "auth92GZ51w2vGzY2N9v5w1s4Q8c7x6p3y5R3z1aW3zP"
);

// Use a placeholder winner public key for UI testing
export const MOCK_WINNER_PUBLIC_KEY = new PublicKey(
  "winnerGzY2N9v5w1s4Q8c7x6p3y5R3z1aW3zPauth92"
);


export const SOLANA_RPC_URL = "https://api.devnet.solana.com";
