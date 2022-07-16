import { UserModel } from "./user.model";

export interface ItemModel {
  id: number;
  name: string;
  description: string
  category: string;
  created: string;
  modified: string;
  isActive: boolean;
  user: UserModel
}
