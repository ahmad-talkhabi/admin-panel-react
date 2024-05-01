import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import styles from './styles.module.scss';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

const items = [
  {
    key: '/',
    icon: React.createElement(HomeOutlined),
    label: 'Dashboard',
  },
  {
    key: '/user',
    icon: React.createElement(UserOutlined),
    label: 'User List',
  },
];

export default function BaseSidebar() {
  const navigate = useNavigate();
  const handleClick = (menuInfo) => {
    navigate(menuInfo.key);
  };
  const location = useLocation();

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[location.pathname]}
      items={items}
      className={styles.menu}
      onClick={handleClick}
    />
  );
}
