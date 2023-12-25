import MainNav from "@/components/common/layouts/MainNav"
import { NextPage } from "next"
import Banner from "./Banner"
import Popular from "./Popular"
import Products from "./Products"
import NewArrivals from "./NewArrivals"
const Home: NextPage = () => {

	return (
		<MainNav>
   <Banner 
   theme={'lightgreen'} 
   title={'Introducing the New Acer Laptop Series'} 
   subtitle={'unmatched performance in a sleek design.'} 
   link={"/acer/laptop"} 
   />
   <Popular />
   <NewArrivals />
   <Banner 
   theme={'lightblue'} 
   title={'Introducing the New Acer Laptop Series'} 
   subtitle={'unmatched performance in a sleek design.'} 
   link={"/acer/laptop"} 
   />
   <Products />
  </MainNav>
	)
}

export default Home
