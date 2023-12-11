import AuthLayout from './_auth/AuthLayout';
import SigninForm from './_auth/Forms/SigninForm'
import SignupForm from './_auth/Forms/SignupForm'
import RootLayout from './_root/RootLayout';
import { AllUsers, CreatePost, EditPost, Explore, Home, PostDetails, Profile, Saved, UpdateProfile } from './_root/pages';
import './globals.css';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';


export default function App() {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public Routes */}

        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SigninForm />} />
          <Route path='/sign-up' element={<SignupForm />} />
        </Route>

        {/* Private Routes */}

        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
}

