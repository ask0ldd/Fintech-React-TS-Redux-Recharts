import '../../styles/messaging/VInboxMenu.css'

function VInboxMenu(){
    return(
        <article className="vinboxMenu__container">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.1818 39.4545C21.5818 39.4545 21.068 39.2407 20.6404 38.8131C20.2127 38.3855 19.9993 37.872 20 37.2727V24.1818C20 23.5818 20.2138 23.068 20.6415 22.6404C21.0691 22.2127 21.5825 21.9993 22.1818 22H39.6364C40.2364 22 40.7502 22.2138 41.1778 22.6415C41.6055 23.0691 41.8189 23.5825 41.8182 24.1818V30.4C41.4909 30.2364 41.1407 30.1 40.7676 29.9909C40.3945 29.8818 40.0175 29.8 39.6364 29.7455V26.3636L31.4818 31.4636C31.3909 31.5182 31.2953 31.5593 31.1949 31.5869C31.0945 31.6145 30.9993 31.628 30.9091 31.6273C30.8182 31.6273 30.7225 31.6138 30.6222 31.5869C30.5218 31.56 30.4265 31.5189 30.3364 31.4636L22.1818 26.3636V37.2727H30.9091C30.9091 37.6545 30.9364 38.0225 30.9909 38.3767C31.0455 38.7309 31.1273 39.0902 31.2364 39.4545H22.1818ZM30.9091 29.6364L39.6364 24.1818H22.1818L30.9091 29.6364ZM22.1818 37.2727V29.6364V29.7182V26.3636V26.6364V25.0545C22.1818 24.8545 22.1818 24.8545 22.1818 25.0545V25.0404V26.6364V6.3636V37.2727ZM38.5455 42.7273C37.0364 42.7273 35.7498 42.1953 34.6858 41.1313C33.6218 40.0673 33.0902 38.7811 33.0909 37.2727C33.0909 35.7636 33.6229 34.4771 34.6869 33.4131C35.7509 32.3491 37.0371 31.8175 38.5455 31.8182C40.0545 31.8182 41.3411 32.3502 42.4051 33.4142C43.4691 34.4782 44.0007 35.7644 44 37.2727C44 38.7818 43.468 40.0684 42.404 41.1324C41.34 42.1964 40.0538 42.728 38.5455 42.7273ZM35.8182 37.8182H41.2727C41.4182 37.8182 41.5455 37.7636 41.6545 37.6545C41.7636 37.5455 41.8182 37.4182 41.8182 37.2727C41.8182 37.1273 41.7636 37 41.6545 36.8909C41.5455 36.7818 41.4182 36.7273 41.2727 36.7273H35.8182C35.6727 36.7273 35.5455 36.7818 35.4364 36.8909C35.3273 37 35.2727 37.1273 35.2727 37.2727C35.2727 37.4182 35.3273 37.5455 35.4364 37.6545C35.5455 37.7636 35.6727 37.8182 35.8182 37.8182Z" fill="#525354"/></svg>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.1818 39.4545C21.5818 39.4545 21.068 39.2407 20.6404 38.8131C20.2127 38.3855 19.9993 37.872 20 37.2727V24.1818C20 23.5818 20.2138 23.068 20.6415 22.6404C21.0691 22.2127 21.5825 21.9993 22.1818 22H39.6364C40.2364 22 40.7502 22.2138 41.1778 22.6415C41.6055 23.0691 41.8189 23.5825 41.8182 24.1818V30.4C41.4909 30.2364 41.1407 30.1 40.7676 29.9909C40.3945 29.8818 40.0175 29.8 39.6364 29.7455V26.3636L31.4818 31.4636C31.3909 31.5182 31.2953 31.5593 31.1949 31.5869C31.0945 31.6145 30.9993 31.628 30.9091 31.6273C30.8182 31.6273 30.7225 31.6138 30.6222 31.5869C30.5218 31.56 30.4265 31.5189 30.3364 31.4636L22.1818 26.3636V37.2727H30.9091C30.9091 37.6545 30.9364 38.0225 30.9909 38.3767C31.0455 38.7309 31.1273 39.0902 31.2364 39.4545H22.1818ZM30.9091 29.6364L39.6364 24.1818H22.1818L30.9091 29.6364ZM22.1818 37.2727V29.6364V29.7182V26.3636V26.6364V25.0545C22.1818 24.8545 22.1818 24.8545 22.1818 25.0545V25.0404V26.6364V6.3636V37.2727ZM38.5455 42.7273C37.0364 42.7273 35.7498 42.1953 34.6858 41.1313C33.6218 40.0673 33.0902 38.7811 33.0909 37.2727C33.0909 35.7636 33.6229 34.4771 34.6869 33.4131C35.7509 32.3491 37.0371 31.8175 38.5455 31.8182C40.0545 31.8182 41.3411 32.3502 42.4051 33.4142C43.4691 34.4782 44.0007 35.7644 44 37.2727C44 38.7818 43.468 40.0684 42.404 41.1324C41.34 42.1964 40.0538 42.728 38.5455 42.7273ZM35.8182 37.8182H41.2727C41.4182 37.8182 41.5455 37.7636 41.6545 37.6545C41.7636 37.5455 41.8182 37.4182 41.8182 37.2727C41.8182 37.1273 41.7636 37 41.6545 36.8909C41.5455 36.7818 41.4182 36.7273 41.2727 36.7273H35.8182C35.6727 36.7273 35.5455 36.7818 35.4364 36.8909C35.3273 37 35.2727 37.1273 35.2727 37.2727C35.2727 37.4182 35.3273 37.5455 35.4364 37.6545C35.5455 37.7636 35.6727 37.8182 35.8182 37.8182Z" fill="#525354"/></svg>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.1818 39.4545C21.5818 39.4545 21.068 39.2407 20.6404 38.8131C20.2127 38.3855 19.9993 37.872 20 37.2727V24.1818C20 23.5818 20.2138 23.068 20.6415 22.6404C21.0691 22.2127 21.5825 21.9993 22.1818 22H39.6364C40.2364 22 40.7502 22.2138 41.1778 22.6415C41.6055 23.0691 41.8189 23.5825 41.8182 24.1818V30.4C41.4909 30.2364 41.1407 30.1 40.7676 29.9909C40.3945 29.8818 40.0175 29.8 39.6364 29.7455V26.3636L31.4818 31.4636C31.3909 31.5182 31.2953 31.5593 31.1949 31.5869C31.0945 31.6145 30.9993 31.628 30.9091 31.6273C30.8182 31.6273 30.7225 31.6138 30.6222 31.5869C30.5218 31.56 30.4265 31.5189 30.3364 31.4636L22.1818 26.3636V37.2727H30.9091C30.9091 37.6545 30.9364 38.0225 30.9909 38.3767C31.0455 38.7309 31.1273 39.0902 31.2364 39.4545H22.1818ZM30.9091 29.6364L39.6364 24.1818H22.1818L30.9091 29.6364ZM22.1818 37.2727V29.6364V29.7182V26.3636V26.6364V25.0545C22.1818 24.8545 22.1818 24.8545 22.1818 25.0545V25.0404V26.6364V6.3636V37.2727ZM38.5455 42.7273C37.0364 42.7273 35.7498 42.1953 34.6858 41.1313C33.6218 40.0673 33.0902 38.7811 33.0909 37.2727C33.0909 35.7636 33.6229 34.4771 34.6869 33.4131C35.7509 32.3491 37.0371 31.8175 38.5455 31.8182C40.0545 31.8182 41.3411 32.3502 42.4051 33.4142C43.4691 34.4782 44.0007 35.7644 44 37.2727C44 38.7818 43.468 40.0684 42.404 41.1324C41.34 42.1964 40.0538 42.728 38.5455 42.7273ZM35.8182 37.8182H41.2727C41.4182 37.8182 41.5455 37.7636 41.6545 37.6545C41.7636 37.5455 41.8182 37.4182 41.8182 37.2727C41.8182 37.1273 41.7636 37 41.6545 36.8909C41.5455 36.7818 41.4182 36.7273 41.2727 36.7273H35.8182C35.6727 36.7273 35.5455 36.7818 35.4364 36.8909C35.3273 37 35.2727 37.1273 35.2727 37.2727C35.2727 37.4182 35.3273 37.5455 35.4364 37.6545C35.5455 37.7636 35.6727 37.8182 35.8182 37.8182Z" fill="#525354"/></svg>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.1818 39.4545C21.5818 39.4545 21.068 39.2407 20.6404 38.8131C20.2127 38.3855 19.9993 37.872 20 37.2727V24.1818C20 23.5818 20.2138 23.068 20.6415 22.6404C21.0691 22.2127 21.5825 21.9993 22.1818 22H39.6364C40.2364 22 40.7502 22.2138 41.1778 22.6415C41.6055 23.0691 41.8189 23.5825 41.8182 24.1818V30.4C41.4909 30.2364 41.1407 30.1 40.7676 29.9909C40.3945 29.8818 40.0175 29.8 39.6364 29.7455V26.3636L31.4818 31.4636C31.3909 31.5182 31.2953 31.5593 31.1949 31.5869C31.0945 31.6145 30.9993 31.628 30.9091 31.6273C30.8182 31.6273 30.7225 31.6138 30.6222 31.5869C30.5218 31.56 30.4265 31.5189 30.3364 31.4636L22.1818 26.3636V37.2727H30.9091C30.9091 37.6545 30.9364 38.0225 30.9909 38.3767C31.0455 38.7309 31.1273 39.0902 31.2364 39.4545H22.1818ZM30.9091 29.6364L39.6364 24.1818H22.1818L30.9091 29.6364ZM22.1818 37.2727V29.6364V29.7182V26.3636V26.6364V25.0545C22.1818 24.8545 22.1818 24.8545 22.1818 25.0545V25.0404V26.6364V6.3636V37.2727ZM38.5455 42.7273C37.0364 42.7273 35.7498 42.1953 34.6858 41.1313C33.6218 40.0673 33.0902 38.7811 33.0909 37.2727C33.0909 35.7636 33.6229 34.4771 34.6869 33.4131C35.7509 32.3491 37.0371 31.8175 38.5455 31.8182C40.0545 31.8182 41.3411 32.3502 42.4051 33.4142C43.4691 34.4782 44.0007 35.7644 44 37.2727C44 38.7818 43.468 40.0684 42.404 41.1324C41.34 42.1964 40.0538 42.728 38.5455 42.7273ZM35.8182 37.8182H41.2727C41.4182 37.8182 41.5455 37.7636 41.6545 37.6545C41.7636 37.5455 41.8182 37.4182 41.8182 37.2727C41.8182 37.1273 41.7636 37 41.6545 36.8909C41.5455 36.7818 41.4182 36.7273 41.2727 36.7273H35.8182C35.6727 36.7273 35.5455 36.7818 35.4364 36.8909C35.3273 37 35.2727 37.1273 35.2727 37.2727C35.2727 37.4182 35.3273 37.5455 35.4364 37.6545C35.5455 37.7636 35.6727 37.8182 35.8182 37.8182Z" fill="#525354"/></svg>
        </article>
    )
}

export default VInboxMenu