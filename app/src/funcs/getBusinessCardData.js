import axios from "axios";

export const getAllBusinessCards = async () => {
	return await axios.get("business/all");
};
