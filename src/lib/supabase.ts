import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');

// Database types
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image_url?: string;
  author: string;
  category: string;
  tags: string[];
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface NewsUpdate {
  id: string;
  title: string;
  content: string;
  image_url?: string;
  author: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}