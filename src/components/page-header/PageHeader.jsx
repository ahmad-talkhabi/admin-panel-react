import { Button, Divider, Flex, Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;
export default function PageHeader(props) {
  const navigate = useNavigate();

  return (
    <>
      <Flex align="center">
        <Button
          type="text"
          shape="circle"
          icon={<ArrowLeftOutlined />}
          className="me-1"
          size="large"
          onClick={() => navigate(-1)}
        />
        <Title level={2} className="me-2.5 !my-0">
          {props.title}
        </Title>
        <Text type="secondary">{props.subtile}</Text>
        <div className="ms-auto">{props.children}</div>
      </Flex>
      <Divider />
    </>
  );
}
