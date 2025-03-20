// Only use this hook in components that are rendered by Inertia

import { usePage } from "@inertiajs/react";
import { User } from "../models/User";

const useUser = () => {
  const { user } = usePage().props;
  return user as User;
};

export default useUser;