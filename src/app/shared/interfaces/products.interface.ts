export interface IProduct {
  cost: number;
  description: string;
  id: number;
  name: string;
  profile: {
    type: string;
    available: boolean;
    backlog: number;
    customProperties?: { key: string; value: string }[]; // Add this line
  };
  sku: string;
}