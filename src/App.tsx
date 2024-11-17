import { useState } from "react"
import { ComponentCounter } from "./componentes/ComponentCounter/ComponentCounter"
import { MIPrimerComponente } from "./componentes/MiPrimerComponente/MIPrimerComponente"
import { ComponentUseEffect } from "./componentes/ComponentUseEffect/ComponentUseEffect"
import { div } from "framer-motion/client"
import { FormComponent } from "./componentes/FormComponent/FormComponent"
import { AppProduct } from "./componentes/AppProducts/AppProduct"

export const App = () => {



    return (
        <div style={{display:'flex', flexDirection:'column', gap: "2vh"}}>

            {/* <MIPrimerComponente text={"Este es mi primer componente"} color="red" fontSize={2} />
            <ComponentCounter />
            <ComponentUseEffect /> */}
            {/* <FormComponent /> */}
            <AppProduct />
            
        
        </div>
    )
}
