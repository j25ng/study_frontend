import { create } from "zustand";

export const userStore = create((set) => ({
  user: null,
  initUser: (data) => set(() => ({ user: data })),
  clearUser: () => set(() => ({ user: null })),
}));

export const todoStore = create((set) => ({
  todo: [],
  initTodo: (data) => set(() => ({ todo: data })),
  clearTodo: () => set(() => ({ todo: [] })),
}));
