install:
	npm install
	npm install fuels@0.60.0 @fuel-wallet/sdk@0.13.0 --save


typegen:
	npx fuels typegen -i ../airbnb-contract/out/debug/*-abi.json -o ./src/contracts


run:
	[ ! -z "${REACT_APP_CONTRACT_ID}" ] || (echo "No REACT_APP_CONTRACT_ID" && exit 1)
	[ ! -z "${REACT_APP_PINATA_API_KEY}" ] || (echo "No REACT_APP_PINATA_API_KEY" && exit 1)
	[ ! -z "${REACT_APP_PINATA_SECRET_API_KEY}" ] || (echo "No REACT_APP_PINATA_SECRET_API_KEY" && exit 1)
	npm start


install-node:
	snap refresh node --channel=20
