import { functions } from './fbConfig';
import { httpsCallable } from "firebase/functions";

export const handleGetGPTResponse = async(prompt) => {
    const getGPTResponse = httpsCallable(functions, 'getGPTResponse');
    const result = await getGPTResponse({text: prompt});
    // console.log(result.data);
    return result.data;
}