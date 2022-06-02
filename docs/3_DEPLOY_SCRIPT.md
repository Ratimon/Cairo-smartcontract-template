# 2. 💼 Deploy Scripts

## 🏄‍♂️ Quick Start

All **deployment scripts** are written in `/scripts` folder

We speify **The network** to deploy the smart contract with **--network** as parameter. The config is shown in `hardhat.config.ts`

```bash
--network hardhat
--network alpha
```

<br/><br/>

```bash
sh scripts/deploy-account.sh
```

<br/><br/>

```bash
yarn hardhat run scripts/deploy-contract.ts --network alpha
```

or using the old way:

<br/><br/>

```bash
yarn hardhat starknet-deploy starknet-artifacts/contracts/contract.cairo/ --inputs "0" --starknet-network alpha
```
