import { useEffect, useState } from "react";
import axios from "axios";

// export const useAxiosHandlingData = (path, typeOfRequest) => {
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setloading] = useState(true);

//   const fetchData = () => {
//     switch (typeOfRequest.type) {
//       case "GET":
//         axios
//           .get(path, {
//             headers: {
//               crossDomain: true,
//             },
//           })
//           .then((response) => {
//             setResponse(response);
//             setloading(false);
//           })
//           .catch((error) => setError(error));
//         break;
//       case "POST":
//         return null;
//       default:
//         return null;
//     }
//   };

//   useEffect(() => fetchData(), []);

//   return { response, error, loading };
// };

export const axiosHandlingData = async (path, typeOfRequest) => {
  let response;
  let error;

  switch (typeOfRequest.type) {
    case "GET":
      await axios
        .get(path, {
          headers: {
            crossDomain: true,
          },
        })
        .then((res) => {
          response = res;
        })
        .catch((err) => (error = err));
      break;
    case "POST":
      return null;
    default:
      return null;
  }
  console.log("response dolje", response);
  return { response, error };
};
