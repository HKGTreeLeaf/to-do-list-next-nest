import axios from 'axios'
import { create } from 'zustand'

interface toDoListState {
    toDoList: Array<any> | null
    fetchToDoList: () => void
    addItemToDoList: (title: string) => void
    updateItemToDoList: (itemId: string, title: string, status: string) => void
}

const apiHost = process.env.API_HOST || "http://localhost:3010"


export const useToDoListStore = create<toDoListState>((set) => ({
    toDoList: null,
    fetchToDoList: async () => {
        const data = await axios.get(`${apiHost}/api/toDoList`).then((response) => {
            return response.data
        }).catch((error) => { return [] })
        set({ toDoList: data as Array<toDoListState> })
    },
    addItemToDoList: async (title) => {
        const data = await axios.post(`${apiHost}/api/toDoList`, { title }).then((response) => {
            return response.data
        }).catch((error) => { return [] })
        set({ toDoList: data as Array<toDoListState> })
    },
    updateItemToDoList: async (itemId: string, itemName: string, status: string) => {
        const data = await axios.patch(`${apiHost}/api/toDoList`, {
            itemId: itemId,
            itemName: itemName,
            itemStatus: status
        }).then((response) => {
            return response.data
        }).catch((error) => { return [] })
        set({ toDoList: data as Array<toDoListState> })
    }
}))