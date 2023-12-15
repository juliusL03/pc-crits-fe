import MainNav from "@/components/common/layouts/MainNav"
import { NextPage } from "next"
import DisplayItems from "./items"
import Banner from "./Banner"
import Popular from "./Popular"
import NewArrivals from "./NewArrivals"
const Home: NextPage = () => {

	return (
		<MainNav>
   <Banner />
   <Popular />
   <NewArrivals />
   <br />
   {/* <DisplayItems /> */}
  </MainNav>
	)
}

export default Home
