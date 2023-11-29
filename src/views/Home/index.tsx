import MainNav from "@/components/common/layouts/MainNav"
import { NextPage } from "next"
import DisplayItems from "./items"

const Home: NextPage = () => {

	return (
		<MainNav>
   <h1>Welcome PC-crits</h1>
   <DisplayItems />
   <DisplayItems />
  </MainNav>
	)
}

export default Home
