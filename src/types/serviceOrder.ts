export type ServiceOrderStatus = 'open' | 'in_progress' | 'done';

export interface ServiceOrder {
    id: number;
    client_id: number;
    device: string;
    issue: string;
    status: ServiceOrderStatus;
    created_at: string;
}

export interface NewServiceOrder {
  clientId: number;
  device: string;
  issue: string;
  status: ServiceOrderStatus;
}