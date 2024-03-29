import '../../styles/messaging/InboxTable.css'
import ok from '/icons/ok.png'
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux'
import { deleteEmail, setActivePage, setSortingRule, setTargetEmailSelectStatus, switchSelectAllCheckboxStatus } from '../../redux/messagingSlice'

function InboxTable(){

    const dispatch = useTypedDispatch()
    const emails  = useTypedSelector((state) => state.messaging.emails)
    const activePage  = useTypedSelector((state) => state.messaging.activePage)
    const sortedEmails  = useTypedSelector((state) => state.messaging.sortedEmails)
    const selectAllCheckboxStatus  = useTypedSelector((state) => state.messaging.selectAllCheckboxStatus)
    const filter  = useTypedSelector((state) => state.messaging.filter)

    // menu : delete / spam / mark as read / refresh

    return(
        <article className="inboxEmailsList__container">
            <table>
                <thead>
                    <tr>
                        <th className='checkboxCell' onClick={() => dispatch(switchSelectAllCheckboxStatus({}))}>
                            <label id="selectColumn" className='sr-only'>Select All Mails</label>
                            <div style={selectAllCheckboxStatus === true ? {background:'#5c39aa', border:'1px solid #5c39aa'} : {}} className='customCheckbox' aria-checked={selectAllCheckboxStatus} role="checkbox" aria-labelledby='selectColumn'>
                                {selectAllCheckboxStatus === true && <img alt="allSelectedV" style={{width:'10px', height:'10px'}} src={ok}/>}
                            </div>
                        </th>
                        <th className='fileAttachColumn'></th>
                        <th onClick={() => dispatch(setSortingRule({datakey : 'sender', datatype : 'string'}))}>From</th>
                        <th onClick={() => dispatch(setSortingRule({datakey : 'title', datatype : 'string'}))}>Title</th>
                        <th onClick={() => dispatch(setSortingRule({datakey : 'date', datatype : 'date'}))}>Date</th>
                        <th className='delete'>
                            <label id="deleteColumn" className='sr-only'>Delete Mail</label>
                        </th>
                    </tr>
                </thead>
                <tbody data-testid="inboxbody">
                    {[...sortedEmails].slice((activePage-1)*15, (activePage-1)*15+15).map((email, index) => /* creer une liste liant index & id */
                    <tr style={/*email.read === false ? {backgroundColor:'rgba(183, 167, 211, 0.3)'} :*/ {}} key={"tremail"+index}>
                        <td onClick={() => dispatch(setTargetEmailSelectStatus({emailId : email.id}))} className='checkboxCell'>
                            <div style={email.selected === true ? {background:'#5c39aa', border:'1px solid #5c39aa'} : {}} className='customCheckbox' aria-checked={email.selected} role="checkbox">
                                {email.selected === true && <img alt="selectedV" style={{width:'10px', height:'10px'}} src={ok}/>}
                            </div>
                        </td>
                        <td className='fileAttachColumn'>
                            {email.file!=null &&
                                <svg data-testid="attachment icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <title id={'fileAttachment'+index}>File Attachment</title>
                                <path d="M12.4219 5.45802L17.6492 14.5119C18.6537 16.2518 18.0581 18.4747 16.3182 19.4793C14.5782 20.4838 12.3554 19.8882 11.3508 18.1483L5.66899 8.30709C5.3676 7.78508 5.28593 7.16472 5.44194 6.5825C5.59795 6.00027 5.97885 5.50387 6.50086 5.20248C7.02287 4.9011 7.64323 4.81943 8.22545 4.97544C8.80768 5.13144 9.30408 5.51235 9.60547 6.03436L14.3782 14.301C14.6282 14.734 14.4785 15.2928 14.0454 15.5428C13.6124 15.7928 13.0536 15.6431 12.8036 15.2101L8.48542 7.73075L7.30448 8.41256L11.6227 15.8919C11.924 16.4139 12.4204 16.7948 13.0027 16.9508C13.5849 17.1068 14.2053 17.0251 14.7273 16.7238C15.2493 16.4224 15.6302 15.926 15.7862 15.3437C15.9422 14.7615 15.8605 14.1412 15.5591 13.6191L10.7864 5.35254C9.78186 3.61262 7.55897 3.01699 5.81904 4.02154C4.07912 5.02609 3.4835 7.24898 4.48804 8.98891L10.1699 18.8301C11.5517 21.2235 14.6066 22.042 17 20.6602C19.3934 19.2784 20.2119 16.2235 18.8301 13.8301L13.6028 4.7762L12.4219 5.45802Z" fill="#545454"/>
                                </svg>
                            }
                        </td>
                        <td style={/*email.read === false ? {fontWeight:'600', color:'rgba(91, 57, 170, 0.8)'} :*/ {}} className='from'>{email.sender}</td>
                        <td style={/*email.read === false ? {fontWeight:'600', color:'rgba(91, 57, 170, 0.8)'} :*/ {}}>{cropEmailTitle(email.title)}</td>
                        <td style={{width:'10rem'}/*email.read === false ? {fontWeight:'600', color:'rgba(91, 57, 170, 0.8)'} :*/}>{formatDate(email.date)}</td>
                        <td onClick={() => dispatch(deleteEmail({emailId :email.id}))} role="button" aria-labelledby='deleteColumn' style={{display:'flex', height:'37px', justifyContent:'center', alignItems:'center'}} className='delete'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><title id={'deleteMail'+index}>Delete Mail</title><path fill="currentColor" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"/></svg>
                        </td>
                    </tr>)}
                </tbody>
            </table>
            <div className='inbox__footer'>
                <span>Showing {(activePage-1)*15+1} to {(activePage-1)*15+15 > sortedEmails.length ? sortedEmails.length : (activePage-1)*15+15} of {sortedEmails.length} emails</span>
                <div className='pagination__container'>
                    {activePage > 1 && <div role="button" className='pagination__nextPrev' onClick={() => dispatch(setActivePage({activePage : activePage-1}))}>Prev</div>}
                    {activePage > 1 && <div role="button" className='pagination__button' onClick={() => dispatch(setActivePage({activePage : activePage-1}))}>{activePage-1}</div>}
                    <div role="button" className='pagination__buttonActive'>{activePage}</div>
                    {(activePage-1)*15+15 < sortedEmails.length && <div role="button" className='pagination__button' onClick={() => dispatch(setActivePage({activePage : activePage+1}))}>{activePage+1}</div>}
                    {(activePage-1)*15+15 < sortedEmails.length && <div role="button" className='pagination__nextPrev' onClick={() => dispatch(setActivePage({activePage : activePage+1}))}>Next</div>}
                </div>
            </div>
        </article>
    )
}

export default InboxTable

export const frCollator = new Intl.Collator('en')

function formatDate(date : string){
    return date.replaceAll('/', '-')
}

// shorten longer email titles
function cropEmailTitle(str : string){
    if (str.length <= 78) return str
    return str.slice(0,78)+'...'
}