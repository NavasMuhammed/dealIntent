import RootLayout from "./layout";
import HomeLayout from "./layouts/homeLayout";
import "./globals.scss"

export default function Home() {
  return (
    <RootLayout>
      <HomeLayout>
        {/* <div className="test">hi</div> */}
      </HomeLayout>
    </RootLayout>
  )
}
