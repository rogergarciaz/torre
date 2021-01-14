import axios from 'axios';

/**
 *
 * @param {*} username: String, user to be looked
 *
 * @return {object} Returns an object with the user data
 */
export const fetchUsername = async username => {
  const response = await axios.get(
    `/api/auth-fetch/auth-fetch?search=${username}`
  );
  if (response.status === 200) {
    return response.data.msg;
  }
  throw new Error(response.status);
};

/**
 *
 * @param {*} offset: Number, offset for lookup
 *
 * @return {object} Returns an object with the users data
 */
export const fetchUsers = async offset => {
  const response = await axios.post(`/api/users/users?offset=${offset}`);
  if (response.status === 200) {
    return response.data.msg;
  }
  throw new Error(response.status);
};

/**
 *
 * @param {*} offset: Number, offset for lookup
 *
 * @return {object} Returns an object with the job data
 */
export const fetchJobs = async offset => {
  const response = await axios.post(`/api/jobs/jobs?offset=${offset}`);
  if (response.status === 200) {
    return response.data.msg;
  }
  throw new Error(response.status);
};

/**
 *
 * @param {*} String: Location name for geocode
 *
 * @return {object} Returns an object with the job data
 */
export const fetchLocation = async locationName => {
  const response = await axios.post(`/api/geocode/geocode?query=${locationName}`);
  if (response.status === 200) {
    return response.data.msg;
  }
  throw new Error(response.status);
};