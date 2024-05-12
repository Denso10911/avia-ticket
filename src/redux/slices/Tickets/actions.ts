import { createAsyncThunk } from "@reduxjs/toolkit"

import { TicketSearchParamsT, TicketT } from "../../../types/tickets"
import { simulateTicketsRequest } from "../../../utilities/functions/simulateTicketsRequest"

export const getTickets = createAsyncThunk(
  `tickets/getTickets`,
  async (searchParams: TicketSearchParamsT, thunkAPI) => {
    return await simulateTicketsRequest(searchParams)
  },
)
