export class User {
  id?: number | null;
  referenceId?: string | null;
  sponsorId?: string | null;
  firstname: string | undefined;
  lastname?: string | null;
  aadhar: string | undefined;
  pan?: string | null;
  phone: string | undefined;
  email: string | undefined;
  password: string | undefined;
  address?: string | null;
  userUPI: string | undefined;
  productId: number | undefined;
  paymentScreenshot!: File;
  paymentTransactionId!: string;
  shipmentType!: 'TAKEAWAY' | 'COURIERDELIVERY';
  totalBalance?: number;
  firstLevelCount?: number | null;
  secondLevelCount?: number | null;
  thirdLevelCount?: number | null;
  status?: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  emailVerified?: boolean | null;
  createdAt?: Date;
  updatedAt?: Date;
}
