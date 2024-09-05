import { Roles } from "./role";

export interface UserInfo {
  id: number;
  name: string;
  email: string;
  role: Roles
}