library;

use ::data_structures::auction::Auction;

/// Event for when an auction is cancelled.
pub struct CancelAuctionEvent {
    /// The auction id of the auction that was cancelled.
    auction_id: u64,
}

pub struct CreateAuctionEvent {
    auction_id: u64,
    bid_asset: AssetId,
    sell_asset: AssetId,
    sell_asset_amount: u64,
}

pub struct BidEvent {
    amount: u64,
    auction_id: u64,
    user: Identity,
}

pub struct WithdrawEvent {
    asset: AssetId,
    asset_amount: u64,
    auction_id: u64,
    user: Identity,
}
