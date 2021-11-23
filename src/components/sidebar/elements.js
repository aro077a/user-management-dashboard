import styled from '@emotion/styled';

export const SidebarContainer = styled.nav`
  display: grid;
  align-content: space-between;
  background-color: #f5f8fa;
`;

export const UserSettings = styled.div`
  display: grid;
  gap: 25px;
  margin-left: 37px;
  justify-content: flex-start;
  justify-items: center;
  position: relative;
`;

export const SettingsIcon = styled.img`
  width: 20px;
  heigth: 24px;
`;

export const BellIcon = styled.img`
  width: 20px;
  heigth: 24px;
`;

export const UserIcon = styled.img`
  width: 48px;
  heigth: 48px;
  margin-bottom: 24px;
`;
export const BellBadge = styled.div`
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background: #6979f8;
  position: absolute;
  left: 25px;
  bottom: 108px;
`;

export const Navigation = styled.div`
  margin-top: 60px;
  padding: 24px;
`;
export const NavigationItem = styled.div`
  a {
    text-decoration: none;
    color: #000000;
    cursor: pointer;
  }
`;
export const NavIcon = styled.img``;
export const NavItem = styled.span`
  margin-left: 12px;
`;
