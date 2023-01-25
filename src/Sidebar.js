import { Avatar } from '@mui/material';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src='' alt='' />
        <p>Who viewed you</p>
        <p className='sidebar__statNumber'>2,543</p>
        <h2>Corey Trach</h2>
        <h4>corey.trach@gmail.com</h4>
      </div>

      <div className='sidebar__stats'>
        <div className='sidebar__sat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2,543</p>
        </div>
        <div className='sidebar__sat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>2,448</p>
        </div>
      </div>

      <div className='sidebar__bottom'>
        <p>Recent</p>
      </div>
    </div>
  );
}
