import { render, screen, renderHook, act, waitFor } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import { expect, vi, describe, test, beforeAll, beforeEach } from 'vitest'
import InboxTable from '../../components/Messaging/InboxTable'
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

    test('The Inbox Menu should be displayed', async () => {
        await waitFor(() => expect(screen.getByText('From')).toBeInTheDocument())
        const allInboxPageButtons = screen.getAllByRole("button")
        const inboxMenuButton = allInboxPageButtons.filter(button => button.parentElement?.classList.contains("vinboxMenu__container"))
        expect(inboxMenuButton.length).toBe(4)
    })

    

})