export type TokenLottery = {
  version: "0.1.0";
  name: "token_lottery";
  instructions: [
    {
      name: "initializeConfig";
      accounts: [
        { name: "config"; isMut: true; isSigner: false },
        { name: "authority"; isMut: true; isSigner: true },
        { name: "systemProgram"; isMut: false; isSigner: false }
      ];
      args: [
        { name: "startTime"; type: "i64" },
        { name: "endTime"; type: "i64" },
        { name: "prize"; type: "u64" },
        { name: "ticketPrice"; type: "u64" }
      ];
    },
    {
      name: "initializeLottery";
      accounts: [
        { name: "lottery"; isMut: true; isSigner: false },
        { name: "config"; isMut: false; isSigner: false },
        { name: "authority"; isMut: true; isSigner: true },
        { name: "systemProgram"; isMut: false; isSigner: false }
      ];
      args: [];
    },
    {
      name: "buyTicket";
      accounts: [
        { name: "lottery"; isMut: true; isSigner: false },
        { name: "ticket"; isMut: true; isSigner: false },
        { name: "buyer"; isMut: true; isSigner: true },
        { name: "systemProgram"; isMut: false; isSigner: false }
      ];
      args: [];
    },
    {
      name: "commitRandomness";
      accounts: [
        { name: "lottery"; isMut: true; isSigner: false },
        { name: "authority"; isMut: true; isSigner: true }
      ];
      args: [];
    },
    {
      name: "commitAWinner";
      accounts: [
        { name: "lottery"; isMut: true; isSigner: false },
        { name: "authority"; isMut: true; isSigner: true }
      ];
      args: [];
    },
    {
      name: "chooseWinner";
      accounts: [
        { name: "lottery"; isMut: true; isSigner: false },
        { name: "authority"; isMut: false; isSigner: true }
      ];
      args: [];
    },
    {
      name: "claimWinnings";
      accounts: [
        { name: "lottery"; isMut: true; isSigner: false },
        { name: "winner"; isMut: true; isSigner: true }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: "Config";
      type: {
        kind: "struct";
        fields: [
          { name: "authority"; type: "publicKey" },
          { name: "startTime"; type: "i64" },
          { name: "endTime"; type: "i64" },
          { name: "prize"; type: "u64" },
          { name: "ticketPrice"; type: "u64" }
        ];
      };
    },
    {
      name: "Lottery";
      type: {
        kind: "struct";
        fields: [
          { name: "id"; type: "u32" },
          { name: "authority"; type: "publicKey" },
          { name: "ticketsSold"; type: "u32" },
          { name: "winner"; type: "publicKey" },
          { name: "claimed"; type: "bool" },
          { name: "randomnessPending"; type: "bool" },
          { name: "isInitialized"; type: "bool" },
          { name: "isWinnerChosen"; type: "bool" }
        ];
      };
    },
    {
      name: "Ticket";
      type: {
        kind: "struct";
        fields: [
          { name: "lotteryId"; type: "u32" },
          { name: "ticketId"; type: "u32" },
          { name: "buyer"; type: "publicKey" }
        ];
      };
    }
  ];
  errors: [
    { code: 6000; name: "LotteryNotOpen"; msg: "Lottery is not currently open." },
    { code: 6001; name: "LotteryEnded"; msg: "Lottery has already ended." },
    {
      code: 6002;
      name: "WinnerAlreadyChosen";
      msg: "A winner has already been chosen.";
    },
    { code: 6003; name: "NotTheWinner"; msg: "You are not the winner." },
    {
      code: 6004;
      name: "WinningsAlreadyClaimed";
      msg: "Winnings have already been claimed.";
    }
  ];
};

export const IDL: TokenLottery = {
  version: "0.1.0",
  name: "token_lottery",
  instructions: [
    {
      name: "initializeConfig",
      accounts: [
        { name: "config", isMut: true, isSigner: false },
        { name: "authority", isMut: true, isSigner: true },
        { name: "systemProgram", isMut: false, isSigner: false },
      ],
      args: [
        { name: "startTime", type: "i64" },
        { name: "endTime", type: "i64" },
        { name: "prize", type: "u64" },
        { name: "ticketPrice", type: "u64" },
      ],
    },
    {
      name: "initializeLottery",
      accounts: [
        { name: "lottery", isMut: true, isSigner: false },
        { name: "config", isMut: false, isSigner: false },
        { name: "authority", isMut: true, isSigner: true },
        { name: "systemProgram", isMut: false, isSigner: false },
      ],
      args: [],
    },
    {
      name: "buyTicket",
      accounts: [
        { name: "lottery", isMut: true, isSigner: false },
        { name: "ticket", isMut: true, isSigner: false },
        { name: "buyer", isMut: true, isSigner: true },
        { name: "systemProgram", isMut: false, isSigner: false },
      ],
      args: [],
    },
    {
      name: "commitRandomness",
      accounts: [
        { name: "lottery", isMut: true, isSigner: false },
        { name: "authority", isMut: true, isSigner: true },
      ],
      args: [],
    },
    {
      name: "commitAWinner",
      accounts: [
        { name: "lottery", isMut: true, isSigner: false },
        { name: "authority", isMut: true, isSigner: true },
      ],
      args: [],
    },
    {
      name: "chooseWinner",
      accounts: [
        { name: "lottery", isMut: true, isSigner: false },
        { name: "authority", isMut: false, isSigner: true },
      ],
      args: [],
    },
    {
      name: "claimWinnings",
      accounts: [
        { name: "lottery", isMut: true, isSigner: false },
        { name: "winner", isMut: true, isSigner: true },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "Config",
      type: {
        kind: "struct",
        fields: [
          { name: "authority", type: "publicKey" },
          { name: "startTime", type: "i64" },
          { name: "endTime", type: "i64" },
          { name: "prize", type: "u64" },
          { name: "ticketPrice", type: "u64" },
        ],
      },
    },
    {
      name: "Lottery",
      type: {
        kind: "struct",
        fields: [
          { name: "id", type: "u32" },
          { name: "authority", type: "publicKey" },
          { name: "ticketsSold", type: "u32" },
          { name: "winner", type: "publicKey" },
          { name: "claimed", type: "bool" },
          { name: "randomnessPending", type: "bool" },
          { name: "isInitialized", type: "bool" },
          { name: "isWinnerChosen", type: "bool" },
        ],
      },
    },
    {
      name: "Ticket",
      type: {
        kind: "struct",
        fields: [
          { name: "lotteryId", type: "u32" },
          { name: "ticketId", type: "u32" },
          { name: "buyer", type: "publicKey" },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: "LotteryNotOpen",
      msg: "Lottery is not currently open.",
    },
    { code: 6001, name: "LotteryEnded", msg: "Lottery has already ended." },
    {
      code: 6002,
      name: "WinnerAlreadyChosen",
      msg: "A winner has already been chosen.",
    },
    { code: 6003, name: "NotTheWinner", msg: "You are not the winner." },
    {
      code: 6004,
      name: "WinningsAlreadyClaimed",
      msg: "Winnings have already been claimed.",
    },
  ],
};
