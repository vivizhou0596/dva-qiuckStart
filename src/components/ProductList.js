import React from "react"
import propTypes from "prop-types"
import {Table , Popconfirm, Button} from "antd"

const ProductList = ({onDelete,products})=>{
    const columns = [{
      title:"名称",
      dataIndex:"name"
    },{
      title:"操作",
      render:(text,record)=>{
        return (
          <Popconfirm  title="确定要删除吗?" onconfirm = {()=>onDelete(record.id) }>
            <Button>删除</Button>
          </Popconfirm>
        )
      }
    }]
    return (
      <Table
        dataSource = {products}
        columns = {columns}
      />
    )
}
ProductList.propTypes = {
  onDelete:propTypes.func.isRequired,
  products:propTypes.array.isRequired,
}
export default ProductList
