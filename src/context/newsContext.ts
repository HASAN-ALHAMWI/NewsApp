import createDataContext from './createDataContext';
import * as constants from '../constants';
import * as endpoints from '../config/endpoints';
import {Client} from '../services/api';
import newsReducer from '../reducers/news';

export const getNewsAPI = (dispatch: any) => {
  return async () => {
    try {
      const response = await Client.get(`${endpoints.GET_NEWS}`);
      dispatch({
        type: constants.SUCCESS_GET_NEWS,
        payload: response?.data?.articles,
      });
      return response;
    } catch (e) {
      // Handle error
      console.error('', e);
    }
  };
};

export const {Provider, Context} = createDataContext(
  newsReducer,
  {getNewsAPI},
  {},
);
