import axios, { Canceler } from "axios";
import { IHome } from "~/models/IHome";

export const getHomes = (): {
    request: () => Promise<IHome[]>;
    cancel: Canceler;
} => {
    const source = axios.CancelToken.source();
    const config = { cancelToken: source.token };

    const request = async (): Promise<IHome[]> => {
        const response = await axios.get<IHome[]>(
            "https://603e38c548171b0017b2ecf7.mockapi.io/homes",
            config
        );

        return response.data;
    };

    const cancel = source.cancel;

    return { request, cancel };
};
