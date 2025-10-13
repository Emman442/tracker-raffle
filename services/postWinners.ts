
import { RaffleWinners } from "./fetchWinners";

export const addWinners = async (raffle: RaffleWinners): Promise<any> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/winners`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(raffle),
    });
    if (!res.ok) throw new Error('Failed to add new winner');
    return res.json();
}
