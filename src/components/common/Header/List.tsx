import React from "react";
import {INFORMATION as info} from "../../../contrants/menu"

export default class List extends React.Component {    
    render() {
        return (
            info.map((item: any) => {
                return (
                    <div className="ml-4">
                        <p className="text-base font-medium text-blue-900 text-left">{item.title}</p>
                    </div>
                
                )
            })
        )
    }
}