export interface RaffleWinners {
    user: string;
    _id: string;
    amount: number;
}

export const fetchWinners = async (): Promise<RaffleWinners[]> => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/winners`);
    if (!res.ok) throw new Error('Failed to fetch past winners');
    return res.json();
};