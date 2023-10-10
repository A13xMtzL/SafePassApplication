// (c) URJC - Safe Pass 2023, rights reserved.

export default function Home() {
  return (
    <div>
      <h1 className="font-mono text-5xl text-slate-200">Safe Pass</h1>
      <div className="max-w-20rem overflow-hidden rounded-md bg-slate-600 shadow-md">
        <div className="bg-primary px-4 py-2 font-bold text-white">Header</div>
        <div className="px-4 py-2">
          <h4 className="mb-2 text-lg font-bold">Primary card title</h4>
          <p className="text-gray-700">
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </p>
        </div>
      </div>
    </div>
  )
}
