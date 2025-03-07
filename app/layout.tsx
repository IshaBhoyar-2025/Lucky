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
        <footer><p>.. Design by &copy; Isha 2025..</p></footer>
      </body>
    </html>
  )
}