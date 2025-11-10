import { useState, useEffect } from "react";
function useCurrencyinfo(currency) {
  const [data, setdata] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then(() => setdata(res[currency]));
    console.table(data);
  }, [currency]);
  console.log(data);
  return data;
}
export default useCurrencyinfo;
