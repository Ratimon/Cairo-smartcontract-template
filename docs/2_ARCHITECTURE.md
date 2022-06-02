# 🏄‍♂️ Quick Start & Architecture

This project is a monorepo created with [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/).

> 🔏 See smart contracts `**.cairo` in [`./contracts`](../contracts/).

> 🔏 Manage dependencies in [`hardhat.config.ts`](../hardhat.config.ts).

- it includes required config information, such as **rpc** config and **plugin dependencies**.
- It also contains **Account Config Addresses** which are stored in `namedAccounts` key. This is very useful additional hardhat plugin.

> 🔏 Import built artifacts`**.json` in [`/starknet-artifacts`](../starknet-artifacts/)

- it contains **ABI files**.
- > The ABI, **Application Binary Interface**, is basically how you call functions in a contract and get data back.

> 🔏 See deployment scripts `**.ts` or `**.sh` in [`./deploy`](../scripts/).

> 🔏 See customed tasks `**.ts` in [`./tasks`](../tasks/).

- They are core components used for automation
- Note that all tasks including built-in ones can be shown by runing:
  >

```bash
yarn hardhat help
```

> 🔏 See test suites `**.test.ts` in [`./test`](../test/).
