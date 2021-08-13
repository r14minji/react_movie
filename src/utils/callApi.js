const baseUrl = "http://kobis.or.kr/kobisopenapi/webservice/rest/movie";
const naverUrl = "https://cloneapi.herokuapp.com/search/movie";

export const callApi = async (param) => {
  const response = await fetch(`${baseUrl}${param}`);
  if (response.status === 200) {
    return await response.json();
  } else {
    console.log(response);
  }
};

export const callApiNaver = async (param) => {
  const response = await fetch(`${naverUrl}${param}`);
  if (response.status === 200) {
    return await response.json();
  } else {
    console.log(response);
  }
};
