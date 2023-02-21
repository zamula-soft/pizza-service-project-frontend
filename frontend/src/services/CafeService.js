import axios from "axios";

const CAFE_API_BASE_URL = "http://localhost:8080/cafe";

class CafeService {


    getCafes(){
        return axios.get(CAFE_API_BASE_URL); 
    }

    createCafe(cafe)
    {
        return axios.post(CAFE_API_BASE_URL+'/add', cafe);
    }

    searchCafe(cafe)
    {
        return axios.get(CAFE_API_BASE_URL+'/search?=' + cafeName);
    }

    getCafeById(cafeId)
    {
        return axios.get(CAFE_API_BASE_URL + '/' + cafeId);
    }

    updateCafe(cafe, cafeId)
    {
        return axios.put(CAFE_API_BASE_URL + '/' + cafeId, cafe);
    }

    deleteCafe(cafeId){
        return axios.delete(CAFE_API_BASE_URL + '/' + cafeId);
    }

}
export default new CafeService()