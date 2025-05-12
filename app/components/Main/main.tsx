
import { Products } from "./Products/products"
import { Advantages } from "./Advantages/advantages"
import { ImageSlider } from "../Slider/slider"

import { Why } from "./Why/why"
import { Randomizer } from "./Randomizer/randomizer"
import { OtherProducts } from "./Other products/otherProducts"
import { Contacts } from "./Contacts/contacts"
import { text } from "@/app/text"





export const Main = async () => {
    return (
        <main>
        <Products/>
        <Advantages/>
        <ImageSlider images={text.slider} interval={4000}/>
        <Why/>
        <Randomizer/>
        <OtherProducts/>
        <Contacts/>
    {/* <MouseTrail color="white" length={30} size={15} blur={20}/> */}



    </main>
    )

  }