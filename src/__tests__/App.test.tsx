import { render, screen, renderHook, act, waitFor } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import App from "../App"
import { expect, vi, describe, test, beforeAll, beforeEach } from 'vitest'
// import matchers from '@testing-library/jest-dom/matchers'

const MockedRouter = () => { 
    return(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
}

describe('Given I am on the Landing page', async () => {

    // to get around JSDom not handling the Dialog Element properly
    beforeAll(() => {
        HTMLDialogElement.prototype.show = vi.fn()
        HTMLDialogElement.prototype.showModal = vi.fn()
        HTMLDialogElement.prototype.close = vi.fn()
    })

    beforeEach(() => {
        // window.onload = vi.fn((e) => window.onload)
        vi.spyOn(window, 'setTimeout')
        render(<MockedRouter />)
        
    })

    test('All main container components should be displayed', async () => {
  
        await waitFor( () => expect(screen.getByText(/Balance/i)).toBeInTheDocument())
        expect(screen.getByText(/Credit Cards/i)).toBeInTheDocument()
        expect(screen.getByText(/Quick Wire Transfer/i)).toBeInTheDocument()
        expect(screen.getByText(/Cryptos/i)).toBeInTheDocument()
        expect(screen.getByText(/Recurring Debits/i)).toBeInTheDocument()
        expect(screen.getByText(/Last Transactions/i)).toBeInTheDocument()
        expect(screen.getByText(/Montana/i)).toBeInTheDocument()
    })

    test('The vertical menu should be displayed w/ all its items', async () => {
        await waitFor( () => expect(screen.getByAltText("home menu item")).toBeInTheDocument())
        expect(screen.getByAltText("stats menu item")).toBeInTheDocument()
        expect(screen.getByAltText("chat menu item")).toBeInTheDocument()
        expect(screen.getByAltText("settings menu item")).toBeInTheDocument()
        expect(screen.getByAltText("accounts menu item")).toBeInTheDocument()
        expect(screen.getByAltText("dark mode menu item")).toBeInTheDocument()
    })

    test('4 Contacts should be displayed in Quick Wire Transfer Contacts List', async() => {
        await waitFor(() => expect(screen.getAllByTestId("transferQuickContact").length).toBe(4))
        expect(screen.getAllByTestId("transferBlankContact").length).toBe(1)
    })

    test('Clicking the button next to the QWT Contacts List should open a modal', async() => {
        await waitFor(() => expect(screen.getByText(/Quick Wire Transfer/i)).toBeInTheDocument())
        expect(screen.queryByTestId("modal")).not.toBeInTheDocument() // !!! querybytestid or it will throw an error
        const addContactButton = screen.getAllByRole("button").filter(button => button.classList.contains("xButton"))[0]
        
        act(() => addContactButton.click())
        await waitFor(() => expect(screen.getByTestId("modal")).toBeInTheDocument())

        test('The modal should display 4 unselected contacts and 4 selected ones', async() => {
            const modal = screen.queryByTestId("modal")
            expect(modal?.querySelectorAll("button.greenButton").length).toBe(4)
            expect(modal?.querySelectorAll("button.violetButton").length).toBe(4)
            expect(screen.getByText(/4 contacts selected/i)).toBeInTheDocument()
        })
    })

    test('Clicking the button next to the QWT Amount should open a modal', async() => {
        await waitFor(() => expect(screen.getByText(/Quick Wire Transfer/i)).toBeInTheDocument())
        expect(screen.queryByTestId("modal")).not.toBeInTheDocument() // !!! querybytestid or it will throw an error
        const addContactButton = screen.getAllByRole("button").filter(button => button.classList.contains("vButton"))[0]
        
        act(() => addContactButton.click())
        await waitFor(() => expect(screen.getByTestId("modal")).toBeInTheDocument())

        test('The modal should display a transfer confirmation', async() => {
            expect(screen.getByText(/Transfer Confirmation/i)).toBeInTheDocument()
        })

        test('the modal should close itself when the "confirm this transfer" button is clicked', async () => {
            const confirmationButton = screen.getByText(/Confirm This Transfer/i)
            act(() => confirmationButton.click())
            await waitFor(() => expect(screen.getByTestId("modal")).not.toBeInTheDocument())
        })
    })

    test('onload has been called', async() => {
        window.dispatchEvent(new Event('load'))
        await waitFor(() => expect(window.setTimeout).toHaveBeenCalled())
        // !!! onload not covered
    })

})

// https://dev.to/mbarzeev/from-jest-to-vitest-migration-and-benchmark-23pl