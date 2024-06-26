import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      initialData: {
        prices: []
      },
    }
  }
});

export default queryClient;
