export interface IProducts {
  Products: IProduct[];
}

export interface IProduct {
  cost: number;
  description: string;
  id: number;
  name: string;
  profile: {
    type: string;
  };
  sku: string;
}
