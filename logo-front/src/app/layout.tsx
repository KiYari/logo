import './globals.css'
import Header from "@/layout/header/Header";

const RootLayout = ({children}) => {
  return (<div>
      <Header/>
      <body>{children}</body>
      </div>)
}

export default  RootLayout;
