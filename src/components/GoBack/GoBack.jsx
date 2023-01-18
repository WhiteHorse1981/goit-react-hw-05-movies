import { Link, useLocation } from 'react-router-dom';
function GoBack() {
  const location = useLocation();
  return <Link to={location.state?.from ?? '/'}>GoBack</Link>;
}

export default GoBack;
