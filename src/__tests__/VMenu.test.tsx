import { render, screen, renderHook, act, waitFor } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import VMenu from '../components/VMenu'
import { expect, vi, describe, test, beforeAll, beforeEach } from 'vitest'
import App from '../App'
import Stats from '../pages/Stats'
import Trading from '../pages/Trading'

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

window.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}))

describe('Given I am one the Home page', async () => {
    test('the home icon should be highlighted by default', async () => {
        
        const MockedRouter = () => { 
            return(
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            )
        }
        render(<MockedRouter />)
        // render(<VMenu activePage="home"/>)
        await waitFor( () => expect(screen.getByAltText("home menu item").parentElement?.classList.contains('activeItem')).toBeTruthy())
        expect(screen.getByAltText("stats menu item").parentElement?.classList.contains('activeItem')).toBeFalsy()
        expect(screen.getByAltText("chat menu item").parentElement?.classList.contains('activeItem')).toBeFalsy()
        expect(screen.getByAltText("settings menu item").parentElement?.classList.contains('activeItem')).toBeFalsy()
        expect(screen.getByAltText("accounts menu item").parentElement?.classList.contains('activeItem')).toBeFalsy()
        expect(screen.getByAltText("dark mode menu item").parentElement?.classList.contains('activeItem')).toBeFalsy()
    })
})

describe('Given I am one the Stats page', async () => {
    test('the stats icon should be highlighted by default', async () => {
        
        const MockedRouter = () => { 
            return(
                <BrowserRouter>
                    <Stats/>
                </BrowserRouter>
            )
        }
        render(<MockedRouter />)
        // render(<VMenu activePage="home"/>)
        await waitFor( () => expect(screen.getByAltText("stats menu item").parentElement?.classList.contains('activeItem')).toBeTruthy())
        expect(screen.getByAltText("home menu item").parentElement?.classList.contains('activeItem')).toBeFalsy()
        expect(screen.getByAltText("chat menu item").parentElement?.classList.contains('activeItem')).toBeFalsy()
        expect(screen.getByAltText("settings menu item").parentElement?.classList.contains('activeItem')).toBeFalsy()
        expect(screen.getByAltText("accounts menu item").parentElement?.classList.contains('activeItem')).toBeFalsy()
        expect(screen.getByAltText("dark mode menu item").parentElement?.classList.contains('activeItem')).toBeFalsy()
    })
})

describe('Given I am one the Trading page', async () => {
    test('the trading icon should be highlighted by default', async () => {
        
        const MockedRouter = () => { 
            return(
                <BrowserRouter>
                    <Trading/>
                </BrowserRouter>
            )
        }
        render(<MockedRouter />)
        // render(<VMenu activePage="home"/>)
        await waitFor( () => expect(screen.getByAltText("stats menu item").parentElement?.classList.contains('activeItem')).toBeTruthy())
        expect(screen.getByAltText("home menu item").parentElement?.classList.contains('activeItem')).toBeFalsy()
        expect(screen.getByAltText("chat menu item").parentElement?.classList.contains('activeItem')).toBeFalsy()
        expect(screen.getByAltText("settings menu item").parentElement?.classList.contains('activeItem')).toBeFalsy()
        expect(screen.getByAltText("accounts menu item").parentElement?.classList.contains('activeItem')).toBeFalsy()
        expect(screen.getByAltText("dark mode menu item").parentElement?.classList.contains('activeItem')).toBeFalsy()
    })
})

