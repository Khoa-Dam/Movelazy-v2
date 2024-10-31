import { Outlet } from 'react-router-dom'
import { SolNavbar } from './components/SolNavbar'

const SolPage = () => {
  return (
    <div className="min-h-screen bg-[#0e0f0e]">
      <SolNavbar />
      <main className="p-0">
        <Outlet />
      </main>
    </div>
  )
}

export default SolPage