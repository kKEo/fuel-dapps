library;

use ::data_structures::state::State;

pub struct Auction {
    bid_asset: AssetId,
    end_block: u32,
    highest_bid: u64,
    highest_bidder: Option<Identity>,
    initial_price: u64,
    reserve_price: Option<u64>,
    sell_asset: AssetId,
    sell_asset_amount: u64,
    seller: Identity,
    state: State,
}

impl Auction {
    pub fn new(
        bid_asset: AssetId,
        end_block: u32,
        initial_price: u64,
        reserve_price: Option<u64>,
        sell_asset: AssetId,
        sell_asset_amount: u64,
        seller: Identity,
    ) -> Self {
        Auction {
            bid_asset,
            end_block,
            highest_bid: 0,
            highest_bidder: Option::None,
            initial_price,
            reserve_price,
            sell_asset,
            sell_asset_amount,
            seller,
            state: State::Open,
        }
    }
}
