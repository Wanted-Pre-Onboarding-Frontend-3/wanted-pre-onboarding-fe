export const BASE_URL =
  "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production";
//   "http://localhost:8000";

const headers = () => {
  const access_token = localStorage.getItem("access_token");
  return access_token
    ? {
        "Content-Type": "application/json",
        Authorization: access_token ? `Bearer ${access_token}` : undefined,
      }
    : {
        "Content-Type": "application/json",
      };
};

const initToken = async (data) => {
  const { access_token } = await data;
  if (access_token) localStorage.setItem("access_token", access_token);
  return data;
};

export const get = async (url, options) => {
  const res = await fetch(`${BASE_URL}${url}`, {
    method: "GET",
    headers: headers(),
    ...options,
  });
  const data = res.json();

  return data;
};

export const post = async (url, options) => {
  const { body, ...restOptions } = options;
  const res = await fetch(`${BASE_URL}${url}`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(body),
    ...restOptions,
  });
  const data = res.json();

  return initToken(data);
};

export const put = async (url, options) => {
  const { body, ...restOptions } = options;

  const res = await fetch(`${BASE_URL}${url}`, {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify(body),
    ...restOptions,
  });
  const data = res.json();

  return data;
};

export const del = async (url, options) => {
  const res = await fetch(`${BASE_URL}${url}`, {
    method: "DELETE",
    headers: headers(),
    ...options,
  });
  const data = res.json();

  return data;
};
