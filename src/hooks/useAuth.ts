import { useAppSelector } from "./useRedux";

export const useAuth = () => {
  const { id, email, token } = useAppSelector((state) => state.user);

  return { isAuth: !!email, id, email, token };
};
