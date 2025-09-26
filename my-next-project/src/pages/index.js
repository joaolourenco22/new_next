
import ComponenteComUmaProp from "@/components/ComponenteComUmaProp";
import PrimeiroComponente from "@/components/PrimeiroComponente";
import ComponenteComVariasProps from "@/components/ComponenteComVariasProps";
import ComponenteComCondicional from "@/components/ComponenteComCondicional";
import ComponenteComMap from "@/components/ComponenteComMap"
import ComponenteComEventos from "@/components/ComponenteComEventos"
import ComponenteComState from "@/components/ComponenteComState"
import ComponenteComUseEffect from "@/components/ComponenteComUseEffect"
import ComponenteComFormularioFormik from "@/components/ComponenteComFormularioFormik"

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-300 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-7xl font-bold text-cyan-50 ">Hello! 👋🏻</h1>

        { /* 2. COMPONENTE ORIGINAL */}
        <PrimeiroComponente />

        { /* 2. COMPONENTE COM UMA PROP */}
        <ComponenteComUmaProp nome="João Silva" />

        { /* 3. COMPONENTE COM VARIAS PROPS */}
        <ComponenteComVariasProps titulo="Perfil do Utilizador" cor="red" nome="Maria Neto" idade={25} />

        { /* 4. COMPONENTE COM CONDICIONAL */}
        <ComponenteComCondicional />

        { /* 5. COMPONENTE COM COM MAP */}
        <ComponenteComMap />

        { /* 6. COMPONENTE COM COM EVENTOS */}
        <ComponenteComEventos />

        { /* 7. COMPONENTE COM COM STATE */}
        <ComponenteComState />

        { /* 8. COMPONENTE COM COM USE EFFECT */}
        <ComponenteComUseEffect />

        { /* 9. COMPONENTE COM COM FORMULARIO FORMIK */}
        <ComponenteComFormularioFormik />

      </div>
    </div>
  )
}