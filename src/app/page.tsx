import { DealIcons } from "./components/icons";
import RootLayout from "./layout";


export default function Home() {
  return (
    <RootLayout>
      <div>
        <DealIcons icon="search" selected={false} />
      </div>
    </RootLayout>
  )
}
