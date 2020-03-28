import useSWR from "swr";

const FortuneTeller = () => {
  const { data, error, isValidating } = useSWR("/api/fortuneteller", (...args) => {
    return fetch(...args).then(res => res.json())
  }, {refreshInterval: 1000, dedupingInterval: 10})

  return (
    <div>Your lucky number is {data ? data.fortune : 'loading'} {isValidating.toString()}</div>
  )
}

export default FortuneTeller