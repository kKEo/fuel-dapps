/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.71.1
  Forc version: 0.48.1
  Fuel-Core version: 0.22.0
*/

import type {
  BigNumberish,
  BN,
  BytesLike,
  Contract,
  DecodedValue,
  FunctionFragment,
  Interface,
  InvokeFunction,
} from 'fuels';

export type ColorInput = { red: BigNumberish, green: BigNumberish, blue: BigNumberish };
export type ColorOutput = { red: number, green: number, blue: number };

interface PainterContractAbiInterface extends Interface {
  functions: {
    get_pixels: FunctionFragment;
    initialize_pixels: FunctionFragment;
    is_initialiazed: FunctionFragment;
    paint_pixel: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'get_pixels', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'initialize_pixels', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'is_initialiazed', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'paint_pixel', values: [BigNumberish, BigNumberish, ColorInput]): Uint8Array;

  decodeFunctionData(functionFragment: 'get_pixels', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'initialize_pixels', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'is_initialiazed', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'paint_pixel', data: BytesLike): DecodedValue;
}

export class PainterContractAbi extends Contract {
  interface: PainterContractAbiInterface;
  functions: {
    get_pixels: InvokeFunction<[], [[ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput], [ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput], [ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput], [ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput], [ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput], [ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput], [ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput], [ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput, ColorOutput]]>;
    initialize_pixels: InvokeFunction<[], void>;
    is_initialiazed: InvokeFunction<[], boolean>;
    paint_pixel: InvokeFunction<[row: BigNumberish, col: BigNumberish, color: ColorInput], void>;
  };
}
