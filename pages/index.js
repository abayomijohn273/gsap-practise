import Head from 'next/head'
import Awards from '../components/Awards'
import Concepts from '../components/Concepts'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Office from '../components/Office'
import Publications from '../components/Publications'
import SwiperSlider from '../components/SwiperSlider'
import WhoWeAre from '../components/WhoWeAre'

export default function Home() {
    return (
        <div className='text-[#e7e7e7] uppercase'>
            <Header />
            <SwiperSlider />
            <WhoWeAre />
            <Concepts />
            <Publications />
            <Awards />
            <Office />
            <Footer />
        </div>
    )
}
