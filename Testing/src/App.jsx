import ContadorSimple from "./ContadorSimple"
import ContadorSumaResta from "./ContadorSumaResta"
import Input from "./input"
import FormularioEnvio from "./Formulario"
import FormObjetos from "./FormularioObjetos"
import Hover from "./Hover"
import Ecommerce from "./CarritoSimple"
import EcommerceTotal from "./CarritoTotal"
import "./App.css"

function App() {
  return (
    <div>
      <ContadorSimple />
      <ContadorSumaResta />
      <Input />
      <FormularioEnvio />
      <FormObjetos />
      <Hover />
      <Ecommerce />
      <EcommerceTotal />
    </div>
  )
}

export default App