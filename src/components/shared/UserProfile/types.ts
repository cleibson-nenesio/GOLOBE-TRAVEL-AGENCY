import { StaticImageData } from "next/image";

export interface IUserProfile {
  user: IUser;
  isDarkTheme?: boolean;
}

interface IUser {
  name: string;
  photo: string | StaticImageData;
  id: string | number;
  online: boolean;
}
