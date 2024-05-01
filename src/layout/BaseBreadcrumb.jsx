import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

export default function BaseBreadcrumb() {
  function itemRender(currentRoute, params, items, paths) {
    const isLast = currentRoute?.path === items[items.length - 1]?.path;

    return isLast ? <span>{currentRoute.title}</span> : <Link to={`/${paths.join('/')}`}>{currentRoute.title}</Link>;
  }

  const location = useLocation();
  const paths = location.pathname;
  const items = paths.split('/').map((path, index) => {
    return {
      path: `/${path}`,
      title: index === 0 ? <HomeOutlined /> : path,
    };
  });

  return <Breadcrumb itemRender={itemRender} items={items} />;
}
