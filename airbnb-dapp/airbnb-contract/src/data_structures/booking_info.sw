library;

use ::data_structures::booking_state::BookingState;

pub struct BookingInfo {
    bookedBy: Identity,
    bookingFrom: u64,
    bookingTo: u64,
    status: BookingState,
    property_id: u64,
}

impl BookingInfo {

    pub fn new(
        bookedBy: Identity,
        bookingFrom: u64,
        bookingTo: u64,
        property_id: u64,
    ) -> Self {
        Self {
            bookedBy,
            bookingFrom,
            bookingTo,
            status: BookingState::Booked,
            property_id,
        }
    }
}

