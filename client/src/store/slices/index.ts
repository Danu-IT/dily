import { authAPI } from '../services/authService';
import auth from './auth';

export default {
    auth,
    [authAPI.reducerPath]: authAPI.reducer
}