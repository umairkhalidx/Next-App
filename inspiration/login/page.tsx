'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthModal from '@/components/AuthModal';

export default function LoginPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F5] to-white flex items-center justify-center">
      <AuthModal 
        isOpen={showModal} 
        onClose={handleClose} 
        defaultTab="login" 
      />
    </div>
  );
}
