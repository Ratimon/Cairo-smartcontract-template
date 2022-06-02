#!/bin/bash
output=$(yarn hardhat starknet-verify --starknet-network alpha --path ./contracts/contract.cairo ./contracts/util.cairo --address 0x06325c2411e27cdc891a42ecad89ad4c16a2dbcd7a462159dcfe19621ea506f0)

echo $output