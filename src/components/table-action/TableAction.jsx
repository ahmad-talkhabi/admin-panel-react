import { Button, Space, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';

export default function TableAction(props) {
  return (
    <>
      <Space>
        <Tooltip title="show">
          <Button type="text" shape="circle" icon={<EyeOutlined />} onClick={() => props.onView(props.id)} />
        </Tooltip>
        <Tooltip title="edit">
          <Button type="text" shape="circle" icon={<EditOutlined />} onClick={() => props.onEdit(props.id)} />
        </Tooltip>
        <Tooltip title="delete">
          <Button danger type="text" shape="circle" icon={<DeleteOutlined />} />
        </Tooltip>
      </Space>
    </>
  );
}
