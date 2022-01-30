// import { config as dotenvConfig } from "dotenv";
import 'dotenv/config';
import {HardhatUserConfig} from 'hardhat/types';
// import { NetworkUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-web3";
import 'hardhat-deploy-ethers';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import "hardhat-contract-sizer";
import 'hardhat-deploy';
import "solidity-coverage"
import 'hardhat-tracer';
import "hardhat-log-remover";
import "hardhat-storage-layout";
import "@tenderly/hardhat-tenderly";
import "@shardlabs/starknet-hardhat-plugin";


import {node_url, accounts, addForkConfiguration} from './utils/network';

import tasks from './tasks'
for (const tsk of tasks) { tsk() }


// const PRIVATE_KEY = process.env.PKEY;
// const MNEMONIC = process.env.MNEMONIC;
const ETHERSCAN_KEY = process.env.ETHERSCANKEY;

const config: HardhatUserConfig = {


  solidity: {

    compilers: [
      {
        version: "0.5.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          },
          outputSelection: {
            "*": {
                "*": ["storageLayout"],
            },
          },
        }
      },

      
    ],


  },
  namedAccounts: {
    deployer: 0,
    dev: 1,
    buyer: 2,
    user: 3,


    zero: "0x0000000000000000000000000000000000000000",
     ///-------------------/deploy---tokens-------------------///




  },


  networks: addForkConfiguration({
    hardhat: {
      initialBaseFeePerGas: 0, // to fix : https://github.com/sc-forks/solidity-coverage/issues/652, see https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136
      tags: ['test']
    },
    localhost: {
      url: node_url('localhost'),
      accounts: accounts(),
    },
    staging: {
      url: node_url('rinkeby'),
      accounts: accounts('rinkeby'),
    },
    production: {
      url: node_url('mainnet'),
      accounts: accounts('mainnet'),
    },
    mainnet: {
      url: node_url('mainnet'),
      accounts: accounts('mainnet'),
    },
    rinkeby: {
      url: node_url('rinkeby'),
      accounts: accounts('rinkeby'),
    },
    kovan: {
      url: node_url('kovan'),
      accounts: accounts('kovan'),
    },
    goerli: {
      url: node_url('goerli'),
      accounts: accounts('goerli'),
    },

    bscmainnet: {
      // url: "https://bsc-dataseed.binance.org/",
      url: node_url('bscmainnet'),
      accounts: accounts('bscmainnet'),
      chainId: 56,
      gasPrice: 5000000000,

      throwOnTransactionFailures: false,
      // if true,  throw stack traces on transaction failures.
      // If false, return  failing transaction hash.
      throwOnCallFailures: true,
      // If is true, will throw  stack traces when a call fails.
      // If false, will return the call's return data, which can contain a revert reason
      tags: ['production'],
    },

    bscmainnetfork: {
      url: node_url('bscmainnetfork'),
      accounts: accounts('bscmainnetfork'),
      tags: ['fork']
    },

    bsctestnet: {
      url: node_url('bsctestnet'),
      accounts: accounts('bsctestnet'),
      chainId: 97,
      gasPrice: 10000000000,

      tags: ["staging"]

    },

    starknetdevelop: {
      url: "http://127.0.0.1:5000"
    }


  }),

  cairo: {
    // Version of the plugin which is execute on the docker
    version: "0.7.0"
  },


  external: process.env.HARDHAT_FORK
  ? {
      deployments: {
        // process.env.HARDHAT_FORK will specify the network that the fork is made from.
        // these lines allow it to fetch the deployments from the network being forked from both for node and deploy task
        hardhat: ['deployments/' + process.env.HARDHAT_FORK],
        localhost: ['deployments/' + process.env.HARDHAT_FORK],
      },
    }
  : undefined,

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_KEY 
  },


  paths: {
    sources: './contracts',
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
    deploy: './deploy',
    deployments: './deployments',
    imports: './imports',
    // Where are our contracts: ./contracts
    starknetSources: __dirname + "/contracts",
    // Where are our artifacts (build contract): ./stark-artifacts, not use repository "artifacts" which is reserved by hardhat to solidity
    starknetArtifacts: __dirname + "/stark-artifacts",
  },

  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },

  mocha: {
    timeout: 300000,
    starknetNetwork: "starknetdevelop"
  },
  
  
  
};

export default config;