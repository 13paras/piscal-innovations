import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clients from "./pages/Clients";
import ContactUs from "./pages/ContactUs";
import TermsNCondition from "./pages/TermsNCondition";
import RefundPoilicy from "./pages/RefundPoilicy";
import ITConsultingServices from "./pages/ITConsultingServices";
import StaffRecruit from "./pages/StaffRecruit";
import StaffAugmentation from "./pages/StaffAugmentation";
import DigitalMarketing from "./pages/DigitalMarketing";
import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/consultingServices' element={<ITConsultingServices />} />
          <Route path='/staffRecruit' element={<StaffRecruit />} />
          <Route path='/staffAugmentation' element={<StaffAugmentation />} />
          <Route path='/digitalMarketing' element={<DigitalMarketing />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/termsNCondition' element={<TermsNCondition />} />
          <Route path='/refund' element={<RefundPoilicy />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
