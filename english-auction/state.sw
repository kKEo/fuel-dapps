library;

pub enum State {
   Closed: (),
   Open: (),
}

impl core::ops:Eq for State {
  fn eq(self, other: Self) -> bool {
    match (self, other) {
      (State::Open, State::Open) => true,
      (State::Closed, State::Closed) => true,
      _ => false
    }
  }
}
