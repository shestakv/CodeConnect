import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '@/shared/hooks/reduxHooks';
import { refreshAccessToken } from '@/entities/user';
import { FooterComponent } from '@/widgets/Footer';
import { NavBar } from '@/widgets/NavBar';

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshAccessToken());
  }, [dispatch]);

  return (
    <>

      <NavBar />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </>
  );
};

export default Layout;
