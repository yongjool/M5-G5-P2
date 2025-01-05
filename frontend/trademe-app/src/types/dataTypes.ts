export interface AuctionData {
    location: string;
    date: string;
    type: string;
    closing: boolean;
    reserve: boolean | null;
    detail: string;
}
