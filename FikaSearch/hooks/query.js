export const useQueryPipeline = (queryFn, ...fns) => {
  return () => {
    const result = queryFn();

    if (result.isLoading) {
      return { isLoading: true };
    }

    let data = result.data;
    fns.forEach((fn) => (data = fn(data)));

    return {
      isLoading: false,
      data,
    };
  };
};

export const useComposeQueries = (...fns) => {
  return () => {
    const results = fns.map((fn) => fn());
    if (results.some((result) => result.isLoading)) {
      return { isLoading: true };
    }
    return {
      isLoading: false,
      data: Object.assign(...results.map((result) => result.data)),
    };
  };
};
