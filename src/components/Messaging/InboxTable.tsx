import { useEffect, useState } from 'react'
import '../../styles/messaging/InboxTable.css'
// import '../../assets/icons/ok.png'
import ok from '/icons/ok.png'
import {IEmail, ISelectableEmail, emails} from '../../datas/emailsDatas'

// !!! not read icon, piece jointe

function InboxTable(){

    const [emailsState, setEmailsState] = useState<Array<ISelectableEmail>>(emailsToSelectableEmails(emails))
    const [areAllEmailsSelected, selectAllEmailsToSelected] = useState<boolean>(false)
    const [activePage, setActivePage] = useState<number>(1)
    const [sortingRule, _setSortingRule] = useState<{direction: 'asc' | 'desc', columnDatakey : string}>({direction : 'desc', columnDatakey : 'date'})

    // replace selectemail / sorting with a reducer
    function setSortingRule(columnDatakey : string){
        if(sortingRule.columnDatakey === columnDatakey) return _setSortingRule({direction : invertSortingDirection(sortingRule.direction), columnDatakey : columnDatakey})
        _setSortingRule({direction : 'asc', columnDatakey : columnDatakey})
    }

    // !!! should select only emails currently in the datatable
    function selectAllVisibleEmails(e : React.MouseEvent, selectStatus : boolean){
        e.preventDefault()
        e.stopPropagation()
        const emailsWithSelectedStatus = [...emailsState].map(email => {return {...email, selected : selectStatus}})
        selectAllEmailsToSelected(selectStatus)
        return setEmailsState(emailsWithSelectedStatus)
    }

    // select one target email
    function selectTargetEmail(e : React.MouseEvent, emailID : number){
        e.preventDefault()
        e.stopPropagation()
        const emails = [...emailsState]
        emails[emailID] = {...emails[emailID], selected : !emails[emailID].selected}
        return setEmailsState(emails)
    }

    // shorten longer email titles
    function cropEmailTitle(str : string){
        if (str.length <= 82) return str
        return str.slice(0,82)+'...'
    }

    function emailsSorting(sortingRule : {direction: 'asc' | 'desc', columnDatakey : string}, dataType : string){
        if(dataType === 'date'){
            switch(sortingRule.direction){
               case 'asc' : return setEmailsState([...emailsState].sort((a,b) => dateToTime(b[sortingRule.columnDatakey as keyof typeof b] as string) - dateToTime(a[sortingRule.columnDatakey as keyof typeof a] as string))); break
               case 'desc' : return setEmailsState([...emailsState].sort((a,b) => dateToTime(a[sortingRule.columnDatakey as keyof typeof a] as string) - dateToTime(b[sortingRule.columnDatakey as keyof typeof b] as string))); break
            }
        }
        switch(sortingRule.direction){
            case 'asc' : return setEmailsState([...emailsState].sort((a,b) => frCollator.compare(a[sortingRule.columnDatakey as keyof typeof a] as string, b[sortingRule.columnDatakey as keyof typeof b] as string))); break
            case 'desc' : return setEmailsState([...emailsState].sort((a,b) => frCollator.compare(b[sortingRule.columnDatakey as keyof typeof b] as string, a[sortingRule.columnDatakey as keyof typeof a] as string))); break
        }
    }

    // auto refresh the table after a new sorting rules has been defined
    useEffect(() => {
        // !!!! should deal with dates too
        emailsSorting({direction: sortingRule.direction, columnDatakey : sortingRule.columnDatakey}, 'string')
        setActivePage(1)
    }, [sortingRule])

    // state should be a reducer

    // menu : delete / spam / mark as read / refresh

    return(
        <article className="inboxEmailsList__container">
            <table>
                <thead>
                    <tr>
                        <th className='checkboxCell' onClick={(e) => selectAllVisibleEmails(e, !areAllEmailsSelected)}>
                            <label id="selectColumn" className='sr-only'>Select Mail</label>
                            <div style={areAllEmailsSelected === true ? {background:'#5c39aa', border:'1px solid #5c39aa'} : {}} className='customCheckbox' aria-checked={areAllEmailsSelected} role="checkbox" aria-labelledby='selectColumn'>
                                <img style={{width:'10px', height:'10px'}} src={ok}/>
                            </div>
                        </th>
                        <th onClick={() => setSortingRule('sender')}>From</th>
                        <th onClick={() => setSortingRule('title')}>Title</th>
                        <th onClick={() => setSortingRule('date')}>Date</th>
                        <th className='delete'>
                            <label id="deleteColumn" className='sr-only'>Delete Mail</label>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {[...emailsState].slice((activePage-1)*15, (activePage-1)*15+15).map((email, index) => 
                    <tr style={/*email.read === false ? {backgroundColor:'rgba(183, 167, 211, 0.3)'} :*/ {}} key={"tremail"+index}>
                        <td onClick={(e) => selectTargetEmail(e, index)} className='checkboxCell'>
                            <div style={email.selected === true ? {background:'#5c39aa', border:'1px solid #5c39aa'} : {}} className='customCheckbox' aria-checked={email.selected} role="checkbox" aria-labelledby='selectColumn'>
                                <img style={{width:'10px', height:'10px'}} src={ok}/>
                            </div>
                        </td>
                        <td style={/*email.read === false ? {fontWeight:'500', color:'rgba(91, 57, 170, 0.8)'} :*/ {}} className='from'>{email.sender}</td>
                        <td style={/*email.read === false ? {fontWeight:'500', color:'rgba(91, 57, 170, 0.8)'} :*/ {}}>{cropEmailTitle(email.title)}</td>
                        <td style={/*email.read === false ? {fontWeight:'500', color:'rgba(91, 57, 170, 0.8)'} :*/ {}}>{email.date}</td>
                        <td role="button" aria-labelledby='deleteColumn' style={{display:'flex', height:'37px', justifyContent:'center', alignItems:'center'}} className='delete'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"/></svg>
                        </td>
                    </tr>)}
                </tbody>
            </table>
            <div className='inbox__footer'>
                <span>Showing {(activePage-1)*15+1} to {(activePage-1)*15+15 > emailsState.length ? emailsState.length : (activePage-1)*15+15} of {emailsState.length} emails</span>
                <div className='pagination__container'>
                    {activePage > 1 && <div role="button" className='pagination__nextPrev' onClick={() => setActivePage(activePage-1)}>Prev</div>}
                    {activePage > 1 &&<div role="button" className='pagination__button' onClick={() => setActivePage(activePage-1)}>{activePage-1}</div>}
                    <div role="button" className='pagination__buttonActive'>{activePage}</div>
                    {(activePage-1)*15+15 < emailsState.length && <div role="button" className='pagination__button' onClick={() => setActivePage(activePage+1)}>{activePage+1}</div>}
                    {(activePage-1)*15+15 < emailsState.length && <div role="button" className='pagination__nextPrev' onClick={() => setActivePage(activePage+1)}>Next</div>}
                </div>
            </div>
        </article>
    )
}

export default InboxTable

function dateToTime(date : string){
    const [day, month, year] = date.split('/')
    return new Date(parseInt(year), parseInt(month), parseInt(day)).getTime()
}

function emailsToSelectableEmails(emailsList : Array<IEmail>){
    return emailsList.map(email => {
        const newEmail : ISelectableEmail = {...email, selected : false}
        return newEmail
    })
}

function invertSortingDirection(direction : string){
    if(direction === 'asc') return 'desc'
    return 'asc'
}

export const frCollator = new Intl.Collator('en')