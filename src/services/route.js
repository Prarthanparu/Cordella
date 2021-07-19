import { client } from "./index";

export const getRoutes = (params) => client.get("api/routes", params);

