import clsx from 'clsx'
import styles from './search.module.scss'
import DropdownBrand from './dropdown';
import { useState } from 'react';

const Search: React.FC = () => {
 const [brand, setBrand] = useState('')
 const [category, setCategory] = useState('')
 // cost []

 const onSearch = () => {
  // SubmitEvent(brand)
 }

	return (
		<div className={clsx(styles.container)}>
   <div className={clsx(styles.wrapper)}>
    <div className={clsx(styles.inputSection)}>
    <input className={clsx(styles.text)} placeholder='Search Product'/>
    <div className={clsx(styles.dropdown)}>
    <DropdownBrand onSelect={setBrand} listItems={['All Brand', 'Acer', 'Hp', 'Lenovo']} />
    <DropdownBrand onSelect={setCategory} listItems={['All Categories', 'Camera', 'Laptop', 'Smartphone', 'Headphone']} />
    </div>
    </div>
    <button className={clsx(styles.button)}>Search</button>
   </div>
  </div>
	)
}

export default Search
