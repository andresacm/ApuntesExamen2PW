import axios from "axios";

const get = async (id) =>{
    return axios.get(`https://6476aec29233e82dd53a4209.mockapi.io/api/v1/claseapi/${id}`);
}

const Course = { get }

export default Course