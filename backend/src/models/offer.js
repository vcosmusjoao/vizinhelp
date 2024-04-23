class Offer {
  constructor(offerData) {
    this.offer_id = offerData.offer_id;
    this.title = offerData.title;
    this.image_url = offerData.image_url;
    this.cep = offerData.cep;
    this.availability = offerData.availability;
    this.requirements = offerData.requirements;
    this.category = offerData.category;
    this.capacity = offerData.capacity;
    this.requirements = offerData.requirements;
    this.description = offerData.description;
    this.created_at = offerData.created_at;
  }
}

exports.Offer = Offer;