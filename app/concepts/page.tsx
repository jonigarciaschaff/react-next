import Header from "@/components/Header/Header";
import Link from "next/link";

export default function concepts() {
  return (
    <>
      <Header>Conceptos generales</Header>
      <div>
        <p className="mb-4">
          <b>React:</b>React es una libreria declarativa, basada en componentes
          y unidireccional, el flujo de datos va del padre al hijo. Además,
          utiliza un virtual dom, una copia del dom guardada en memoria que
          utiliza para comparar que node hay que actualizar y no tener que
          renderizar toda la web.
        </p>
        <p className="mb-4">
          <b>POO:</b>
          polimorfismo, abstracción, encapsulamiento, herencia
        </p>
        <p className="mb-4">
          <b>SAAS:</b>
          software as a service, usar un servicio en el navegador sin necesidad
          de descargar ningún software
        </p>
        <p className="mb-4">
          <b>Declarativo:</b>
          <code style={{ color: "green" }}>
            {"<span>Esto es declarativo</span>"}
          </code>
        </p>
        <p className="mb-4">
          <b>Imperativo:</b>
          <code style={{ color: "green" }}>
            {"React.createElement('h1', {id: '1'}, 'Hola mundo')"}
          </code>
        </p>
      </div>
    </>
  );
}
