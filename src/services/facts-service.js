import axios from "axios";

class FactsService {
  async browse(params) {
    const response = await axios.get("https://catfact.ninja/facts", {
      headers: {
        accept: "application/json",
      },
      params: params,
    });
    return response.data;
  }
}

export default new FactsService();
