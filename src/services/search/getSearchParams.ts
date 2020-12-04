const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const initialSearchParam = urlParams.get("search") || "";

export default initialSearchParam;
