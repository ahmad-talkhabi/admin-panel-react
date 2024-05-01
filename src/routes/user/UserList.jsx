import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Table } from 'antd';
import { getUsers } from '../../services/userSevices';
import { TableAction, PageHeader } from '../../components';

export default function Root() {
  function viewItem(id) {
    navigation(`/user/${id}`);
  }
  function editItem(id) {
    navigation(`/user/${id}/edit`);
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'username',
      dataIndex: 'username',
    },
    {
      title: 'website',
      dataIndex: 'website',
    },
    {
      title: 'address',
      dataIndex: 'address',
      render: (address) => `${address.city} ${address.street}`,
    },
    {
      title: 'action',
      dataIndex: 'id',
      render: (id) => (
        <>
          <TableAction id={id} onView={viewItem} onEdit={editItem} />
        </>
      ),
    },
  ];
  const navigation = useNavigate();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    getUsers().then((res) => {
      if (res.status === 200) {
        const results = res.data;
        setData(results);
        setLoading(false);
      }
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <PageHeader title="User list" subtile="Subtitle">
        <Button type="primary">Add user</Button>
      </PageHeader>
      <Table columns={columns} rowKey={(record) => record.id} dataSource={data} loading={loading} />
    </>
  );
}
