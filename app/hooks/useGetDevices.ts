import { useQuery } from "@tanstack/react-query";

const getDevices = async () => {
  const response = await fetch("/api/devices");
  const data = await response.json();
  return data;
};

export const useGetDevices = () => {
  const response = useQuery({
    queryKey: ["useGetDevices"],
    queryFn: () => getDevices(),
  });

  return response;
};
