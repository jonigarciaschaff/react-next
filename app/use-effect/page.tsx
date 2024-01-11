"use client";

import Button from "@/components/Button/Button";
import Header from "@/components/Header/Header";
import { useEffect, useLayoutEffect } from "react";

export default function UseEffect() {
  useEffect(() => {
    console.log("usando useEffect async");
  }, []);

  useLayoutEffect(() => {
    console.log("usando useLayoutEffect sync");
  }, []);

  return (
    <>
      <Header>useEffect</Header>
      <div>
        <p>
          <b>useEffect: </b> Se ejecuta después de que la renderización se ha
          completado y no bloquea la pintura en pantalla. Es adecuado para
          operaciones que no necesitan ejecutarse de inmediato y pueden ocurrir
          de manera asíncrona.
        </p>
        <p>
          <b>useLayoutEffect: </b>
          Se ejecuta de manera síncrona después de todas las mutaciones del DOM.
          Es útil cuando necesitas realizar operaciones que afectarán al diseño
          antes de que el navegador repinte. Puede bloquear la interfaz de
          usuario, por lo que debes usarlo con precaución y solo cuando sea
          necesario.
        </p>
      </div>
    </>
  );
}
