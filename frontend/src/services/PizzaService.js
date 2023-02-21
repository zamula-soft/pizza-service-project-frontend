import axios from "axios";

const PIZZA_API_BASE_URL = "http://localhost:8080/pizza";

class PizzaService {

    getPizzas(){
        return axios.get(PIZZA_API_BASE_URL); 
    }

    createPizza(pizza)
    {
        return axios.post(PIZZA_API_BASE_URL+'/add', pizza);
    }

    searchPizza(pizza)
    {
        return axios.get(PIZZA_API_BASE_URL+'/search?=' + pizza);
    }

    getPizzaById(pizzaId)
    {
        return axios.get(PIZZA_API_BASE_URL + '/' + pizzaId);
    }

    updatePizza(pizza, pizzaId)
    {
        return axios.put(PIZZA_API_BASE_URL + '/' + pizzaId, pizza);
    }

    deletePizza(pizzaId){
        return axios.delete(PIZZA_API_BASE_URL + '/' + pizzaId);
    }

}
export default new PizzaService()