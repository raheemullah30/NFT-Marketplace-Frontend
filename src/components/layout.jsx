import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
function layout({children}) {
        return (
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow bg-gray-900">{children}</main>
            <Footer />
          </div>
        );
      }
export default layout
