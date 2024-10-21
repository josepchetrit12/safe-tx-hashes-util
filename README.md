# Safe Multisig Transaction Hashes

This Bash [script](./safe_hashes.sh) calculates the Safe transaction hashes by retrieving transaction details from the [Safe transaction service API](https://docs.safe.global/core-api/transaction-service-overview) and computing both the domain and message hashes using the [EIP-712](https://eips.ethereum.org/EIPS/eip-712) standard.

## Supported Networks

- Arbitrum (identifier: `arbitrum`, chain ID: `42161`)
- Aurora (identifier: `aurora`, chain ID: `1313161554`)
- Avalanche (identifier: `avalanche`, chain ID: `43114`)
- Base (identifier: `base`, chain ID: `8453`)
- Base Sepolia (identifier: `base-sepolia`, chain ID: `84532`)
- Blast (identifier: `blast`, chain ID: `81457`)
- BSC (Binance Smart Chain) (identifier: `bsc`, chain ID: `56`)
- Celo (identifier: `celo`, chain ID: `42220`)
- Ethereum (identifier: `ethereum`, chain ID: `1`)
- Gnosis (identifier: `gnosis`, chain ID: `100`)
- Gnosis Chiado (identifier: `gnosis-chiado`, chain ID: `10200`)
- Linea (identifier: `linea`, chain ID: `59144`)
- Mantle (identifier: `mantle`, chain ID: `5000`)
- Optimism (identifier: `optimism`, chain ID: `10`)
- Polygon (identifier: `polygon`, chain ID: `137`)
- Polygon zkEVM (identifier: `polygon-zkevm`, chain ID: `1101`)
- Scroll (identifier: `scroll`, chain ID: `534352`)
- Sepolia (identifier: `sepolia`, chain ID: `11155111`)
- World Chain (identifier: `worldchain`, chain ID: `480`)
- X Layer (identifier: `xlayer`, chain ID: `195`)
- ZKsync Era (identifier: `zksync`, chain ID: `324`)

## Usage

> [!NOTE]
> Ensure that [`cast`](https://github.com/foundry-rs/foundry/tree/master/crates/cast) and [`chisel`](https://github.com/foundry-rs/foundry/tree/master/crates/chisel) are installed locally. For installation instructions, refer to this [guide](https://book.getfoundry.sh/getting-started/installation).

```console
./safe_hashes.sh [--help] [--list-networks] --network <network> --address <address> --nonce <nonce>
```

**Options:**

- `--help`: Display this help message.
- `--list-networks`: List all supported networks and their chain IDs.
- `--network <network>`: Specify the network (e.g., `ethereum`, `polygon`).
- `--address <address>`: Specify the Safe multisig address.
- `--nonce <nonce>`: Specify the transaction nonce.

Before you invoke the script, make it executable:

```console
chmod +x safe_hashes.sh
```

## Example

```console
./safe_hashes.sh --network arbitrum --address 0x111CEEee040739fD91D29C34C33E6B3E112F2177 --nonce 234
```

The script will output the domain, message, and Safe transaction hashes, allowing you to easily verify them against the values displayed on your Ledger hardware wallet screen:

```console
===================================
= Selected Network Configurations =
===================================
Network: arbitrum
Chain ID: 42161

===================
= Computed Hashes =
===================
Domain hash: 0x1CF7F9B1EFE3BC47FE02FD27C649FEA19E79D66040683A1C86C7490C80BF7291
Message hash: 0xD9109EA63C50ECD3B80B6B27ED5C5A9FD3D546C2169DFB69BFA7BA24CD14C7A5
Safe transaction hash: 0x0cb7250b8becd7069223c54e2839feaed4cee156363fbfe5dd0a48e75c4e25b3
```

To list all supported networks:

```console
./safe_hashes.sh --list-networks
```

## Trust Assumptions

1. You trust my [script](./safe_hashes.sh) 😃.
2. You trust Linux.
3. You trust [Foundry](https://github.com/foundry-rs/foundry).
4. You trust the [Safe transaction service API](https://docs.safe.global/core-api/transaction-service-overview).
5. You trust [Ledger's secure screen](https://www.ledger.com/academy/topics/ledgersolutions/ledger-wallets-secure-screen-security-model).