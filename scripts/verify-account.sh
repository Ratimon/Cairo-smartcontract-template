#!/bin/bash
output=$(yarn hardhat starknet-verify --starknet-network alpha --path ./contracts/openzeppelin/account/Account.cairo --address 0x07e915e79a280603ba9dbea4390bb6d19d6d3b68fb559389189fc812d259fb6b)

echo $output