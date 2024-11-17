import axios from "axios";

class FactsService {
  async browse(params) {
    const response = await axios.get("https://catfact.ninja/facts", {
      headers: {
        accept: "application/json",
        "X-CSRF-TOKEN": "NhY54A8fV06Cc5rxDFxsuQnNq8VVe4EWgFfrT2dg",
      },
      params: params,
    });
    return response.data;
  }
}

export default new FactsService();
