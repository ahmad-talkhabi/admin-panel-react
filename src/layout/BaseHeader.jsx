import { MoonFilled, SunFilled } from '@ant-design/icons';
import BaseBreadcrumb from './BaseBreadcrumb';
import { Button, Flex } from 'antd';

export default function BaseHeader(props) {
  return (
    <Flex align="center" className="h-full">
      <BaseBreadcrumb className="mr-auto" />
      <Button
        className="ml-auto"
        shape="circle"
        icon={props.darkMode ? <SunFilled /> : <MoonFilled />}
        onClick={props.toggleDarkMode}
      />
    </Flex>
  );
}
