import { createContext, useContext, useState, ReactNode } from 'react';

interface Customer {
  id: string;
  name: string;
  email: string;
  orderCount: number;
  status: 'active' | 'inactive' | 'pending';
}

interface AppContextType {
  selectedCustomer: Customer | null;
  setSelectedCustomer: (customer: Customer | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  return (
    <AppContext.Provider value={{ selectedCustomer, setSelectedCustomer }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
