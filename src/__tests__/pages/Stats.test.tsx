import { render, screen, renderHook, act, waitFor } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import { expect, vi, describe, test, beforeAll, beforeEach } from 'vitest'
import Stats from '../../pages/Stats'
// import matchers from '@testing-library/jest-dom/matchers'

const MockedRouter = () => { 
    return(
        <BrowserRouter>
            <Stats/>
        </BrowserRouter>
    )
}

describe('Given I am on the Stats page', async () => {

    // to get around JSDom not handling the Dialog Element properly
    beforeAll(() => {
        HTMLDialogElement.prototype.show = vi.fn()
        HTMLDialogElement.prototype.showModal = vi.fn()
        HTMLDialogElement.prototype.close = vi.fn()

        vi.mock('recharts', async () => {
            const OriginalModule : any  = await vi.importActual('recharts')
            return {
                ...OriginalModule,
                ResponsiveContainer: ({ children } : {children : any}) => (
                    <OriginalModule.ResponsiveContainer width={800} height={800}>
                        {children}
                    </OriginalModule.ResponsiveContainer>
                ),
            }
        })

        window.ResizeObserver = vi.fn().mockImplementation(() => ({
            observe: vi.fn(),
            unobserve: vi.fn(),
            disconnect: vi.fn(),
        }))
    })

    beforeEach(() => {
        render(<MockedRouter />)
    })

    test('An horizontal menu, composed of 5 buttons, should be displayed', async ()=> {
        await waitFor( () => expect(screen.getByText(/Misc/i)).toBeInTheDocument())
        expect(screen.getAllByLabelText("secondary").length).toBe(1)
        expect(screen.getByLabelText("secondary").querySelectorAll(".statsMenu__items").length).toBe(5)
        expect(screen.getByText(/In & Out/i)).toBeInTheDocument()
    })

})

describe('Given I am on the Stats page', async () => {

    // to get around JSDom not handling the Dialog Element properly
    beforeAll(() => {
        HTMLDialogElement.prototype.show = vi.fn()
        HTMLDialogElement.prototype.showModal = vi.fn()
        HTMLDialogElement.prototype.close = vi.fn()

        vi.mock('recharts', async () => {
            const OriginalModule : any  = await vi.importActual('recharts')
            return {
                ...OriginalModule,
                ResponsiveContainer: ({ children } : {children : any}) => (
                    <OriginalModule.ResponsiveContainer width={800} height={800}>
                        {children}
                    </OriginalModule.ResponsiveContainer>
                ),
            }
        })

        window.ResizeObserver = vi.fn().mockImplementation(() => ({
            observe: vi.fn(),
            unobserve: vi.fn(),
            disconnect: vi.fn(),
        }))
    })

    test('Clicking on income should display the related graph', async ()=> {
        vi.mock('react-router', () => ({
            ...vi.importActual('react-router'),
            useParams: jest.fn(() => "income"),
        }))

        render(<MockedRouter />)

        await waitFor(() => expect(screen.getByText(/Monthly Income/i)).toBeInTheDocument())
        
    })
})

/*
<nav className="statsMenu__container" aria-label='secondary'>
    <Link role="button" to="/stats/income" className={activeGraph === "income" ? "statsMenu__items statsMenu__itemsActive" : "statsMenu__items"}>Income</Link>
    <Link role="button" to="/stats/expenses" className={activeGraph === "expenses" ? "statsMenu__items statsMenu__itemsActive" : "statsMenu__items"}>Expense</Link>
    <Link role="button" to="/stats/balance" className={activeGraph === "balance" ? "statsMenu__items statsMenu__itemsActive" : "statsMenu__items"}>Income vs Expenses</Link>
    <Link role="button" to="/stats/subbalance" className={activeGraph === "subbalance" ? "statsMenu__items statsMenu__itemsActive" : "statsMenu__items"}>Balance</Link>
    <div className="statsMenu__items">Misc</div>
</nav>
*/