export interface Network {
  id: number;
  fromReferenceId: string;
  toReferenceId: string;
  level: number;
  networkStatus: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  createdAt: Date;
  updatedAt: Date;
}
