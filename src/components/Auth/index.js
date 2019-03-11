import React from 'react';
import { Redirect } from 'react-router-dom';
import * as API from './../../helpers/FormDataHelper';

const auth = Component => {
  
  const isAuth = ({auth, ...rest}) => {
    if (auth)
      return <Component {...rest} />
    
    return <Redirect to={{pathname: '/login'}} />;
  }
  return isAuth;
}

export const verifyLogin = async (cb) => {
    const requestInfo = API.FormDataHelper();
    const fetchApi = await fetch(`${API.urlAPI}/user/auth`, requestInfo);
    const response = await fetchApi.json();
    cb(response.success);
}

export default auth;