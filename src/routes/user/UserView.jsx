import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../services/userSevices';
import { PageHeader } from '../../components/index';
import { Descriptions, Spin } from 'antd';
import BaseLayout from '../../layout/BaseLayout.jsx';

export default function UserView() {
  const { id: userId } = useParams();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    getUser(userId).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  return (
    <>
      <BaseLayout>
        <PageHeader title="User View" subtile="Subtitle" />

        {!data || loading ? (
          <Spin />
        ) : (
          <Descriptions title="User Info" bordered>
            <Descriptions.Item label="id">{data.id}</Descriptions.Item>
            <Descriptions.Item label="name">{data.name}</Descriptions.Item>
            <Descriptions.Item label="phone">{data.phone}</Descriptions.Item>
            <Descriptions.Item label="email">{data.email}</Descriptions.Item>
            <Descriptions.Item label="username">{data.username}</Descriptions.Item>
            <Descriptions.Item label="company">{data.company.name}</Descriptions.Item>
            <Descriptions.Item label="address">
              <Descriptions>
                <Descriptions.Item label="street">{data.address.street}</Descriptions.Item>
                <Descriptions.Item label="suite">{data.address.suite}</Descriptions.Item>
                <Descriptions.Item label="city">{data.address.city}</Descriptions.Item>
                <Descriptions.Item label="zipcode">{data.address.zipcode}</Descriptions.Item>
              </Descriptions>
            </Descriptions.Item>
          </Descriptions>
        )}
      </BaseLayout>
    </>
  );
}
