import Users from '../components/Users';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
function UsersLayout ({ location }){
  return (
    <MainLayout location={location}>
      <div>
          <Users />
      </div>
    </MainLayout>
  )
}
export default connect()(UsersLayout);


