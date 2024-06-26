import { useQuery } from 'react-query';

import { fetchPrices } from "./api";

export const usePrices = () => useQuery({
  queryKey: ['prices'],
  queryFn: fetchPrices,
});
