export interface AuctionData {
    title: String;
    description: String;
    start_price: Number;
    sold: Boolean;
    current_bid: Number;
    location: String;
    date: String;
    closing: Boolean;
    reserve: boolean | null;
    onedollar: Boolean;
    favourite: Boolean;
    price_detail: String;
    image: string;
}
