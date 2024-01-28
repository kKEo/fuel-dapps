bootstrap-app:
	npm create next-app painter_web
	cd painter_web && npm add fuels @fuel-wallet/sdk


generate-abi-json:
	npx fuels typegen -i ../painter_contract/out/debug/painter_contract-abi.json -o ./src/contracts
