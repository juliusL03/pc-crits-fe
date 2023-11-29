import { Table } from "antd";
import { NextPage } from "next";
import {columns} from "./column";
import { data } from "./data";

const MyOrder: NextPage = () => {
return (
 <div>
  <Table columns={columns} dataSource={data} pagination={false}/>
 </div>
)
}

export default MyOrder
