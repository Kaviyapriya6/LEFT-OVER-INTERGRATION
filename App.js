import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage'; // Import SignUpPage
import ProfileSetupPage from './components/ProfileSetupPage'; 
import MainPage from './components/MainPage'; // Import MainPage
import ViewMorePage from './components/ViewMorePage'; // Import ViewMorePage
import GlobuseCenterPage from './components/GlobuseCenterPage'; // Import GlobuseCenterPage
import OrderDetailsPage from './components/OrderDetailsPage'; // Import OrderDetailsPage
import CheckoutPage from './components/CheckoutPage'; // Import CheckoutPage
import MapPage from './components/MapPage'; // Import MapPage
import CallingPage from './components/CallingPage'; // Import CallingPage
import ThankYouPage from './components/ThankYouPage'; // Import ThankYouPage
import OrderPage from './components/OrderPage'; // Import OrderPage
import ProfilePage from './components/ProfilePage'; // Import ProfilePage
import ComplaintPage from './components/ComplaintPage'; // Import ComplaintPage
import ChatPage from './components/ChatPage'; // Import ChatPage
import MotivationPage from './components/MotivationPage'; // Import MotivationPage
import PaymentPage from './components/PaymentPage'; // Import PaymentPage
import ProfileEditorPage from './components/ProfileEditorPage'; // Import ProfileEditorPage
// import FoodPostsPage from './components/FoodPostsPage'; // Import FoodPostsPage
import FoodPostsPage from './components/FoodPostsPage'; // Import FoodPostsPage
import ProfilePhotoUploadPage from './components/ProfilePhotoUploadPage'; // Import ProfilePhotoUploadPage
import ProfilePhotoConfirmationPage from './components/ProfilePhotoConfirmationPage'; // Import ProfilePhotoConfirmationPage
import LocationSetupPage from './components/LocationSetupPage'; // Import LocationSetupPage
import Map from './components/Map'; // Import MapPage
import CongratsPage from './components/CongratsPage'; // Import CongratsPage
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} /> {/* New route for SignUpPage */}
        <Route path="/profilesetup" element={<ProfileSetupPage />} /> {/* New route for ProfileSetupPage */}
        <Route path="/main" element={<MainPage />} /> {/* New route for MainPage */}
        <Route path="/viewmore" element={<ViewMorePage />} /> {/* New route for ViewMorePage */}
        <Route path="/globuse-center" element={<GlobuseCenterPage />} /> {/* New route for GlobuseCenterPage */}
        <Route path="/order-details" element={<OrderDetailsPage />} /> {/* New route for OrderDetailsPage */}
        <Route path="/checkout" element={<CheckoutPage />} /> {/* New route for CheckoutPage */}
        <Route path="/map" element={<MapPage />} /> {/* New route for MapPage */}
        <Route path="/calling" element={<CallingPage />} /> {/* New route for CallingPage */}
        <Route path="/thank-you" element={<ThankYouPage />} /> {/* New route for ThankYouPage */}
        <Route path="/order" element={<OrderPage />} /> {/* New route for OrderPage */}
        <Route path="/profile" element={<ProfilePage />} /> {/* New route for ProfilePage */}
        <Route path="/chat" element={<ChatPage />} /> {/* New route for ChatPage */}
        <Route path="/complaint" element={<ComplaintPage />} /> {/* New route for ComplaintPage */}
        <Route path="/payment" element={<PaymentPage />} /> {/* New route for PaymentPage */}
        <Route path="/motivation" element={<MotivationPage />} /> {/* New route for MotivationPage */}
        <Route path="/profile-editor" element={<ProfileEditorPage />} /> {/* New route for ProfileEditorPage */}
        <Route path="/food-posts" element={<FoodPostsPage />} /> {/* New route for FoodPostsPage */}
        <Route path="/food-posts" element={<FoodPostsPage />} /> {/* New route for FoodPostsPage */}
        <Route path="/profile-photo-upload" element={<ProfilePhotoUploadPage />} /> {/* New route for ProfilePhotoUploadPage */}
        <Route path="/profile-photo-confirmation" element={<ProfilePhotoConfirmationPage />} /> {/* New route for ProfilePhotoConfirmationPage */}
        <Route path="/location-setup" element={<LocationSetupPage />} /> {/* New route for LocationSetupPage */}
        <Route path="/map" element={<Map />} /> {/* New route for MapPage */}
        <Route path="/congrats" element={<CongratsPage />} /> {/* New route for CongratsPage */}
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/order-page" element={<OrderPage/>} />

      </Routes>
    </Router>
  );
};

export default App;
