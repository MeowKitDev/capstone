export interface WalletDTO {
    transactionId: string;
    type:          string;
    status:        string;
    amount:        number;
    fromOwner:     string;
    toOwner:       string;
    createdDate:   Date;
    description:   string;
    current:       number;
    before:        number;
}