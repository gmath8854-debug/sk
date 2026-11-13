import React, { createContext, useContext, useState, useEffect } from 'react';

const GiftListContext = createContext();

export const GiftListProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('saikumar_gift_list');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('saikumar_gift_list', JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save gift list to localStorage', e);
    }
  }, [items]);

  const addItem = (item) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id && i.occasion === item.occasion);
      if (existing) {
        return prev.map((i) =>
          i === existing ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }];
    });
    // Do NOT automatically open drawer on add - let the flying cart animation play cleanly
  };

  const removeItem = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, delta) => {
    setItems((prev) =>
      prev
        .map((item, i) => {
          if (i === index) {
            const newQty = (item.quantity || 1) + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearList = () => setItems([]);

  const totalCount = items.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <GiftListContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearList,
        totalCount,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </GiftListContext.Provider>
  );
};

export const useGiftList = () => {
  const context = useContext(GiftListContext);
  if (!context) {
    throw new Error('useGiftList must be used within a GiftListProvider');
  }
  return context;
};

