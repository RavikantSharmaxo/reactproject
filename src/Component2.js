import React from 'react'

const Component2 = () => {
  return (
    <div>
        <nav className="flex justify-center space-x-4">
  <a href="/dashboard" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-red-500 hover:text-slate-900">Home</a>
  <a href="/team" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Team</a>
  <a href="/projects" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</a>
  <a href="/reports" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Reports</a>
</nav>
    </div>
  )
}

export default Component2