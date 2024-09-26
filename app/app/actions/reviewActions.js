import { axiosReview } from "@/api/axios.js";

/**
 * 
 * @param {number} tourId 
 * @param {number} rating 
 * @param {string} comment 
 * @return {object}
 */
export async function createReview(tourId, rating, comment) {
    try {
        const response = await axiosReview.post(`create-review/${tourId}`, {rating, comment});
        return response.data.result;
    } catch (error) {
        if (error.response.data) {
            throw error.response.data;
        } else {
            throw error.response;
        }
    }
}