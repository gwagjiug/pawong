import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import Login from '../pages/Auth/Login/Login';
import Menu from '../pages/Menu';
import Notice from '../pages/Notice/Notice';
import CareDiary from '../pages/CareDiary/CareDiary';
import Donation from '../pages/Donation/Donation';
import DonationItemDetail from '../pages/Donation/DonationItemDetail';
import CommonSense from '../pages/Notice/CommonSense';
import Register from '../pages/Auth/Register/Register';
import DonationHistory from '../pages/History/DonationHistory';
import Delivery from '../pages/Delivery/Delivery';
import Payment from '../pages/Payment/Payment';
import PaymentFinish from '../pages/Payment/PaymentFinish';
import FosterHistory from '../pages/History/FosterHistory';
import Main from '../pages/Main';
import PersonalDiary from '../pages/CareDiary/PersonalDiary';

const routes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/notice',
    element: <Notice />,
  },
  {
    path: '/donation',
    element: <Donation />,
  },
  {
    path: '/donation_item',
    element: <DonationItemDetail />,
  },
  {
    path: '/common-sense',
    element: <CommonSense />,
  },
  { path: '/diary', element: <CareDiary /> },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/donation-history',
    element: <DonationHistory />,
  },
  {
    path: '/foster-history',
    element: <FosterHistory />,
  },
  {
    path: '/delivery',
    element: <Delivery />,
  },
  {
    path: '/payment',
    element: <Payment />,
  },
  {
    path: '/payment_finish',
    element: <PaymentFinish />,
  },
  {
    path: '/personal-diary',
    element: <PersonalDiary />,
  },
];

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: routes,
  },
]);

export default router;
