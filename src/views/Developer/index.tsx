import clsx from 'clsx'
import styles from './developer.module.scss'
import { NextPage } from 'next'
import Info from './info'
import MainNav from '@/components/common/layouts/MainNav'
import HireMe from './hireme'

const Developer: NextPage = () => {
 
 return(
  <MainNav>
   <div className={clsx(styles.container)}>
    <Info />
    <HireMe />
  </div>
  </MainNav>
 )
}

export default Developer