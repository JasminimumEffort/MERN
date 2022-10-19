import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  return (
    <>
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      <button type="button" onClick={() => navigate(address)}>GO TO</button>
      {/* <input type="text" value={address} onChange={(e) => setAddress("/UserParams/:"+ e)} />
      <button type="button" onClick={() => navigate(address)}>Input UserName</button> */}
    </>
  );
}

export default Navigation;