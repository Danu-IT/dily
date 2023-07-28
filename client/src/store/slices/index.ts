import { authAPI } from '../services/authService';
import { differentAPI } from '../services/differentService';
import auth from './auth';
import different from './different';

export default {
    auth,
    different,
    [differentAPI.reducerPath]: differentAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer
}