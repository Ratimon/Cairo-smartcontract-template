# 4. 🛠 Running Manual Tasks

## Customed Tasks

All customed tasks `**.ts` are in [`./tasks`](../tasks/).

1. **Accounts** - list all of accounts
   currently using in the runtime environment

Run using:

```
yarn hardhat --network bsctestnet accounts
```

2. **balance** - specify balance in the given account

**Param: account** : Address from **Accounts** task

Run using:

```
yarn hardhat --network bsctestnet  balance --account <EOA address>
```

3. **block-number** - specify the current block number

Run using:

```
yarn hardhat --network bsctestnet block-number
```
