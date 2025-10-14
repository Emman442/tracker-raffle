// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor'
import { Cluster, PublicKey } from '@solana/web3.js'
import tokenLotteryIDL from '../target/idl/token_lottery.json'
import type { Raffle } from '../target/types/token_lottery'

// Re-export the generated IDL and type
export { Raffle, tokenLotteryIDL }

// The programId is imported from the program IDL.
export const TOKEN_LOTTERY_PROGRAM_ID = new PublicKey(tokenLotteryIDL.address)

// This is a helper function to get the Counter Anchor program.
export function getTokenLotteryProgram(provider: AnchorProvider, address?: PublicKey) {
    return new Program({ ...tokenLotteryIDL, address: address ? address.toBase58() : tokenLotteryIDL.address } as Raffle, provider)
}

// This is a helper function to get the program ID for the Counter program depending on the cluster.
export function gettokenLotteryId(cluster: Cluster) {
    switch (cluster) {
        case 'devnet':
        case 'testnet':
            // This is the program ID for the Counter program on devnet and testnet.
            return new PublicKey("BQuBEeVWhtjKUSkmGPEoUo5s3zPnukrFQaFE9FTgFCdN")
        case 'mainnet-beta':
        default:
            return TOKEN_LOTTERY_PROGRAM_ID
    }
}