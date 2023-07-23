import { render, screen, renderHook, act, waitFor } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import Header from '../components/Header'
import { expect, vi, describe, test, beforeAll, beforeEach } from 'vitest'
// import matchers from '@testing-library/jest-dom/matchers'

describe('Given I am passing some fixed datas to the Header', async () => {

    beforeEach(() => {
        render(<Header format="compressed" username="Tony Montana" iban="NL89RABO1289364745" clientID='X458-89995'/>)
    })

    test('Those datas should be displayed into the rendered Header', async () => {
        await waitFor( () => expect(screen.getByText(/Tony Montana/i)).toBeInTheDocument())
        expect(screen.getByText(/NL89RABO1289364745/i)).toBeInTheDocument()
        expect(screen.getByText(/X458-89995/i)).toBeInTheDocument()
    })

})