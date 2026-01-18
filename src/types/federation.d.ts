// Type declarations for remote modules

declare module 'account_app/AccountProfile' {
  import { ComponentType } from 'react';
  const AccountProfile: ComponentType;
  export default AccountProfile;
}

declare module 'account_app/useAccountService' {
  interface Account {
    id: string;
    name: string;
    email: string;
    balance: number;
  }

  interface UseAccountServiceReturn {
    account: Account | null;
    loading: boolean;
    error: string | null;
  }

  const useAccountService: () => UseAccountServiceReturn;
  export default useAccountService;
}

declare module 'customer_app/CustomerDashboard' {
  import { ComponentType } from 'react';
  const CustomerDashboard: ComponentType;
  export default CustomerDashboard;
}

declare module 'customer_app/useCustomerApi' {
  interface Customer {
    id: string;
    name: string;
    email: string;
    orderCount: number;
    status: 'active' | 'inactive' | 'pending';
  }

  interface UseCustomerApiReturn {
    customers: Customer[];
    loading: boolean;
    error: string | null;
    refreshCustomers: () => void;
  }

  const useCustomerApi: () => UseCustomerApiReturn;
  export default useCustomerApi;
}
