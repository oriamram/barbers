import axios from "axios";

export const getAllBusinessCards = async () => {
	return await axios.get("https://jimny-server.onrender.com/business/all");
};
