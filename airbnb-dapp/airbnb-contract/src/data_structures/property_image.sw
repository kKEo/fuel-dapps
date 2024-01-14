library;

pub struct PropertyImage {
    /// images of the property.
    image1: b256,
    image2: b256,
}

impl PropertyImage {
    pub fn new(image1: b256, image2: b256) -> Self {
        Self { 
            image1,
            image2,
         }
    }
}

