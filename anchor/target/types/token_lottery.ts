/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/raffle.json`.
 */
export type Raffle = {
    "address": "2mWFhDiwUTJw1BUSSbCQStJzMYeXf4FLA3oaPER6GmfY",
    "metadata": {
        "name": "raffle",
        "version": "0.1.0",
        "spec": "0.1.0",
        "description": "Created with Anchor"
    },
    "instructions": [
        {
            "name": "buyTicket",
            "discriminator": [
                11,
                24,
                17,
                193,
                168,
                116,
                164,
                169
            ],
            "accounts": [
                {
                    "name": "payer",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "tokenLottery",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    108,
                                    111,
                                    116,
                                    116,
                                    101,
                                    114,
                                    121
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "payerTokenAccount",
                    "writable": true
                },
                {
                    "name": "raffleVaultAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "tokenLottery"
                            },
                            {
                                "kind": "account",
                                "path": "tokenProgram"
                            },
                            {
                                "kind": "account",
                                "path": "tokenMint"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "tokenMint"
                },
                {
                    "name": "ticketMint",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "token_lottery.total_tickets",
                                "account": "tokenLottery"
                            }
                        ]
                    }
                },
                {
                    "name": "ticketMetadata",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    109,
                                    101,
                                    116,
                                    97,
                                    100,
                                    97,
                                    116,
                                    97
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "tokenMetadataProgram"
                            },
                            {
                                "kind": "account",
                                "path": "ticketMint"
                            }
                        ],
                        "program": {
                            "kind": "account",
                            "path": "tokenMetadataProgram"
                        }
                    }
                },
                {
                    "name": "destination",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "payer"
                            },
                            {
                                "kind": "account",
                                "path": "tokenProgram"
                            },
                            {
                                "kind": "account",
                                "path": "ticketMint"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "collectionMetadata",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    109,
                                    101,
                                    116,
                                    97,
                                    100,
                                    97,
                                    116,
                                    97
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "tokenMetadataProgram"
                            },
                            {
                                "kind": "account",
                                "path": "collectionMint"
                            }
                        ],
                        "program": {
                            "kind": "account",
                            "path": "tokenMetadataProgram"
                        }
                    }
                },
                {
                    "name": "ticketMasterEdition",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    109,
                                    101,
                                    116,
                                    97,
                                    100,
                                    97,
                                    116,
                                    97
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "tokenMetadataProgram"
                            },
                            {
                                "kind": "account",
                                "path": "ticketMint"
                            },
                            {
                                "kind": "const",
                                "value": [
                                    101,
                                    100,
                                    105,
                                    116,
                                    105,
                                    111,
                                    110
                                ]
                            }
                        ],
                        "program": {
                            "kind": "account",
                            "path": "tokenMetadataProgram"
                        }
                    }
                },
                {
                    "name": "collectionMasterEdition",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    109,
                                    101,
                                    116,
                                    97,
                                    100,
                                    97,
                                    116,
                                    97
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "tokenMetadataProgram"
                            },
                            {
                                "kind": "account",
                                "path": "collectionMint"
                            },
                            {
                                "kind": "const",
                                "value": [
                                    101,
                                    100,
                                    105,
                                    116,
                                    105,
                                    111,
                                    110
                                ]
                            }
                        ],
                        "program": {
                            "kind": "account",
                            "path": "tokenMetadataProgram"
                        }
                    }
                },
                {
                    "name": "tokenMetadataProgram",
                    "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
                },
                {
                    "name": "collectionMint",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    99,
                                    111,
                                    108,
                                    108,
                                    101,
                                    99,
                                    116,
                                    105,
                                    111,
                                    110,
                                    95,
                                    109,
                                    105,
                                    110,
                                    116
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "metadata",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    109,
                                    101,
                                    116,
                                    97,
                                    100,
                                    97,
                                    116,
                                    97
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "tokenMetadataProgram"
                            },
                            {
                                "kind": "account",
                                "path": "ticketMint"
                            }
                        ],
                        "program": {
                            "kind": "account",
                            "path": "tokenMetadataProgram"
                        }
                    }
                },
                {
                    "name": "masterEdition",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    109,
                                    101,
                                    116,
                                    97,
                                    100,
                                    97,
                                    116,
                                    97
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "tokenMetadataProgram"
                            },
                            {
                                "kind": "account",
                                "path": "ticketMint"
                            },
                            {
                                "kind": "const",
                                "value": [
                                    101,
                                    100,
                                    105,
                                    116,
                                    105,
                                    111,
                                    110
                                ]
                            }
                        ],
                        "program": {
                            "kind": "account",
                            "path": "tokenMetadataProgram"
                        }
                    }
                },
                {
                    "name": "associatedTokenProgram",
                    "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
                },
                {
                    "name": "tokenProgram"
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                },
                {
                    "name": "rent",
                    "address": "SysvarRent111111111111111111111111111111111"
                }
            ],
            "args": []
        },
        {
            "name": "callbackChooseWinner",
            "discriminator": [
                204,
                21,
                207,
                229,
                118,
                187,
                143,
                149
            ],
            "accounts": [
                {
                    "name": "vrfProgramIdentity",
                    "docs": [
                        "This check ensure that the vrf_program_identity (which is a PDA) is a singer",
                        "enforcing the callback is executed by the VRF program trough CPI"
                    ],
                    "signer": true,
                    "address": "9irBy75QS2BN81FUgXuHcjqceJJRuc9oDkAe8TKVvvAw"
                },
                {
                    "name": "tokenLottery",
                    "writable": true
                }
            ],
            "args": [
                {
                    "name": "randomness",
                    "type": {
                        "array": [
                            "u8",
                            32
                        ]
                    }
                }
            ]
        },
        {
            "name": "claimWinnings",
            "discriminator": [
                161,
                215,
                24,
                59,
                14,
                236,
                242,
                221
            ],
            "accounts": [
                {
                    "name": "payer",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "tokenLottery",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    108,
                                    111,
                                    116,
                                    116,
                                    101,
                                    114,
                                    121
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "rewardMint"
                },
                {
                    "name": "rewardVault",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "tokenLottery"
                            },
                            {
                                "kind": "account",
                                "path": "tokenProgram"
                            },
                            {
                                "kind": "account",
                                "path": "rewardMint"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "winnerTokenAccount",
                    "writable": true
                },
                {
                    "name": "collectionMint",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    99,
                                    111,
                                    108,
                                    108,
                                    101,
                                    99,
                                    116,
                                    105,
                                    111,
                                    110,
                                    95,
                                    109,
                                    105,
                                    110,
                                    116
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "ticketMint",
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "token_lottery.winner",
                                "account": "tokenLottery"
                            }
                        ]
                    }
                },
                {
                    "name": "metadata",
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    109,
                                    101,
                                    116,
                                    97,
                                    100,
                                    97,
                                    116,
                                    97
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "tokenMetadataProgram"
                            },
                            {
                                "kind": "account",
                                "path": "ticketMint"
                            }
                        ],
                        "program": {
                            "kind": "account",
                            "path": "tokenMetadataProgram"
                        }
                    }
                },
                {
                    "name": "destination",
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "payer"
                            },
                            {
                                "kind": "account",
                                "path": "tokenProgram"
                            },
                            {
                                "kind": "account",
                                "path": "ticketMint"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "collectionMetadata",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    109,
                                    101,
                                    116,
                                    97,
                                    100,
                                    97,
                                    116,
                                    97
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "tokenMetadataProgram"
                            },
                            {
                                "kind": "account",
                                "path": "collectionMint"
                            }
                        ],
                        "program": {
                            "kind": "account",
                            "path": "tokenMetadataProgram"
                        }
                    }
                },
                {
                    "name": "tokenProgram"
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                },
                {
                    "name": "tokenMetadataProgram",
                    "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
                }
            ],
            "args": []
        },
        {
            "name": "commitWinner",
            "discriminator": [
                66,
                108,
                203,
                58,
                168,
                20,
                82,
                15
            ],
            "accounts": [
                {
                    "name": "payer",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "tokenLottery",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    108,
                                    111,
                                    116,
                                    116,
                                    101,
                                    114,
                                    121
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "oracleQueue",
                    "writable": true,
                    "address": "Cuj97ggrhhidhbu39TijNVqE74xvKJ69gDervRUXAxGh"
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                },
                {
                    "name": "programIdentity",
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    105,
                                    100,
                                    101,
                                    110,
                                    116,
                                    105,
                                    116,
                                    121
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "vrfProgram",
                    "address": "Vrf1RNUjXmQGjmQrQLvJHs9SNkvDJEsRVFPkfSQUwGz"
                },
                {
                    "name": "slotHashes",
                    "address": "SysvarS1otHashes111111111111111111111111111"
                }
            ],
            "args": [
                {
                    "name": "clientSeed",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "initializeConfig",
            "discriminator": [
                208,
                127,
                21,
                1,
                194,
                190,
                196,
                70
            ],
            "accounts": [
                {
                    "name": "signer",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "tokenLottery",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    108,
                                    111,
                                    116,
                                    116,
                                    101,
                                    114,
                                    121
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                }
            ],
            "args": [
                {
                    "name": "startTime",
                    "type": "i64"
                },
                {
                    "name": "endTime",
                    "type": "i64"
                },
                {
                    "name": "price",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "initializeLottery",
            "discriminator": [
                113,
                199,
                243,
                247,
                73,
                217,
                33,
                11
            ],
            "accounts": [
                {
                    "name": "payer",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "collectionMint",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    99,
                                    111,
                                    108,
                                    108,
                                    101,
                                    99,
                                    116,
                                    105,
                                    111,
                                    110,
                                    95,
                                    109,
                                    105,
                                    110,
                                    116
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "collectionTokenAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    99,
                                    111,
                                    108,
                                    108,
                                    101,
                                    99,
                                    116,
                                    105,
                                    111,
                                    110,
                                    95,
                                    97,
                                    115,
                                    115,
                                    111,
                                    99,
                                    105,
                                    97,
                                    116,
                                    101,
                                    100,
                                    95,
                                    116,
                                    111,
                                    107,
                                    101,
                                    110
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "metadata",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    109,
                                    101,
                                    116,
                                    97,
                                    100,
                                    97,
                                    116,
                                    97
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "tokenMetadataProgram"
                            },
                            {
                                "kind": "account",
                                "path": "collectionMint"
                            }
                        ],
                        "program": {
                            "kind": "account",
                            "path": "tokenMetadataProgram"
                        }
                    }
                },
                {
                    "name": "masterEdition",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    109,
                                    101,
                                    116,
                                    97,
                                    100,
                                    97,
                                    116,
                                    97
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "tokenMetadataProgram"
                            },
                            {
                                "kind": "account",
                                "path": "collectionMint"
                            },
                            {
                                "kind": "const",
                                "value": [
                                    101,
                                    100,
                                    105,
                                    116,
                                    105,
                                    111,
                                    110
                                ]
                            }
                        ],
                        "program": {
                            "kind": "account",
                            "path": "tokenMetadataProgram"
                        }
                    }
                },
                {
                    "name": "tokenMetadataProgram",
                    "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
                },
                {
                    "name": "associatedTokenAccount",
                    "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
                },
                {
                    "name": "tokenProgram"
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                },
                {
                    "name": "rent",
                    "address": "SysvarRent111111111111111111111111111111111"
                }
            ],
            "args": []
        },
        {
            "name": "restartLottery",
            "discriminator": [
                108,
                227,
                99,
                131,
                243,
                47,
                187,
                86
            ],
            "accounts": [
                {
                    "name": "tokenLottery",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    108,
                                    111,
                                    116,
                                    116,
                                    101,
                                    114,
                                    121
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "authority",
                    "signer": true
                }
            ],
            "args": [
                {
                    "name": "newStartTime",
                    "type": "i64"
                },
                {
                    "name": "newEndTime",
                    "type": "i64"
                },
                {
                    "name": "newTicketPrice",
                    "type": "u64"
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "tokenLottery",
            "discriminator": [
                219,
                174,
                104,
                58,
                76,
                30,
                61,
                218
            ]
        }
    ],
    "events": [
        {
            "name": "boughtTicket",
            "discriminator": [
                101,
                104,
                196,
                151,
                92,
                225,
                230,
                158
            ]
        },
        {
            "name": "initializedConfig",
            "discriminator": [
                164,
                105,
                22,
                100,
                12,
                70,
                246,
                93
            ]
        },
        {
            "name": "initializedLottery",
            "discriminator": [
                255,
                31,
                194,
                72,
                173,
                230,
                164,
                114
            ]
        },
        {
            "name": "selectWinner",
            "discriminator": [
                206,
                182,
                105,
                137,
                223,
                198,
                29,
                129
            ]
        },
        {
            "name": "winnerCommited",
            "discriminator": [
                140,
                75,
                139,
                176,
                235,
                114,
                130,
                191
            ]
        },
        {
            "name": "winningsClaimed",
            "discriminator": [
                187,
                184,
                29,
                196,
                54,
                117,
                70,
                150
            ]
        }
    ],
    "errors": [
        {
            "code": 6000,
            "name": "lotteryNotOpen",
            "msg": "Lottery is not open yet."
        },
        {
            "code": 6001,
            "name": "notAuthorized",
            "msg": "You're Not Authorized!."
        },
        {
            "code": 6002,
            "name": "randomnessAlreadyRevealed",
            "msg": "Randomnes Already Revealed"
        },
        {
            "code": 6003,
            "name": "lotteryNotCompleted",
            "msg": "Lottery Not Completed"
        },
        {
            "code": 6004,
            "name": "incorrectRandomnessAccount",
            "msg": "Incorrect Randomness Account"
        },
        {
            "code": 6005,
            "name": "randomnessNotResolved",
            "msg": "Randomness Not Resolved"
        },
        {
            "code": 6006,
            "name": "winnerChosen",
            "msg": "Winner Already Chosen"
        },
        {
            "code": 6007,
            "name": "incorrectTicket",
            "msg": "Ticket Is Incorrect"
        },
        {
            "code": 6008,
            "name": "winnerNotChosen",
            "msg": "Winner Not Chosen"
        },
        {
            "code": 6009,
            "name": "notVerifiedTicket",
            "msg": "Ticket Not Verified"
        }
    ],
    "types": [
        {
            "name": "boughtTicket",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "price",
                        "type": "u64"
                    },
                    {
                        "name": "currentTotalTickets",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "initializedConfig",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "startTime",
                        "type": "i64"
                    },
                    {
                        "name": "endTime",
                        "type": "i64"
                    },
                    {
                        "name": "price",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "initializedLottery",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "collectionMint",
                        "type": "pubkey"
                    }
                ]
            }
        },
        {
            "name": "selectWinner",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "winner",
                        "type": "u64"
                    },
                    {
                        "name": "winnerChosen",
                        "type": "bool"
                    }
                ]
            }
        },
        {
            "name": "tokenLottery",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "winner",
                        "type": "u64"
                    },
                    {
                        "name": "winnerChosen",
                        "type": "bool"
                    },
                    {
                        "name": "startTime",
                        "type": "i64"
                    },
                    {
                        "name": "endTime",
                        "type": "i64"
                    },
                    {
                        "name": "potAmount",
                        "type": "u64"
                    },
                    {
                        "name": "totalTickets",
                        "type": "u64"
                    },
                    {
                        "name": "ticketPrice",
                        "type": "u64"
                    },
                    {
                        "name": "authority",
                        "type": "pubkey"
                    },
                    {
                        "name": "bump",
                        "type": "u8"
                    }
                ]
            }
        },
        {
            "name": "winnerCommited",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "oracleQueue",
                        "type": "pubkey"
                    }
                ]
            }
        },
        {
            "name": "winningsClaimed",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "ticketName",
                        "type": "string"
                    },
                    {
                        "name": "destinationAccount",
                        "type": "pubkey"
                    }
                ]
            }
        }
    ],
    "constants": [
        {
            "name": "name",
            "type": "string",
            "value": "\"Token Lottery Ticket #\""
        },
        {
            "name": "seed",
            "type": "string",
            "value": "\"anchor\""
        },
        {
            "name": "symbol",
            "type": "string",
            "value": "\"TLT\""
        },
        {
            "name": "url",
            "type": "string",
            "value": "\"https://raw.githubusercontent.com/Emman442/Quiz-application-with-leaderboard-feature/main/mpl.json\\n\""
        }
    ]
};
