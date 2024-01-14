library;

pub struct Booking {
    id: u64,
}

impl Booking {
    pub fn new(id: u64) -> Self {
        Self { id }
    }
}
