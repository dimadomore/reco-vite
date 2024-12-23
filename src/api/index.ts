import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { GetAppsRequest } from "@/types";

const api = axios.create({
  baseURL: "/api/v1",
  headers: {
    "ngrok-skip-browser-warning": "69420",
  },
});

export const useGetApps = (params: GetAppsRequest) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getApps", params],
    queryFn: async () => {
      const response = await api.put("/app-service/get-apps", params);

      return response.data;
    },
    // placeholderData: (prev) => prev,
  });

  return { data, error, isLoading };
};

export const useGetAppOverview = (appId: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getAppOverview", appId],
    queryFn: async () => {
      const response = await api.get(`/app-service/get-app-overview/${appId}`);

      return response.data;
    },
  });

  return { data, error, isLoading };
};

export const useGetAppUsers = (appId: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getAppsUsers", appId],
    queryFn: async () => {
      const response = await api.get(
        `/app-service/get-app-overview-users/${appId}`,
      );

      return response.data;
    },
  });

  return { data, error, isLoading };
};
