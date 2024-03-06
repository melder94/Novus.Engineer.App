import { AxiosRequestConfig } from "axios";
import { ApiResponse } from "../models/api-response";
import { callExternalApi } from "./external-api.service";
import { useAuth0 } from "@auth0/auth0-react";

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

// const useAccessToken = async (): Promise<string> => {
//   const { getAccessTokenSilently } = useAuth0();
//   const accessToken = await getAccessTokenSilently({
//     authorizationParams: {
//       audience: audience,
//       scope: "read:job",
//     },
//   });
//   return accessToken;
// }

export const getPublicResource = async (): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/api/messages/public`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const { data, error } = (await callExternalApi({ config })) as ApiResponse;

  return {
    data,
    error,
  };
};

export const getProtectedResource = async (): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/api/messages/protected`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const { data, error } = (await callExternalApi({ config })) as ApiResponse;

  return {
    data,
    error,
  };
};

export const getAdminResource = async (): Promise<ApiResponse> => {
  //const accessToken = await useAccessToken();
  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/api/users/test`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer `,
    },
  };

  const { data, error } = (await callExternalApi({ config })) as ApiResponse;

  return {
    data,
    error,
  };
};
