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
