import { useEffect, useState } from "react";

export function useGithubUser(username) {
    const [data, setData] = useState(null)
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoad(true)
        try {
            fetch(`https://api.github.com/users/${username}`)
                .then((response) => response.json())
                .then((actualData) => {
                    console.log(actualData)
                    setData(actualData)
                    setLoad(false);
                });
        }
        catch (error) {
            setError(error);
        }
    }, [username]);

    return {
        data: data,
        error: error,
        load: load
    }

}