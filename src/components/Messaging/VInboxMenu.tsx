import { ISelectableEmail } from '../../datas/emailsDatas'
import '../../styles/messaging/VInboxMenu.css'

function VInboxMenu({emailsState, setEmailsState} : IProps){
    return(
        <article className="vinboxMenu__container">
            <svg role="button" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path style={{transform:'translateY(1px)'}} d="M22.1818 39.4545C21.5818 39.4545 21.068 39.2407 20.6404 38.8131C20.2127 38.3855 19.9993 37.872 20 37.2727V24.1818C20 23.5818 20.2138 23.068 20.6415 22.6404C21.0691 22.2127 21.5825 21.9993 22.1818 22H39.6364C40.2364 22 40.7502 22.2138 41.1778 22.6415C41.6055 23.0691 41.8189 23.5825 41.8182 24.1818V30.4C41.4909 30.2364 41.1407 30.1 40.7676 29.9909C40.3945 29.8818 40.0175 29.8 39.6364 29.7455V26.3636L31.4818 31.4636C31.3909 31.5182 31.2953 31.5593 31.1949 31.5869C31.0945 31.6145 30.9993 31.628 30.9091 31.6273C30.8182 31.6273 30.7225 31.6138 30.6222 31.5869C30.5218 31.56 30.4265 31.5189 30.3364 31.4636L22.1818 26.3636V37.2727H30.9091C30.9091 37.6545 30.9364 38.0225 30.9909 38.3767C31.0455 38.7309 31.1273 39.0902 31.2364 39.4545H22.1818ZM30.9091 29.6364L39.6364 24.1818H22.1818L30.9091 29.6364ZM22.1818 37.2727V29.6364V29.7182V26.3636V26.6364V25.0545C22.1818 24.8545 22.1818 24.8545 22.1818 25.0545V25.0404V26.6364V6.3636V37.2727ZM38.5455 42.7273C37.0364 42.7273 35.7498 42.1953 34.6858 41.1313C33.6218 40.0673 33.0902 38.7811 33.0909 37.2727C33.0909 35.7636 33.6229 34.4771 34.6869 33.4131C35.7509 32.3491 37.0371 31.8175 38.5455 31.8182C40.0545 31.8182 41.3411 32.3502 42.4051 33.4142C43.4691 34.4782 44.0007 35.7644 44 37.2727C44 38.7818 43.468 40.0684 42.404 41.1324C41.34 42.1964 40.0538 42.728 38.5455 42.7273ZM35.8182 37.8182H41.2727C41.4182 37.8182 41.5455 37.7636 41.6545 37.6545C41.7636 37.5455 41.8182 37.4182 41.8182 37.2727C41.8182 37.1273 41.7636 37 41.6545 36.8909C41.5455 36.7818 41.4182 36.7273 41.2727 36.7273H35.8182C35.6727 36.7273 35.5455 36.7818 35.4364 36.8909C35.3273 37 35.2727 37.1273 35.2727 37.2727C35.2727 37.4182 35.3273 37.5455 35.4364 37.6545C35.5455 37.7636 35.6727 37.8182 35.8182 37.8182Z" fill="#525354"/></svg>
            <svg role="button" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.3329 24.3329L31.6646 30.1653L40.9964 24.3329H22.3329ZM22.3329 40.6634C21.6914 40.6634 21.142 40.4348 20.6847 39.9775C20.2275 39.5203 19.9992 38.9713 20 38.3305V24.3329C20 23.6914 20.2286 23.142 20.6859 22.6847C21.1431 22.2275 21.6922 21.9992 22.3329 22H40.9964C41.6379 22 42.1873 22.2286 42.6446 22.6859C43.1018 23.1431 43.3301 23.6922 43.3293 24.3329V29.407L42.1628 30.5735L40.9964 31.74V26.6659L32.277 32.1191C32.2187 32.158 32.0146 32.2163 31.6646 32.294C31.5674 32.294 31.4652 32.2797 31.3579 32.2509C31.2505 32.2221 31.1487 32.1782 31.0522 32.1191L22.3329 26.6659V38.3305H28.3402L30.6731 40.6634H22.3329ZM36.2722 39.7303L42.0462 33.9563C42.26 33.7424 42.5322 33.6355 42.8627 33.6355C43.1932 33.6355 43.4654 33.7424 43.6792 33.9563C43.8931 34.1701 44 34.4423 44 34.7728C44 35.1033 43.8931 35.3755 43.6792 35.5893L37.0887 42.1798C36.8554 42.4131 36.5832 42.5298 36.2722 42.5298C35.9611 42.5298 35.6889 42.4131 35.4556 42.1798L32.1312 38.8554C31.9174 38.6416 31.8104 38.3694 31.8104 38.0389C31.8104 37.7084 31.9174 37.4362 32.1312 37.2224C32.3451 37.0085 32.6173 36.9016 32.9478 36.9016C33.2783 36.9016 33.5504 37.0085 33.7643 37.2224L36.2722 39.7303Z" fill="#525354"/></svg>
            <svg role="button" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path style={{transform:'translateY(1px)'}} d="M22.1818 38.4545C21.5818 38.4545 21.068 38.2407 20.6404 37.8131C20.2127 37.3855 19.9993 36.872 20 36.2727V23.1818C20 22.5818 20.2138 22.068 20.6415 21.6404C21.0691 21.2127 21.5825 20.9993 22.1818 21H39.6364C40.2364 21 40.7502 21.2138 41.1778 21.6415C41.6055 22.0691 41.8189 22.5825 41.8182 23.1818V28.6364H39.6364V25.3636L31.4818 30.4636C31.3909 30.5182 31.2953 30.5593 31.1949 30.5869C31.0945 30.6145 30.9993 30.628 30.9091 30.6273C30.8182 30.6273 30.7225 30.6138 30.6222 30.5869C30.5218 30.56 30.4265 30.5189 30.3364 30.4636L22.1818 25.3636V36.2727H33.0909V38.4545H22.1818ZM30.9091 28.6364L39.6364 23.1818H22.1818L30.9091 28.6364ZM39.6364 42.8182C38.4364 42.8182 37.4091 42.3909 36.5545 41.5364C35.7 40.6818 35.2727 39.6545 35.2727 38.4545V33.5455C35.2727 32.7818 35.5364 32.1364 36.0636 31.6091C36.5909 31.0818 37.2364 30.8182 38 30.8182C38.7636 30.8182 39.4091 31.0818 39.9364 31.6091C40.4636 32.1364 40.7273 32.7818 40.7273 33.5455V37.3636C40.7273 37.6727 40.6225 37.932 40.4131 38.1415C40.2036 38.3509 39.9447 38.4553 39.6364 38.4545C39.3273 38.4545 39.068 38.3498 38.8585 38.1404C38.6491 37.9309 38.5447 37.672 38.5455 37.3636V33.5455C38.5455 33.4 38.4909 33.2727 38.3818 33.1636C38.2727 33.0545 38.1455 33 38 33C37.8545 33 37.7273 33.0545 37.6182 33.1636C37.5091 33.2727 37.4545 33.4 37.4545 33.5455V38.4545C37.4545 39.0545 37.6684 39.5684 38.096 39.996C38.5236 40.4236 39.0371 40.6371 39.6364 40.6364C40.2364 40.6364 40.7502 40.4225 41.1778 39.9949C41.6055 39.5673 41.8189 39.0538 41.8182 38.4545V35.1818C41.8182 34.8727 41.9229 34.6135 42.1324 34.404C42.3418 34.1945 42.6007 34.0902 42.9091 34.0909C43.2182 34.0909 43.4774 34.1956 43.6869 34.4051C43.8964 34.6145 44.0007 34.8735 44 35.1818V38.4545C44 39.6545 43.5727 40.6818 42.7182 41.5364C41.8636 42.3909 40.8364 42.8182 39.6364 42.8182Z" fill="#525354"/></svg>
            <svg role="button" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.4 42.6C21.74 42.6 21.1748 42.3648 20.7044 41.8944C20.234 41.424 19.9992 40.8592 20 40.2V25.8C20 25.14 20.2352 24.5748 20.7056 24.1044C21.176 23.634 21.7408 23.3992 22.4 23.4H34.52C34.44 23.8 34.4 24.2 34.4 24.6C34.4 25 34.44 25.4 34.52 25.8H22.4L32 31.8L36.38 29.07C36.66 29.33 36.9652 29.5552 37.2956 29.7456C37.626 29.936 37.9708 30.1008 38.33 30.24L32 34.2L22.4 28.2V40.2H41.6V30.48C42.06 30.38 42.49 30.24 42.89 30.06C43.29 29.88 43.66 29.66 44 29.4V40.2C44 40.86 43.7648 41.4252 43.2944 41.8956C42.824 42.366 42.2592 42.6008 41.6 42.6H22.4ZM40.4 28.2C39.4 28.2 38.55 27.85 37.85 27.15C37.15 26.45 36.8 25.6 36.8 24.6C36.8 23.6 37.15 22.75 37.85 22.05C38.55 21.35 39.4 21 40.4 21C41.4 21 42.25 21.35 42.95 22.05C43.65 22.75 44 23.6 44 24.6C44 25.6 43.65 26.45 42.95 27.15C42.25 27.85 41.4 28.2 40.4 28.2Z" fill="#525354"/></svg>
        </article>
    )
}

export default VInboxMenu

interface IProps{
    emailsState : Array<ISelectableEmail>
    setEmailsState : (emails : Array<ISelectableEmail>) => void
}