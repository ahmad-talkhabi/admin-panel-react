import { PageHeader } from '../../components';
import BaseLayout from '../../layout/BaseLayout.jsx';

export default function Root() {
  return (
    <>
      <BaseLayout>
        <PageHeader title="Dashboard" subtile="Subtitle" />
      </BaseLayout>
    </>
  );
}
