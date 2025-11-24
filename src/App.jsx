

function App() {
  


  return (
    <div className="grid grid-cols-5 h-screen text-center">
      <div className="col-span-1 bg-zinc-800 ">
hello
      </div>
      <div className="col-span-4 p-10">
        <div className="container h-110 ">
          <div className="text-white"></div>

        </div>
        <div className="bg-zinc-800 w-1/2  p-1 pr-5 text-white m-auto rounded-4xl border border-zinc-700 flex h-16">
          <input type="text"   placeholder="ask me anything" className="w-full h-full p-3 outline-none" />
          <button >ask</button>
        </div>

      </div>
    </div>
          )
}

export default App
