// import '@/styles/globals.css';
import theme from '@/styles/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: '500',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'XML Creator',
  description: 'Generated by Peixola',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <body className={poppins.className}>
          <AppRouterCacheProvider>
            <main className='flex min-h-screen flex-col items-center justify-between p-24'>
              {children}
            </main>
          </AppRouterCacheProvider>
        </body>
      </ThemeProvider>
    </html>
  )
}
