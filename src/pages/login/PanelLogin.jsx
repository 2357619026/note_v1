import React from 'react'
import { Button } from '_antd@4.16.13@antd'

export const PanelLogin = (props) => {
    return (
        <div >
            <div className="display-flex">
                <div>
                    <span>账号：</span>
                    <input type={'text'}></input>
                </div>
                <div>
                    <span>密码：</span>
                    <input type={'text'}></input>
                </div>
            </div>
            <Button>登录</Button>
        </div>
    )
}

export default PanelLogin