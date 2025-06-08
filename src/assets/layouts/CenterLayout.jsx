import React from 'react'

const CenterLayout = () => {
  return (
    <div class="center-wrapper">
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default CenterLayout