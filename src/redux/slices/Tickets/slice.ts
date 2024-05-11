import { createSlice } from "@reduxjs/toolkit"
import { getTickets } from "./actions"
import { TicketT } from "../../../types/tickets"

interface TicketsState {
  tickets: TicketT[]
  loading: boolean
}

const initialState: TicketsState = {
  tickets: [],
  loading: false,
}

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTickets.pending, state => {
        state.loading = true
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.tickets = action.payload
        state.loading = false
      })
      .addCase(getTickets.rejected, (state, action) => {
        state.loading = false
      })
  },
})

export default ticketsSlice.reducer
