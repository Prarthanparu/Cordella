import { client } from "./index";

export const loginUser = (params) => client.post("api/users/authorize", params);

