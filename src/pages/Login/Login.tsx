import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser, resetUser, UserKey } from '../../redux/states/user';
import { getMorty } from '../../services/auth.service';
import { PrivateRoutes, PublicRoutes } from '../../models/routes';
import { useEffect } from "react";
import { clearLocalStorage } from '../../utilities/localStorage.utility';
import { Roles } from '../../models/role';

function Login() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, {replace: true})
  }, []);

  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser({...result, role: Roles.ADMIN}));
      navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true});
    } catch (error) {}
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={login}>LOGIN</button>
    </div>
  )
  
}

export default Login;

