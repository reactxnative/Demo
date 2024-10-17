import axios from "axios";
import { FormikValues } from "formik";

// Define the type for the registration parameters
interface RegisterUserParams extends FormikValues {
  username: string;
  password: string;
  expiresInMins: number;
}

// Function to register a user
export const registerUser = (param: RegisterUserParams): Promise<any> => {
  const params: RegisterUserParams = {
    username: 'mockName',
    password: 'mockPass',
    expiresInMins: 30,
    ...param, // Spread the passed parameters to allow for customization
  };

  return new Promise((resolve, reject) => {
    const url = 'https://dummyjson.com/auth/login';
    axios.post(url, params)
      .then(res => {
        console.log('res==>', res);
        resolve(res.data); // Return the response data
      })
      .catch(e => {
        console.error('Error:', e); // Log the error for debugging
      //  reject(e); // Reject the promise with the error
      resolve('mock login');  
    });
  });
};
