mod success {


    use crate::utils::{
     interface::{
       core::auction::{bid, create},
       info::auction_info,
     },
     setup::{create_auction_copy, defaults, setup, State},
    };

   use fuels::types::Identity;

   #[tokio::test]
   async fn returns_auction_info() {
     let (deployer, seller, buyer1, buyer2, _, sell_asset, buy_asset) = setup().await;

     let (sell_amount, initial_price, reserve_price, duration, _initial_wallet_amount) = defaults().await;


let seller_identity = Identity::Address(seller.wallet.address().into());
        let buyer1_identity = Identity::Address(buyer1.wallet.address().into());
        let provider = deployer.wallet.provider().unwrap();

        let auction = auction_info(0, &seller.auction).await;
        assert!(auction.is_none());


      let auction_id = create(
            buy_asset,
            &seller.auction,
            duration,
            initial_price,
            Some(reserve_price),
            seller_identity.clone(),
            sell_asset,
            sell_amount,
        )
        .await;

     let total_duration = provider.latest_block_height().await.unwrap() + duration;
        let auction = auction_info(auction_id, &seller.auction).await;
        assert!(auction.is_some());

        let auction_copy = create_auction_copy(
            buy_asset,
            0,
            None,
            total_duration,
            initial_price,
            Some(reserve_price),
            sell_asset,
            sell_amount,
            seller_identity,
            State::Open,
        )
        .await;

        assert_eq!(auction.unwrap(), auction_copy);

        bid(auction_id, buy_asset, initial_price, &buyer1.auction).await;

        let auction = auction_info(auction_id, &seller.auction).await.unwrap();

        assert_eq!(auction.highest_bidder.unwrap(), buyer1_identity);
        assert_eq!(auction.bid_asset, buy_asset);
        assert_eq!(auction.highest_bid, initial_price);



   }



}
