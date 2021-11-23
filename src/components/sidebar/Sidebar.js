import React from 'react';
import {
  SidebarContainer,
  UserSettings,
  SettingsIcon,
  UserIcon,
  BellIcon,
  BellBadge,
  Navigation,
  NavigationItem,
  NavIcon,
  NavItem,
} from './elements';
import settingsIcon from '../../assets/icons/settings-icon.svg';
import bellIcon from '../../assets/icons/bell-icon.svg';
import userIcon from '../../assets/icons/user-icon.svg';
import jobIcon from '../../assets/icons/job-icon.svg';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Navigation>
        <NavigationItem>
          <NavIcon src={jobIcon} alt='' />
          <Link to='/'>
            <NavItem>Job Posts</NavItem>
          </Link>
        </NavigationItem>
        <NavigationItem>
          <NavIcon src={jobIcon} alt='' />
          <Link to='/create'>
            <NavItem>Update Job Posts</NavItem>
          </Link>
        </NavigationItem>
      </Navigation>

      <UserSettings>
        <SettingsIcon src={settingsIcon} alt=''></SettingsIcon>
        <BellIcon src={bellIcon} alt=''></BellIcon>
        <BellBadge></BellBadge>
        <UserIcon src={userIcon} alt=''></UserIcon>
      </UserSettings>
    </SidebarContainer>
  );
};

export default Sidebar;
