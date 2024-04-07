import axios from 'axios';
import {ApisPath} from './../constants/APIPaths';


const Client = axios.create({
  baseURL: ApisPath.BASE_URL,
});


export {Client};
