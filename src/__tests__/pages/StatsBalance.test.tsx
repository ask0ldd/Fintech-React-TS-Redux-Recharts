import { render, screen, renderHook, act, waitFor } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import { expect, vi, describe, test, beforeAll, beforeEach } from 'vitest'
import Stats from '../../pages/Stats'

const MockedRouter = () => { 
    return(
        <BrowserRouter>
            <Stats/>
        </BrowserRouter>
    )
}

// !!! test icon vmenu actif

describe('Given I am on the Stats page', async () => {

    beforeAll(() => {
        vi.resetAllMocks()

        vi.mock('recharts', async () => {
            const OriginalModule = await vi.importActual<typeof import('recharts')>('recharts')
            return {
                ...OriginalModule,
                ResponsiveContainer: ({ children } : {children : any}) => (
                    <OriginalModule.ResponsiveContainer width={800} height={800}>
                        {children}
                    </OriginalModule.ResponsiveContainer>
                ),
            }
        })

        // to get around JSDom not handling the Dialog Element properly
        HTMLDialogElement.prototype.show = vi.fn()
        HTMLDialogElement.prototype.showModal = vi.fn()
        HTMLDialogElement.prototype.close = vi.fn()

        window.ResizeObserver = vi.fn().mockImplementation(() => ({
            observe: vi.fn(),
            unobserve: vi.fn(),
            disconnect: vi.fn(),
        }))
    })

    test('An horizontal menu, composed of 5 buttons, should be displayed', async ()=> {
        vi.mock('react-router-dom', async () => {
            const OriginalModule : any  = await vi.importActual('react-router-dom')
            return {
                ...OriginalModule,
                useParams: () => ({})
            }
        })

        render(<MockedRouter />)
        await waitFor( () => expect(screen.getByText(/Misc/i)).toBeInTheDocument())
        expect(screen.getAllByLabelText("secondary").length).toBe(1)
        expect(screen.getByLabelText("secondary").querySelectorAll(".statsMenu__items").length).toBe(5)
        await waitFor( () => expect(screen.getByText(/In & Out/i)).toBeInTheDocument())
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