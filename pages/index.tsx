import Header from '@/components/Header';
import Dashboard from './Dashboard';

export default function Home() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Header />
      <Dashboard />
    </div>
  );
}