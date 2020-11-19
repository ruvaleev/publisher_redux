import axios from 'axios';

export const API_CALL = 'API_CALL';

const ROOT_URL = 'https://publisher-9bb8.restdb.io/rest';
const API_KEY = '5f9ff06b231ba42851b4a084'

const APICall = ({ method, endpoint }) => (
  axios({
    url: `${ROOT_URL}${endpoint}`,
    method,
    headers: {
      'x-apikey': API_KEY
    }
  })
  .then(res => res.data)
)

const APIMiddleware = store => next => action => {
  if (!action[API_CALL]) return next(action);

  const { [API_CALL]: apiCall, ...nextAction } = action;
  
  const [requestType, successType, failureType] = apiCall.types;

  store.dispatch({
    type: requestType,
    ...nextAction
  });

  return (
    APICall(apiCall)
      .then(response => store.dispatch({
        type: successType,
        response,
        ...nextAction
      }))
      .catch(error => store.dispatch({
        type: failureType,
        error,
        ...nextAction
      }))
  )
};

export default APIMiddleware;
