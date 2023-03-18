import api from "./axios";

import { JUMPS } from "../App";

//return all business cards
export const getBusinessCards = async (skip = 0, limit = JUMPS) => {
	return await api.get(`business?skip=${skip}&limit=${limit}`);
};
