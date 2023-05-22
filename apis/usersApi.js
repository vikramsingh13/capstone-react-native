import { API } from 'aws-amplify';

const API_NAME = "usersApi";
const API_PATH = "/users/";

const getUserSettings = async (userId) => {
    try {
        const response = await API.get(API_NAME, `${API_PATH}${userId}`);
        return { status: "success", data: response.userSettings };
    } catch (error) {
        console.error("Error retrieving user settings:", error);
        return { status: "error", error };
    }
};

export { getUserSettings };
