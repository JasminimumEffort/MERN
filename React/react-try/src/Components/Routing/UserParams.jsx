import { useParams } from 'react-router-dom';

const UserParams = () => {
  const id = useParams();
  console.log('User:', id);
  return (
      <h2>Welcome User number {id.id}!</h2>
  );
}

export default UserParams;