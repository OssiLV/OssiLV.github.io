import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface AvatarComponentProps {
    src: string,
    alt?: string,
    fallbackText?: string
}
export const AvatarComponent = ({ src, alt, fallbackText }:AvatarComponentProps) => {
  return (
    <Avatar className='w-36 h-36 md:w-44 md:h-44'>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallbackText}</AvatarFallback>
    </Avatar>
  );
};