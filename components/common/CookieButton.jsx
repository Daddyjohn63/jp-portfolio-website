'use client';
import { Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { CookieModal } from './CookieModal';

export const CookieButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Button
        variant="outline"
        onClick={handleClick}
        className="fixed bottom-4 right-4 md:right-auto md:left-4 z-50 border-none cursor-pointer bg-transparent hover:bg-transparent p-0 group"
      >
        <Cookie className="!w-8 !h-8 text-[#ffe4c4] group-hover:text-[#d5c8b8]" />
      </Button>
      <CookieModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};
