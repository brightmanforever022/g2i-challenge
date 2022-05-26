import React from 'react';
import Header from './Header';

import '../../App.css';

interface ILayoutProps {
  children: JSX.Element
}
const PageLayout: React.FC<ILayoutProps> = ({
  children
}: ILayoutProps) => {
  return (
    <div className='container'>
      <Header />
      {children}
    </div>
  )
};

export default PageLayout;
