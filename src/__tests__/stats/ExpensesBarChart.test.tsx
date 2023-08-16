import { render, screen, renderHook, act, waitFor, fireEvent } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import { expect, vi, describe, test, beforeAll, beforeEach } from 'vitest'
import ExpensesBarChart, {CustomTooltip} from '../../components/Stats/ExpensesBarChart'
import { ResponsiveContainer } from 'recharts'
import userEvent from '@testing-library/user-event'

import { datas } from '../../pages/Stats'

describe('Given : the ExpensesBarChart is rendered with 12 months of datas', async () => {
    
    beforeAll(()=>{
        // taking the whole recharts module and mocking only the responsive container to fix its dimensions
        // if dimensions are not fixed, recharts will render nothing into it
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

    test('The Title & the Legend should be displayed', async () => {
        render(<ExpensesBarChart datas={datas} />)
        await waitFor(() => expect(screen.getByRole('region')).toBeInTheDocument())
        expect(screen.getByText(/Monthly Expenses/i)).toBeInTheDocument()
        const regionContainer = screen.getByRole('region')
        const legend = regionContainer.querySelector('span.recharts-legend-item-text')
        expect(legend?.innerHTML.includes("Expenses")).toBeTruthy()
    })

    test('12 Bars should be displayed', async()=> {
        render(<ExpensesBarChart datas={datas} />)
        await waitFor(() => expect(screen.getByRole('region')).toBeInTheDocument())
        const regionContainer = screen.getByRole('region')
        expect(regionContainer.querySelectorAll('g.recharts-bar-rectangle').length).toBe(12)
    })

    // !!! hover issue to fix
    test('The tooltip dialog should exist but should not be displayed', async()=> {
        render(<ExpensesBarChart datas={datas} />)
        await waitFor(() => expect(screen.getByRole('region')).toBeInTheDocument())
        const regionContainer = screen.getByRole('region')
        expect(regionContainer.querySelector('div.recharts-tooltip-wrapper')).toBeInTheDocument()
        expect(regionContainer.querySelector('div.recharts-tooltip-wrapper')).not.toBeVisible()
    })

    test('Tooltip component displays the payload values', async()=> {
        render(<CustomTooltip payload={[{value:"000"}]} />)
        await waitFor(() => expect(screen.getByText(/Expenses : 000/i)).toBeInTheDocument())
    })

    test('The Custom Labels are displayed', async()=> {
        render(<ExpensesBarChart datas={datas} />)
        await waitFor(() => expect(screen.getByText(/2927/i)).toBeInTheDocument())
    })
})