// import axios from "axios";
// import { BaseConstants } from "../constants";
// import { castObjectToFormData } from "./query-helper";
//
// class AuthService {
//   async login (data) {
//     const response = await axios.post(
//       BaseConstants.getPlatformApiUrl() + "/auth/login",
//       data
//     );
//
//     return response.data.data;
//   }
//
//   logout () {
//     axios
//       .post(BaseConstants.getPlatformApiUrl() + "/auth/logout")
//       .then(() => null)
//       .catch(() => null);
//   }
//
//   async refresh () {
//     const response = await axios.get(
//       BaseConstants.getPlatformApiUrl() + "/auth/refresh"
//     );
//     return response.data.data;
//   }
//
//   async profile () {
//     try {
//       const response = await axios.get(
//         BaseConstants.getPlatformApiUrl() + "/profile"
//       );
//       return response.data.data;
//     } catch {
//       return false
//     }
//   }
//
// }
//
// export default new AuthService();
