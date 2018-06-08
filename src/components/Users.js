import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import { routerRedux } from "dva/router"
import UserModal from './UserModal'
 const PAGE_SIZE =5;
 function Users({ dispatch,list: dataSource, loading,total, page: current }) {
     function deleteHandler(id) {
         console.warn(`TODO: ${id}`);
         dispatch({
           type:'users/remove',
           payload:id
         })
     };
     function pageChangeHandler (page){
       dispatch(routerRedux.replace({
         pathname:'/users',
         query:{page},
       }))
     };
      function editHandler(id,values){
        console.log(values)
        dispatch({
          type:'users/patch',
          payload:{ id,values }
        })
      }
      function createHandler(values){
        console.log(values)
        dispatch({
          type:'users/create',
          payload:values
        })
      }
     const columns = [
         {
           title: 'Name',
           dataIndex: 'name',
           key: 'name',
           render: text => <a href="">{text}</a>,
         },
       {
           title: 'Email',
           dataIndex: 'email',
           key: 'email',
         },
       {
           title: 'Website',
           dataIndex: 'website',
           key: 'website',
         },
       {
           title: 'Operation',
           key: 'operation',
           //render: (text, { id }) => (
           render: (id, record) => (
             <span >
               <UserModal record={ record } onOk={ editHandler.bind(null,record.id) }>
                 <a >Edit</a>
               </UserModal>
               <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, id)}>
                 <a href="">Delete</a>
               </Popconfirm>
             </span>
           ),
         },
     ];

       return (
         <div >
             <div>
               <div>
                 <UserModal record={{}} onOk={ createHandler }>
                   <Button type="primary">添加</Button>
                 </UserModal>
               </div>
               <Table
                 columns={columns}
                 dataSource={dataSource}
                 loading={loading}
                 rowKey={record => record.id}
                 pagination={false}
               />
               <Pagination
                 className="ant-table-pagination"
                 total={total}
                 current={current}
                 onChange ={pageChangeHandler}
                 pageSize={PAGE_SIZE}
               />
       </div>
     </div>
     );
   }

 function mapStateToProps(state) {
     //console.log(state)
     const { list, total, page } = state.users;
     return {
           loading: state.loading.models.users,
           list,
           total,
           page,
       };
   }

 export default connect(mapStateToProps)(Users);
