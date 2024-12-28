import './App.css'
import Message from './components/Message/Message'
import './css/tailwind.css'

function App() {

  return (
    <>
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 h-96 overflow-x-auto">
          
          <Message name={"Mateus Soares"} time={"15:10"} message={"Testando 123"}/>
          <Message name={"Kinzé"} time={"15:10"} message={"Testando 123"}/>
          <Message name={"Tonho"} time={"15:10"} message={"Testando 123"}/>
          <Message name={"Tonho"} time={"15:10"} message={"Testando 123"}/>
          <Message name={"Tonho"} time={"15:10"} message={"Testando 123"}/>
          <Message name={"Tonho"} time={"15:10"} message={"Testando 123"}/>
          <Message name={"Tonho"} time={"15:10"} message={"Testando 123"}/>
          <Message name={"Tonho"} time={"15:10"} message={"Testando 123"}/>
          <Message name={"Tonho"} time={"15:10"} message={"Testando 123"}/>
          <Message name={"Tonho"} time={"15:10"} message={"Testando 123"}/>
        
        </div>
        <form>   
            <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type a message" required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
            </div>
        </form>    
    </>
  )
}

export default App
