import './App.css';
import Navbar          from './components/Navbar';
import HeroBanner      from './components/HeroBanner';
import TopSelling      from './components/TopSelling';
import CustomerReviews from './components/CustomerReviews';
import O2Plants        from './components/O2Plants';
import Footer          from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <TopSelling />
        <CustomerReviews />
        <O2Plants />
      </main>
      <Footer />
    </>
  );
}
