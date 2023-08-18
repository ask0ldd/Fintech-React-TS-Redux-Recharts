import { render, screen, renderHook, act, waitFor } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import { expect, vi, describe, test, beforeAll, beforeEach } from 'vitest'
import InboxTable from '../../components/messaging/InboxTable'
import Messaging from '../../pages/Messaging'
import { Provider } from 'react-redux'
import store from '../../redux/store'

const MockedRouter = () => { 
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Messaging/>
            </BrowserRouter>
        </Provider>
    )
}

describe('Given I am facing the inbox table', async () => { 

    beforeEach(() => {
        render(<MockedRouter/>) 
    })

    test('All the table headers should be in the doc', async () => {
        await waitFor(() => expect(screen.getByText('From')).toBeInTheDocument())
        expect(screen.getByText('Title')).toBeInTheDocument()
        expect(screen.getByText('Date')).toBeInTheDocument()
    })

    test('All the messages from the first page should be sorted by descending dates', async () => { 
        await waitFor(() => expect(screen.getByText('Jessy Trewartha')).toBeInTheDocument())
        const inboxbody = screen.getByTestId("inboxbody")
        const allTr = screen.getByTestId("inboxbody").children
        for(let i=0; i<14; i++)
        {
            const currentRowDate = allTr.item(i)?.children.item(4)?.innerHTML
            const nextRowDate = allTr.item(i+1)?.children.item(4)?.innerHTML
            if(currentRowDate != null && nextRowDate != null) expect(dateToTime(currentRowDate) - dateToTime(nextRowDate)).toBeGreaterThanOrEqual(0)
        }
    })

})

function dateToTime(date : string){
    const [month, day, year] = date.split('-')
    return new Date(parseInt(year), parseInt(month), parseInt(day)).getTime()
}
