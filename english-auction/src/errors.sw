library;

pub enum AccessError {
    AuctionIsNotClosed: (),
    AuctionIsNotOpen: (),
    SenderIsNotSeller: (),
}

pub enum InitError {
    AuctionDurationNotProvided: (),
    InitialPriceCannotBeZero: (),
    ReserveLessThanInitialPrice: (),
}

pub enum InputError {
    AuctionDoesNotExist: (),
    InitialPriceNotMet: (),
    IncorrectAmountProvided: (),
    IncorrectAssetProvided: (),
}

pub enum UserError {
    BidderIsSeller: (),
    UserHasAlreadyWithdrawn: (),
}
