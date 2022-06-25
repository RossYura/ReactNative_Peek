import axios from 'axios';

const api = axios.create({
  baseURL: 'https://Peek-backend.vercel.app/api',
});

export type FAQNode = {
  title: string;
  body: string;
};

export type FAQTopic = FAQNode & {icon: string};

export type FAQ = {
  nodes: FAQNode[];
  topics: FAQTopic[];
};

export const getFAQ = () => api.get<FAQ>('/faq').then((res) => res.data);
