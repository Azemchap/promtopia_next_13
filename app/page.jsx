
import Hero from "@components/Hero"
import Incentives from '@components/Incentives'
import Blog from '@components/Blog'
import FAQs from '@components/FAQs'
import Footer from '../components/Footer'


const App = () => (
  <section className='flex-center flex-col'>
    <Hero />
    <Blog />
    <Incentives />
    <FAQs />
    <Footer />
  </section>
)

export default App
