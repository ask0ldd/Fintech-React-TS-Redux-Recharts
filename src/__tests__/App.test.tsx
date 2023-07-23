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

        await waitFor( () => expect(screen.getByTestId("stats-menuItem")).toBeInTheDocument())
        expect(screen.getByTestId("accounts-menuItem")).toBeInTheDocument()
        expect(screen.getByTestId("chat-menuItem")).toBeInTheDocument()
        expect(screen.getByTestId("settings-menuItem")).toBeInTheDocument()
        expect(screen.getByTestId("mode-menuItem")).toBeInTheDocument()
    })
})

// https://dev.to/mbarzeev/from-jest-to-vitest-migration-and-benchmark-23pl