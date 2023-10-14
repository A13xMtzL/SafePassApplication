// (c) URJC - Safe Pass 2023, rights reserved.

export default function Home() {
  return (
    <div>
      <h1 className="font-mono text-5xl text-slate-200 pb-2">Safe Pass</h1>
      <div className="max-w-20rem overflow-hidden rounded-md bg-sky-950 shadow-md">
        <div className="px-4 py-2">
          <h4 className="mb-2 text-lg font-bold text-slate-200">El primer paso hacia una mayor seguridad</h4>
          <p className="text-slate-200">
            SafePass es un gestor de contraseñas que no solo te permite guardar tus credenciales, sino que también
            puedes comprobar si tu contraseña ha sido filtrada, validar si una contraseña es segura
            y generar contraseñas seguras de una manera fácil y rápida.
          </p>
        </div>
      </div>
    </div>
  )
}
