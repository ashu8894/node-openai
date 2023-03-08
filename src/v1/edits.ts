import { Usage } from ".";
import { ApiClient } from "..";

type EditRequest = {
    model: string;
    input?: string;
    instruction: string;
    n?: number;
    temperature?: number;
    top_p?: number;
};

type Choice = {
    index: number;
    text: string;
}

type Edit = {
    object: string;
    created: number;
    choices: Choice[];
    usage: Usage;
}

export function createEdit(client: ApiClient) {
    return async (request: EditRequest): Promise<Edit> => {
        return await client("edits", { method: "POST", data: request });
    }
}
