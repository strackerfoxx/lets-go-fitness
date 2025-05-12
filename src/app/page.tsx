import "@/app/css/cover.css"
import Cover from "@/components/Cover"
import Offert from "@/components/Offert"
import Plans from "@/components/Plans"
import Location from "@/components/Location"

export default function Home() {
  return (
    <div className="main-body" >
      <Cover/>
      <Offert/>
      <Plans/>
      <Location/>

    </div>
  )
}
