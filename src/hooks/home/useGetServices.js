import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";

function useGetServices() {
  const lang = useSelector((state) => state.language.lang);

  const { isLoading, data, error } = useQuery({
    queryKey: ["services", lang],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/homefix/most-order-services");
        if (res.status === 200) {
          return res.data?.data;
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  });

  return { isLoading, data, error };
}

export default useGetServices;
