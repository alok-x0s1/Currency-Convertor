import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setdata] = useState({})

    useEffect( () => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.min.json`)
        .then(
            (res) => res.json()
        )
        .then(
            (data) => setdata(data[currency])
        )
    }, [currency])

    return data;
}

export default useCurrencyInfo;