import { UserPrincipalModel } from "../../../user/models/user-principal.model";

export interface ItemModel {
  id: number;
  name: string;
  description: string;
  category: string;
  created: string;
  modified: string;
  isActive: boolean;
  user: UserPrincipalModel;
}
