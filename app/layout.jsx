import "@styles/globals.css"

import Nav from "@components/Nav"
import Provider from "@components/Provider"

export const metadata = {
  title: "NWRFHP PIG",
  description: "North West Regional Fund For Health Promotion",
}

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <Nav />
        <main className='app'>
          {children}
        </main>
      </Provider>
    </body>
  </html>
)

export default RootLayout
