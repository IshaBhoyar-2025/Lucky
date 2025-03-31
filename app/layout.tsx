import './style.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        {children}
        <footer>
          <p>.. Design by &copy; <a href="https://portfolio-isha-pi.vercel.app/" target="_blank" rel="noopener noreferrer">Isha Bhoyar 2025</a> ..</p>
        </footer>

      </body>
    </html>
  )
}