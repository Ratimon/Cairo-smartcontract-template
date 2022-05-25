#!/bin/bash
output=$(yarn hardhat starknet-deploy-account --starknet-network alpha --wallet OpenZeppelin)

echo $output
deploy_tx_id=$(echo $output | sed -r "s/.*Transaction ID: (\w*).*/\1/")
address=$(echo $output | sed -r "s/.*Contract address: (\w*).*/\1/")
echo "Address: $address"
echo "tx_id: $deploy_tx_id"