import useSWR, { mutate } from "swr"

const fetcher = (url) => fetch(url).then((response) => response.json())

export function useGithubUser (username) {
    const { data, mutate } = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher)

    function handleRefetch () {
        mutate()
    }

    return {
        data: data,
        onRefetch: handleRefetch
    }

}