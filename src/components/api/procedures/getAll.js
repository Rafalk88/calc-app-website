import { makeAuthorizedRequest } from "../../../auth";

import { makeApiUrl } from "../../api";

import { PROCEDURES_KEY } from "./consts";

export const getAll = async () => {
  const data = await makeAuthorizedRequest(makeApiUrl(PROCEDURES_KEY));
  return data;
};

export default getAll;
