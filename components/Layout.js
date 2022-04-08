import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const SideBar = dynamic(() => import('./SideBar'))
const StudentSideBar = dynamic(() => import('./StudentSideBar'))
const Navbar = dynamic(() => import('./Navbar'))
const ProfileRightSidebar = dynamic(() => import('./ProfileRightSidebar'))
const SettingRightSideBar = dynamic(() => import('./SettingRightSideBar'))
const StudentSettingRightSideBar = dynamic(() => import('./StudentSettingRightSideBar'))

function Layout({ children }) {
  const { route } = useRouter();

  return (
    <div>
      <Navbar />
      <div
        className={`flex ${route.split('/')[1] === 'tutorDashboard' && 'flex-col-reverse  bg-[#FFF2E3] lg:flex-row'} ${route.split('/')[1] === 'studentDashboard' && 'flex-col-reverse  bg-[#FFF2E3] lg:flex-row'}`}>
        {/* for tutorDashboard */}
        {route.split('/')[1] === 'tutorDashboard' && <SideBar />}

        {/* for studentDashboard */}
        {route.split('/')[1] === 'studentDashboard' && <StudentSideBar />}
        <main className="w-full flex-grow-0 overflow-x-auto">{children}</main>
        {/* for tutor */}
        {(route.split('/')[1] === 'tutorDashboard' && route.split('/')[2] === 'myprofile') ? (
          <ProfileRightSidebar />
        ) : (route.split('/')[1] === 'tutorDashboard' && route.split('/')[2] === 'settings') ? (
          <SettingRightSideBar />
        ) : null}

        {/* for student */}
        {(route.split('/')[1] === 'studentDashboard' && route.split('/')[2] === 'settings') ? (
          <StudentSettingRightSideBar />
        ) : null}
      </div>
    </div>
  )
}

export default Layout

// import dynamic from 'next/dynamic'
// const Navbar = dynamic(() => import('./Navbar'))
// import { useRouter } from 'next/router'
// function Layout({ children }) {
//   const loc = useRouter()
//   return (
//     <>
//       <div>
//         {(loc.pathname === '/about' || loc.pathname === '/description') && (
//           <Navbar />
//         )}
//         {children}
//       </div>
//     </>
//   )
// }

// export default Layout