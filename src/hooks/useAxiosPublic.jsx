import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://b8a10-brandshop-server-side-khairul-01.vercel.app",
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;