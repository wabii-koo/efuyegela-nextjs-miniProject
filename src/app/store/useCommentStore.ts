
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Comment {
  name: string;
  email: string;
  comment: string;
}

interface CommentStore {
  comments: Comment[];
  addComment: (newComment: Comment) => void;
  clearComments: () => void;
}

export const useCommentStore = create<CommentStore>()(
  persist(
    (set) => ({
      comments: [],
      addComment: (newComment) =>
        set((state) => ({ comments: [...state.comments, newComment] })),
      clearComments: () => set({ comments: [] }),
    }),
    {
      name: 'comment-storage', 
    }
  )
);
