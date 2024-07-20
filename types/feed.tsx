export interface Feed {
  id: string;
  title: string;
  content: string | null;
  published: boolean;
  authorId: string | null;
  author: { name: string | null } | null;
}
