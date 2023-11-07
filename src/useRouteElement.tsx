/* eslint-disable react-refresh/only-export-components */
//customize the router using useRoute hook
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import SalaryList from './pages/SalaryList'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout'
import { useContext } from 'react'
import { AppConxtext } from './contexts/app.context'
import MainLayout from './layouts/MainLayout'
import path from './constants/path'
import Schedule from './pages/Schedule/Schedule'
import CourseDetail from './pages/CourseDetail/CourseDetail'
import UserLayout from './pages/User/Layouts/UserLayout'
import Profile from './pages/User/pages/Profile'
import ChangePassword from './pages/User/pages/ChangePassword'
import ClassList from './pages/ClassList'
import Attendance from './pages/CourseDetail/Attendance'

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppConxtext)
  // console.log(isAuthenticated)
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}
function RejectedRoute() {
  const { isAuthenticated } = useContext(AppConxtext)
  return !isAuthenticated ? <Outlet /> : <Navigate to='/home' />
}
export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <RejectedRoute />,
      children: [
        {
          path: path.login,
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: path.register,
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: path.salary,

          element: (
            <MainLayout>
              <SalaryList />
            </MainLayout>
          )
        },
        {
          path: path.home,
          index: true,
          element: (
            <MainLayout>
              <Schedule />
            </MainLayout>
          )
        },
        {
          path: path.user,
          element: (
            <MainLayout>
              <UserLayout />
            </MainLayout>
          ),
          children: [
            {
              path: path.profile,
              element: <Profile />
            },
            {
              path: path.changePassword,
              element: <ChangePassword />
            }
          ]
        },
        {
          path: path.courseDetail,
          element: (
            <MainLayout>
              <CourseDetail />
            </MainLayout>
          )
        },
        {
          path: path.attendance,
          element: (
            <MainLayout>
              <Attendance />
            </MainLayout>
          )
        },
        {
          path: path.classList,
          element: (
            <MainLayout>
              <ClassList />
            </MainLayout>
          )
        },
        {
          path: '/classlist',
          element: (
            <MainLayout>
              <ClassList/>
            </MainLayout>
          )
        }
      ]
    }
  ])
  return routeElements
}
