'use client';

import { useFormStatus } from 'react-dom';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

type DeleteBookingButtonProps = {
  clientName: string;
};

export function DeleteBookingButton({ clientName }: DeleteBookingButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="outline"
      size="sm"
      className="h-9 rounded-md border-red-200 bg-white text-red-700 hover:bg-red-50 hover:text-red-800"
      disabled={pending}
      onClick={(event) => {
        if (!window.confirm(`Delete the booking for ${clientName}? This cannot be undone.`)) {
          event.preventDefault();
        }
      }}
    >
      <Trash2 className="h-4 w-4" />
      {pending ? 'Deleting' : 'Delete'}
    </Button>
  );
}
