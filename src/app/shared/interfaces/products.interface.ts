

export interface IProduct {
  cost: number;
  description: string;
  id: number;
  name: string;
  profile: {
    type: string;
    available: boolean;
    backlog: number
  };
  sku: string;
}
