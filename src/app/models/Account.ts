export interface Account {
  id: number;
  userId: number;
  networkId?: number | null;
  amount: number;
  transferType: 'DEBIT' | 'CREDIT';
  balance: number;
  accountStatus: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  createdAt: Date;
  updatedAt: Date;
}
