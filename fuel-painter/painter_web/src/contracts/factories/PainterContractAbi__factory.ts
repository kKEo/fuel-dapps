/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.71.1
  Forc version: 0.48.1
  Fuel-Core version: 0.22.0
*/

import { Interface, Contract, ContractFactory } from "fuels";
import type { Provider, Account, AbstractAddress, BytesLike, DeployContractOptions, StorageSlot } from "fuels";
import type { PainterContractAbi, PainterContractAbiInterface } from "../PainterContractAbi";

const _abi = {
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "[_; 8]",
      "components": [
        {
          "name": "__array_element",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "[_; 8]",
      "components": [
        {
          "name": "__array_element",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "bool",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "struct Color",
      "components": [
        {
          "name": "red",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "green",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "blue",
          "type": 6,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "u64",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "u8",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [],
      "name": "get_pixels",
      "output": {
        "name": "",
        "type": 2,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "initialize_pixels",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "is_initialiazed",
      "output": {
        "name": "",
        "type": 3,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "row",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "col",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "color",
          "type": 4,
          "typeArguments": null
        }
      ],
      "name": "paint_pixel",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [],
  "messagesTypes": [],
  "configurables": []
};

const _storageSlots: StorageSlot[] = [
  {
    "key": "de9090cb50e71c2588c773487d1da7066d0c719849a7e58dc8b6397a25c567c0",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export class PainterContractAbi__factory {
  static readonly abi = _abi;

  static readonly storageSlots = _storageSlots;

  static createInterface(): PainterContractAbiInterface {
    return new Interface(_abi) as unknown as PainterContractAbiInterface
  }

  static connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): PainterContractAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as PainterContractAbi
  }

  static async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<PainterContractAbi> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    const { storageSlots } = PainterContractAbi__factory;

    const contract = await factory.deployContract({
      storageSlots,
      ...options,
    });

    return contract as unknown as PainterContractAbi;
  }
}
