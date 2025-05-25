'use client'

import '../styles/globals.css';
import '../styles/index.scss';
import store from '@/redux/store';
import { Provider } from 'react-redux';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <link rel="icon" type="image/x-icon" href="https://res.cloudinary.com/dbz6ebekj/image/upload/v1748167291/H_O_R_U_S_pn2q1y.png"/>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700;800;900&family=Satisfy&family=Poppins:wght@300;400;500;600;700&family=Schoolbell&display=swap"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
