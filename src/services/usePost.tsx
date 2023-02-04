import { useState } from "react";

// TODO
// use props
// consts 
// conf

// {}???? 
const usePost = (url: string, data: {}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [response, setResponse] = useState("");

    const doPost = async () => {
        try {
            setLoading(true);
            const resp = await fetch(url, {
                method: "POST",
                //headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),
            })
            const resp2 = await resp.json();
            setResponse(resp2);
        }
        catch(error: any) {
            setError(error);
        }
        setLoading(false);
    }

    return {doPost, loading, error, response};
}

export default usePost