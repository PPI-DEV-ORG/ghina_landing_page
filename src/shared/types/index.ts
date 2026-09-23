export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: "office" | "babycam" | "smartbox" | string;
  subCategory?: "home_office" | "security_office";
  badge?: string;
  channels: string;
  price: string;
  priceNumber: number;
  image: string;
  description: string;
  includes: string[];
  footerNote: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  iconName: string;
}

export interface SearchResultItem {
  id: string;
  type: "blog" | "product";
  title: string;
  subtitle: string;
  url: string;
  badge?: string;
}
