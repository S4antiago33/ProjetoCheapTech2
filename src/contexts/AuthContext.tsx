import { Notify } from "@/components/Notify";
import { api } from "@/services/api";
import { login } from "@/services/login.service";
import { register } from "@/services/register.service";
import { iAuthContext } from "@/types/contexts";
import { iSignInData, iSignUpData, iUser } from "@/types/userAccess";

import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext<iAuthContext>({} as iAuthContext);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoged, setIsLoged] = useState<boolean>(false);
  const [user, setUser] = useState<iUser | null>({} as iUser);
  const { push } = useRouter()

  useEffect(() => {
    setIsLoged(JSON.parse(localStorage.getItem("isLoged") as string))
  }, [])

  const signIn = async (values: iSignInData) => {
    try {
      const data = await login(values);
      setIsLoged(true);
      localStorage.setItem("isLoged", "true");
      localStorage.setItem("@token", data.acessToken);
      api.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`
      setUser(data.user);
      push("/")
      Notify("success", "Login concluído!");
    } catch (error: any) {
      Notify("error", error.response.data)
    }
  };

  useEffect(() => {
    const hasUser = localStorage.getItem("user");
    if (hasUser) {
      setUser(JSON.parse(hasUser));
    }
  }, []);

  const logOut = () => {
    setUser({} as iUser);
    setIsLoged(false);
    localStorage.setItem("isLoged", "false");
    localStorage.setItem("user", "{}");
  };

  const signUp = (values: iSignUpData) => {
    try {
      const data = register(values);
      console.log(data)
      Notify("success", "Cadastro concluído, faça login para continuar!")
      push("/login");
    } catch (error: any) {
      console.log("error", error.response.data);

    }
  };

  return (
    <AuthContext.Provider value={{ signIn, user, isLoged, logOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
