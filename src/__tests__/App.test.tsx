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
        HTMLDialogElement.prototype.show = vi.fn();
        HTMLDialogElement.prototype.showModal = vi.fn();
        HTMLDialogElement.prototype.close = vi.fn();
    })

    beforeEach(() => {
        let window = {onload: vi.fn()}
        render(<MockedRouter />)
    })

    test('All main container components are displayed', async () => {
  
        await waitFor( () => expect(screen.getByText(/Balance/i)).toBeInTheDocument())
        expect(screen.getByText(/Credit Cards/i)).toBeInTheDocument()
        expect(screen.getByText(/Quick Wire Transfer/i)).toBeInTheDocument()
        expect(screen.getByText(/Cryptos/i)).toBeInTheDocument()
        expect(screen.getByText(/Recurring Debits/i)).toBeInTheDocument()
        expect(screen.getByText(/Last Transactions/i)).toBeInTheDocument()
        expect(screen.getByText(/Montana/i)).toBeInTheDocument()
    })

    test('The vertical menu is displayed w/ all its items', async () => {
        await waitFor( () => expect(screen.getByAltText("home menu item")).toBeInTheDocument())
        expect(screen.getByAltText("stats menu item")).toBeInTheDocument()
        expect(screen.getByAltText("chat menu item")).toBeInTheDocument()
        expect(screen.getByAltText("settings menu item")).toBeInTheDocument()
        expect(screen.getByAltText("accounts menu item")).toBeInTheDocument()
        expect(screen.getByAltText("dark mode menu item")).toBeInTheDocument()
    })

    test('4 Contacts are displayed in Quick Wire Transfer Contacts List', async() => {
        await waitFor(() => expect(screen.getAllByTestId("transferQuickContact").length).toBe(4))
        expect(screen.getAllByTestId("transferBlankContact").length).toBe(1)
    })

    test('Clicking the button next to the QWT Contacts List, displays a modal', async() => {
        await waitFor(() => expect(screen.getByText(/Quick Wire Transfer/i)).toBeInTheDocument())
        expect(screen.queryByTestId("modal")).not.toBeInTheDocument() // !!! querybytestid or it will throw an error
        const addContactButton = screen.getAllByRole("button").filter(button => button.classList.contains("xButton"))[0]
        addContactButton.click()
        await waitFor(() => expect(screen.getByTestId("modal")).toBeInTheDocument())
    })
})

// https://dev.to/mbarzeev/from-jest-to-vitest-migration-and-benchmark-23pl