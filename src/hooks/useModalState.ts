import { useCallback, useEffect } from 'react';

/**
 * Custom hook for managing modal body overflow and state cleanup
 */
export const useModalState = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
};

/**
 * Custom hook for managing image gallery navigation
 */
export const useGalleryNavigation = (galleryCurrent: number | undefined, onNavigate: (index: number) => void) => {
  const handleNextImage = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (!galleryCurrent) return;
    onNavigate((galleryCurrent + 1) % (galleryCurrent));
  }, [galleryCurrent, onNavigate]);

  const handlePrevImage = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (!galleryCurrent) return;
    onNavigate((galleryCurrent - 1 + galleryCurrent) % (galleryCurrent));
  }, [galleryCurrent, onNavigate]);

  return { handleNextImage, handlePrevImage };
};
