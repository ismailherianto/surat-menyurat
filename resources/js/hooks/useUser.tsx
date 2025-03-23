import { usePage } from "@inertiajs/react";
import { User } from "../models/User";

interface UserProps extends Record<string, any> {
  auth?: {
    user?: User;
  };
}

const useUser = (): User | null => {
  const { auth } = usePage<UserProps>().props;
  return auth?.user ?? null;
};


export default useUser;