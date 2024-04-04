import Hero from '@/components/home/Hero'
import HomeFaq from '@/components/home/HomeFaq'
import HomePricing from '@/components/home/HomePricing'
import ExamsOverview from '@/components/home/ExamsOverview'
import Testomonials from '@/components/home/Testomonials'
import FeaturesOverview from '@/components/home/FeaturesOverview'
import WhyFgw from '@/components/home/WhyFgw'
import CallToAction from '@/components/CallToAction'
function Home() {
  return (
    <>
      <Hero />
      <FeaturesOverview />
      <WhyFgw />
      <HomePricing />
      <ExamsOverview />
      <HomeFaq />
      <Testomonials />
      <CallToAction />
    </>
  )
}

export default Home
