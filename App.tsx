import { TailwindProvider } from 'tailwind-rn'
import Starter from './src/screens/Starter'
import utilities from './tailwind.json'

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <Starter />
    </TailwindProvider>
  )
}
