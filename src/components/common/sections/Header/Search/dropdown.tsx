import { Dropdown, Space } from 'antd'
import styles from './search.module.scss'
import clsx from 'clsx'
import { useState } from 'react'
import { DropDownIcon } from '@/assets/icons'
type list = string


type props = {
 onSelect: (value: string) => void,
 listItems: list[]
}

const DropdownBrand: React.FC<props> = ({onSelect, listItems}) => {
 const [name, setName] = useState(listItems[0]) 
 const selectHandler = (selected: string) => {
  setName(selected)
  onSelect(selected)
 }

 const newMenu = listItems.map((item, index) => ({
  key: `${index}`,
  label: (
   <label onClick={() => (selectHandler(item))}>
     {item}
   </label>
 )
 }))

  return <Dropdown menu={{ items: newMenu }} placement="bottom" arrow>
    <a onClick={(e) => e.preventDefault()}>
      <Space className={clsx(styles.baseText)}>
        {name}
        <div className={clsx(styles.center)}><DropDownIcon /></div>
      </Space>
    </a>
  </Dropdown>
}

export default DropdownBrand;