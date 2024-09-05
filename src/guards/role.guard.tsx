import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { Roles } from '../models';
import { AppStore } from '../redux/store';
import { PrivateRoutes, PublicRoutes } from '../models/routes';

interface Props {
  role: Roles;
}

function RoleGuard({role}: Props) {
  const userState = useSelector((store: AppStore) => store.user);
  return userState.role == role ? <Outlet /> : <Navigate replace to={PrivateRoutes.PRIVATE} />
}
export default RoleGuard