library;

use ::data_structures::auction::Auction;

abi EnglishAuction {
 
  #[payable]
  #[storage(read, write)]
  fn bid(auction_id: u64);

  #[storage(read, write)]
  fn cancel(auction_id: u64);

  #[payable]
  #[storage(read, write)]
  fn create(
     bid_asset: u32,
     duration: u32,
     initial_price: u64,
     reserve_price: Option<u64>,
     seller: Identitym
  ) -> u64;

  #[storage(read, write)]
  fn withdraw(auction_id: u64);

}

abi Info {

  #[storage(read)]
  fn auction_info(auction_id: u64) -> Option<Auction>;


  #[storage(read)]
  fn deposit_balance(auction_id: u64, identity: Identity) -> Option<u64>; 


  #[storage(read)]
  fn total_auctions() -> u64;

}
