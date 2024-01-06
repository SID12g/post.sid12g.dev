import type { Metadata } from 'next';
import '../styles/globals.css';
import NavBar from '@/components/navbar/NavBar';
import Copyright from '@/components/Copyright';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: `sid12g's blog`,
  description: `Welcome to my blog.`,
  openGraph: {
    type: "website",
    url: "https://blog.sid12g.dev",
    title: "sid12g's blog",
    description: "Welcome to my blog.",
    siteName: "sid12g's blog",
    images: [{
      url: "https://blog.sid12g.dev/blog_image.png",
    }],
  }
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
        <NavBar mode={cookie} />
        {children}
        <Copyright />
      </body>
    </html>
  );
}
