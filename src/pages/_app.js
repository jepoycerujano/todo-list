import '@/styles/globals.css';
import Navbar from '../components/nav-bar';

export default function App({ Component, pageProps }) {
  return (
    <div className="col-span-12 flex flex-col overflow-hidden rounded-2xl bg-white shadow-custom-light dark:bg-dark-500 dark:shadow-custom-dark lg:col-span-9">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
