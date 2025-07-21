export interface PricingType {
  id: number;
  level: string;
  price: number;
  description: string;
  feature_title: string;
  feature_list: string[];
  color: { background: string; button: string; text: string };
}
