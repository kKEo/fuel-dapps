contract;

mod errors;
mod data_structures;
mod events;
mod interface;

use ::data_structures::{auction::Auction, state::State};
use ::errors::{AccessError, InitError, InputError, UserError};
use ::events::{BidEvent, CancelAuctionEvent, CreateAuctionEvent, WithdrawEvent};
use ::interface::{EnglishAuction, Info};

use std::{
  asset::transfer,
  block::height,
  call_frames:: {
    contract_id,
    msg_asset_id,
  },
  context::msg_amount,
  hash::Hash
};

storage {
   auctions: StorageMap<u64, Auction> = StorageMap{},
   deposits: StorageMap<(Identity, u64), u64> = StorageMap{},
   total_auctions: u64 = 0,
}

impl EnglishAuction for Contract {

  #[payable]
  #[storage(read, write)]
  fn bid(auction_id: u64) {

  }

  #[storage(read, write)]
  fn cancel(auction_id: u64) {
    
  }

  #[payable]
  #[storage(read, write)]
  fn create(
     bid_asset: u32,
     duration: u32,
     initial_price: u64,
     reserve_price: Option<u64>,
     seller: Identitym
  ) -> u64 {

  }

  #[storage(read, write)]
  fn withdraw(auction_id: u64) {

  }
}

impl Info for Contract {

  #[storage(read)]
  fn auction_info(auction_id: u64) -> Option<Auction> {
    storage.auctions.get(auction_id).try_read()
  }

  #[storage(read)]
  fn deposit_balance(auction_id: u64, identity: Identity) -> Option<u64> {
    storage.deposits.get((itentity, auction_id)).try_read()
  }

  #[storage(read)]
  fn total_auctions() -> u64 {
    storage.total_auctions.read()
  }  

}
