import type { Metadata } from 'next';
import '../styles/globals.css';
import NavBar from '@/components/navbar/NavBar';
import Copyright from '@/components/Copyright';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: `sid12g's blog`,
  description: `sid12g's blog`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let cookie: any
  cookie = cookies().get('mode')

  return (
    <html lang="kr">
      <body
        style={
          cookie && cookie.value === 'dark'
            ? { backgroundColor: '#1d1d1d', color: 'white' }
            : { backgroundColor: 'white' }
        }
      >
        <NavBar />
        {children}       
        <Copyright />
      </body>
    </html>
  );
}
