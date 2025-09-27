
## Core Features:

- Lottery Status Display: Display real-time lottery status: start time, end time, prize amount, total tickets sold, and open/closed status.
- Initialize Config (Admin): Form to set lottery parameters (start_time, end_time, prize), calling initialize_config instruction, requires authority wallet.
- Initialize Lottery (Admin): Button to execute the initialize_lottery instruction.
- Buy Ticket (Public): Display ticket price and allow users to purchase tickets via the buy_ticket instruction. Show confirmation and transaction signature post-purchase.
- Commit Randomness (Admin): Button to call commit_randomness (connects to Switchboard queue).
- Commit Winner (Admin): Button to call commit_a_winner, displaying pending randomness until resolved.
- Choose Winner (Admin): Button to execute choose_winner, displaying the winning wallet's public key.
- Claim Winnings (Winner): Conditional "Claim Prize" button for the winner, calling claim_winnings instruction and displaying the winning token amount in a styled card.



## Style Guidelines:


- Primary color: Electric cyan (#7FFFD4) for a vibrant and energetic feel, capturing the excitement of the lottery.
- Background color: Dark gray (#1E1E1E) providing a clean and modern aesthetic reminiscent of seekertracker.com.
- Accent color: Deep purple (#9400D3) to highlight important interactive elements and draw attention.
- Body and headline font: 'Space Grotesk' sans-serif, for a modern, computerized feel that provides good readability.
- Use minimalist and neon-outlined icons, similar to seekertracker.com.
- Clean and responsive grid layout, with cards and panels inspired by seekertracker.com, adapted for lottery information.
- Subtle hover animations on buttons and cards using framer-motion, mirroring seekertracker.com's elegant interactive effects.
- Implement a background grid, like in seekertracker, to improve visual cohesion and tech aesthetic.