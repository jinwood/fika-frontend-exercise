import { useQueryPipeline, useComposeQueries } from "./query";

describe("queries", () => {
  describe("useQueryPipeline", () => {
    it("returns isLoading: true whilst queries are loading", () => {
      const fn = () => ({ isLoading: true });
      const errorFn = () => {
        throw new Error("unexpected call");
      };
      const query = useQueryPipeline(fn, errorFn);

      expect(query()).toEqual({ isLoading: true });
    });

    it("processes data when isLoading: false", () => {
      const fn = () => ({ isLoading: false, data: 1 });
      const addOne = (x) => x + 1;

      const query = useQueryPipeline(fn, addOne, addOne, addOne);

      expect(query()).toEqual({ isLoading: false, data: 4 });
    });
  });

  describe("useComposeQueries", () => {
    it("returns isLoading: true whilst queries are loading", () => {
      let isLoading1 = true;
      let isLoading2 = true;

      const query1 = () => ({
        isLoading: isLoading1,
        data: {},
      });
      const query2 = () => ({
        isLoading: isLoading2,
        data: {},
      });

      const query = useComposeQueries(query1, query2);

      expect(query()).toEqual({ isLoading: true });
      isLoading1 = false;
      expect(query()).toEqual({ isLoading: true });
      isLoading2 = false;
      expect(query()).toEqual({ isLoading: false, data: {} });
    });

    it("merges all the queries", () => {
      const query1 = () => ({
        isLoading: false,
        data: { a: 1 },
      });
      const query2 = () => ({
        isLoading: false,
        data: { b: 2 },
      });

      const query = useComposeQueries(query1, query2);

      expect(query()).toEqual({ isLoading: false, data: { a: 1, b: 2 } });
    });
  });
});
