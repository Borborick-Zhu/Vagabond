import { functions } from './fbConfig';
import { httpsCallable } from "firebase/functions";

export const handleGetGPTResponse = async(prompt) => {
    const text = 'Hey how is it going?';
    const getGPTResponse = httpsCallable(functions, 'getGPTResponse');
    const result = await getGPTResponse({text: text});
    console.log(result.data);
    return result.data;
}