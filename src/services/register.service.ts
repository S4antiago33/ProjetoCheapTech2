import { iSignUpData } from "@/types/userAccess"
import { api } from "./api"

export const register = async (values: iSignUpData) => {
    const { data } = await api.post("register", values);
    return data;
}