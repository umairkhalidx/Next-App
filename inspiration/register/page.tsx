'use client';


import { Suspense, useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import AuthModal from '@/components/AuthModal';

export const dynamic = 'force-dynamic';

function RegisterContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const planId = searchParams.get('plan_id');
    const billingPeriod = searchParams.get('billing_period');

    if (planId) {
      localStorage.setItem('pending_plan_id', planId);
      if (billingPeriod) {
        localStorage.setItem('pending_billing_period', billingPeriod);
      }
    }

    const inviteToken = searchParams.get('invite_token');
    if (inviteToken) {
      localStorage.setItem('pending_invite_token', inviteToken);
    }
  }, [searchParams]);

  const handleClose = () => {
    setShowModal(false);
    router.push('/');
  };

  return (
    <AuthModal
      isOpen={showModal}
      onClose={handleClose}
      defaultTab="signup"
    />
  );
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F5] to-white flex items-center justify-center">
      <Suspense fallback={<div className="animate-pulse">Loading...</div>}>
        <RegisterContent />
      </Suspense>

    </div>
  );
}
