export interface ProfileDto {
  id: number;
  name: string | null;
  surname: string | null;
  email: string;
  avatarUrl: string | null;
  birthDate: Date | null;
  phoneNumber: string | null;
  createdAt: Date;
  updatedAt: Date;
}